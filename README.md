# Protege.Dados

**Observatório de Proteção Digital Infantojuvenil**

[![Testes](https://github.com/SEU-USUARIO/protege-dados/actions/workflows/tests.yml/badge.svg)](https://github.com/SEU-USUARIO/protege-dados/actions/workflows/tests.yml)
[![GitHub Pages](https://github.com/SEU-USUARIO/protege-dados/actions/workflows/pages.yml/badge.svg)](https://github.com/SEU-USUARIO/protege-dados/actions/workflows/pages.yml)
[![Licença: MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-blue.svg)](LICENSE)
[![IVPD](https://img.shields.io/badge/IVPD-v1.0-gold.svg)](docs/METODOLOGIA.md)

O **Protege.Dados** transforma dados públicos em indicadores territoriais acessíveis, auditáveis e responsáveis para apoiar transparência, pesquisa. educação digital e políticas de proteção de crianças e adolescentes.

> **Leitura responsável:** a IVPD não é ranking. não mede prevalência e não classifica pessoas. Denúncias são registros administrativos e dependem de cobertura, acesso aos canais e práticas de notificação.

## Resultados da versão 1.0

| Evidência | Resultado |
|---|---:|
| Unidades federativas | 27 |
| Fontes integradas no índice | 3 |
| Indicadores publicados | 3 |
| Escolas ativas analisadas | 181.065 |
| Matrículas | 47.088.922 |
| Escolas com internet | 166.771 |
| Escolas com banda larga | 145.195 |
| Denúncias únicas no recorte de 2025 | 294.592 |
| Municípios com registro em 2025 | 4.900 |
| Testes técnicos aprovados | 7 de 7 |

## Portal público

Após a primeira publicação. o portal ficará em:

`https://SEU-USUARIO.github.io/protege-dados/`

O site é publicado automaticamente pelo workflow `.github/workflows/pages.yml`.

## Estrutura

```text
.
├── .github/           automações. Pages e templates
├── config/            parâmetros de fontes e do índice
├── data/processed/    agregados públicos
├── docs/              método, governança. acessibilidade e relatórios
├── evidence/          manifestos, hashes e testes
├── src/               pipeline Python
├── tests/             testes automatizados
└── web/               portal publicado no GitHub Pages
```

## Metodologia

O eixo experimental combina:

- taxa de denúncias do Disque 100 em 2025 — **50%**;
- déficit de internet escolar no Censo Escolar 2024 — **25%**;
- déficit de banda larga escolar no Censo Escolar 2024 — **25%**.

A normalização utiliza limites robustos nos percentis 5 e 95. O eixo de capacidade territorial de proteção permanece não publicado até existir fonte territorial comparável e validada.

Leia a [metodologia completa](docs/METODOLOGIA.md).

## Executar testes

```bash
python -m venv .venv
pip install -e .
pytest -q
```

## Integridade e rastreabilidade

- [Manifesto das fontes fornecidas](evidence/manifesto_fontes_fornecidas.json)
- [Manifesto dos derivados e hashes](evidence/manifesto_derivados_sha256.json)
- [Resumo dos resultados](evidence/resumo_resultados.json)
- [Testes técnicos](evidence/testes_tecnicos.json)

## Documentos

- [Projeto técnico final](docs/relatorios/Projeto_Protege_Dados_CGU_2026_Final_Com_Evidencias.pdf)
- [Relatório técnico de evidências](docs/relatorios/Relatorio_Tecnico_Evidencias_Protege_Dados.pdf)
- [Caderno de submissão](docs/relatorios/Caderno_de_Submissao_Protege_Dados.pdf)

## Autoria e contato

**Ana Maria Carvalheiro**  
Cientista da Computação  
**Pretos Na Era Digital Ltda.**  
Brasília/DF  
Contato: anacarvalheiro@gmail.com

## Licenças

- Código: [MIT](LICENSE)
- Dados derivados e atribuição: [DATA_LICENSE.md](DATA_LICENSE.md)
