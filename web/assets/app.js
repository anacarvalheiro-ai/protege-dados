(() => {
  "use strict";
  const DATA_URL = "data/ivpd_uf_v1.json";
  const $ = id => document.getElementById(id);
  const el = {uf:$("uf"),vuln:$("vuln"),taxa:$("taxa"),internet:$("internet"),bars:$("bars"),download:$("download"),downloadStandard:$("download-standard"),message:$("download-message")};
  let records = [], selected = null;

  const aliases = {
    uf:["uf","sigla_uf"], populacao:["populacao","população"], denuncias:["denuncias","denúncias"],
    taxa:["taxa_denuncias_100k","taxa_denuncias","taxa"], escolas:["escolas"],
    internetCount:["internet","escolas_internet"], internetPct:["perc_escolas_internet","percentual_escolas_internet"],
    vulnerabilidade:["eixo_vulnerabilidade","vulnerabilidade","indice_vulnerabilidade","ivpd","indice"],
    denunciasNorm:["denuncias_norm","denuncias_normalizadas","componente_denuncias"],
    deficitInternetNorm:["deficit_internet_norm","deficit_internet","componente_internet"],
    deficitBandaNorm:["deficit_banda_norm","deficit_banda_larga","componente_banda_larga"]
  };

  function get(record, keys){for(const key of keys){if(record[key]!==undefined&&record[key]!==null&&record[key]!=="")return record[key]}return null}
  function num(value){if(typeof value==="number")return value; if(value===null||value===undefined||value==="")return NaN; const n=Number(String(value).trim().replace(/\./g,"").replace(",",".")); return Number.isFinite(n)?n:NaN}
  function fmt(value,d=1){const n=num(value);return Number.isFinite(n)?new Intl.NumberFormat("pt-BR",{minimumFractionDigits:d,maximumFractionDigits:d}).format(n):"—"}
  function normalize(payload){if(Array.isArray(payload))return payload;if(Array.isArray(payload.data))return payload.data;if(Array.isArray(payload.records))return payload.records;return Object.entries(payload).map(([uf,v])=>({uf,...v}))}
  function derive(r){
    const pop=num(get(r,aliases.populacao)), den=num(get(r,aliases.denuncias)), escolas=num(get(r,aliases.escolas)), internet=num(get(r,aliases.internetCount));
    let taxa=num(get(r,aliases.taxa)); if(!Number.isFinite(taxa)&&pop>0&&Number.isFinite(den))taxa=den/pop*100000;
    let internetPct=num(get(r,aliases.internetPct)); if(!Number.isFinite(internetPct)&&escolas>0&&Number.isFinite(internet))internetPct=internet/escolas*100;
    return {...r,uf:String(get(r,aliases.uf)||"").trim().toUpperCase(),taxa,internetPct,vulnerabilidade:num(get(r,aliases.vulnerabilidade)),denunciasNorm:num(get(r,aliases.denunciasNorm)),deficitInternetNorm:num(get(r,aliases.deficitInternetNorm)),deficitBandaNorm:num(get(r,aliases.deficitBandaNorm))};
  }
  function bar(label,value){const v=Number.isFinite(value)?Math.min(100,Math.max(0,value)):0;const d=document.createElement("div");d.innerHTML=`<div style="display:flex;justify-content:space-between;margin:.65rem 0 .3rem"><strong>${label}</strong><span>${fmt(v)}</span></div><div style="height:.78rem;border-radius:999px;background:#dfe8f0;overflow:hidden"><div style="width:${v}%;height:100%;background:#0b6db5"></div></div>`;return d}
  function render(r){selected=derive(r);el.vuln.textContent=fmt(selected.vulnerabilidade);el.taxa.textContent=fmt(selected.taxa);el.internet.textContent=Number.isFinite(selected.internetPct)?`${fmt(selected.internetPct)}%`:"—";el.bars.innerHTML="";el.bars.append(bar("Denúncias notificadas",selected.denunciasNorm),bar("Déficit de internet escolar",selected.deficitInternetNorm),bar("Déficit de banda larga escolar",selected.deficitBandaNorm))}
  function esc(v,sep){const t=v==null?"":String(v);return t.includes('"')||t.includes("\n")||t.includes(sep)?`"${t.replace(/"/g,'""')}"`:t}
  function csv(record,sep=";",decimalComma=true){const keys=Object.keys(record);const header=keys.map(k=>esc(k,sep)).join(sep);const row=keys.map(k=>{let v=record[k];if(typeof v==="number"&&decimalComma)v=String(v).replace(".",",");return esc(v,sep)}).join(sep);return "\uFEFF"+header+"\r\n"+row+"\r\n"}
  function save(content,name){const blob=new Blob([content],{type:"text/csv;charset=utf-8;"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)}
  function msg(t,error=false){el.message.textContent=t;el.message.style.color=error?"#9b1c1c":"#14733c"}
  async function init(){try{const res=await fetch(DATA_URL,{cache:"no-store"});if(!res.ok)throw new Error(`HTTP ${res.status}`);records=normalize(await res.json()).map(derive).filter(x=>x.uf).sort((a,b)=>a.uf.localeCompare(b.uf,"pt-BR"));el.uf.innerHTML=records.map(x=>`<option value="${x.uf}">${x.uf}</option>`).join("");const pref=records.find(x=>x.uf==="DF")||records[0];el.uf.value=pref.uf;render(pref);el.uf.addEventListener("change",()=>render(records.find(x=>x.uf===el.uf.value)));el.download.addEventListener("click",()=>{if(!selected)return msg("Selecione uma UF.",true);save(csv(selected,";",true),`protege-dados-${selected.uf}-excel.csv`);msg("Arquivo compatível com Excel brasileiro gerado.")});el.downloadStandard.addEventListener("click",()=>{if(!selected)return msg("Selecione uma UF.",true);save(csv(selected,",",false),`protege-dados-${selected.uf}.csv`);msg("CSV padrão internacional gerado.")})}catch(e){console.error(e);msg("Não foi possível carregar os indicadores.",true)}}
  init();
})();
