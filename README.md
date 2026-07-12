# Protege.Dados — Observatório de Proteção Digital Infantojuvenil

[![Portal](https://img.shields.io/badge/portal-online-brightgreen)](https://anacarvalheiro-ai.github.io/protege-dados/)
[![Publicação](https://github.com/anacarvalheiro-ai/protege-dados/actions/workflows/static.yml/badge.svg)](https://github.com/anacarvalheiro-ai/protege-dados/actions/workflows/static.yml)
[![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)](LICENSE)
[![Dados Abertos](https://img.shields.io/badge/dados-abertos-005CA9)](https://dados.gov.br/)
[![IVPD](https://img.shields.io/badge/IVPD-v1.0-C79A28)](docs/METODOLOGIA.md)

## Candidatura ao 2º Concurso de Reúso de Dados Abertos da CGU

O **Protege.Dados** é uma iniciativa de reúso responsável de dados abertos voltada à produção de indicadores territoriais sobre proteção digital infantojuvenil.

O MVP integra dados oficiais do Instituto Brasileiro de Geografia e Estatística — IBGE, do Censo Escolar/Inep e do Disque 100/Observatório Nacional dos Direitos Humanos. A solução harmoniza códigos territoriais, produz dados derivados em formatos abertos e disponibiliza resultados agregados para as 27 unidades federativas.

O projeto reúne:

- portal público;
- metodologia documentada;
- código-fonte aberto;
- dados derivados em CSV e JSON;
- testes técnicos;
- manifestos de integridade;
- histórico público de versões;
- documentação metodológica e institucional.

> **Leitura responsável:** a IVPD é um instrumento experimental de apoio à análise territorial. Não constitui ranking, não mede prevalência da violência, não identifica pessoas e não realiza previsão individual. Os registros do Disque 100 são dados administrativos influenciados por cobertura, acesso aos canais, práticas de notificação e possíveis situações de subnotificação.

---

## Acesso público

### Portal do MVP

**https://anacarvalheiro-ai.github.io/protege-dados/**

### Repositório

**https://github.com/anacarvalheiro-ai/protege-dados**

---

## Problema público

Dados relevantes à proteção de crianças e adolescentes são produzidos por diferentes instituições, em formatos, períodos e granularidades distintos.

Essa fragmentação dificulta:

- a análise integrada das informações;
- a comparação responsável entre territórios;
- a utilização dos dados por pessoas não especialistas;
- o acompanhamento de políticas públicas;
- o controle social;
- o desenvolvimento de pesquisas e projetos baseados em evidências.

O Protege.Dados cria uma camada pública de integração, documentação e interpretação responsável dessas informações.

---

## Objetivo geral

Transformar dados públicos abertos em indicadores territoriais compreensíveis, verificáveis e reutilizáveis para fortalecer a proteção digital infantojuvenil, a transparência pública e o controle social.

## Objetivos específicos

- promover o reúso responsável de dados abertos governamentais;
- facilitar o acesso a informações públicas dispersas;
- integrar dados de direitos humanos, educação e população;
- harmonizar códigos e referências territoriais;
- produzir indicadores territoriais documentados;
- apoiar políticas públicas baseadas em evidências;
- fortalecer a transparência e o controle social;
- apoiar gestores, escolas, redes de proteção, pesquisadores e organizações sociais;
- disponibilizar dados derivados em formatos abertos;
- documentar fontes, métodos, limitações e decisões técnicas;
- evitar identificação individual, estigmatização territorial e inferências causais indevidas.

---

## Resultados comprovados do MVP

| Evidência | Resultado |
|---|---:|
| Unidades federativas analisadas | 27 |
| Fontes oficiais integradas | 3 |
| Municípios nas bases populacionais | 5.571 |
| Escolas ativas analisadas | 181.065 |
| Matrículas consideradas | 47.088.922 |
| Escolas com internet | 166.771 |
| Escolas com banda larga | 145.195 |
| Denúncias únicas no recorte infantojuvenil de 2025 | 294.592 |
| Municípios com registro territorial identificado em 2025 | 4.900 |
| Indicadores publicados na IVPD v1.0 | 3 |
| Verificações técnicas aprovadas | 7 de 7 |

Os resultados decorrem do processamento dos arquivos utilizados no MVP. Não representam identificação de vítimas, previsão individual ou diagnóstico definitivo de prevalência.

---

## Fontes oficiais

A versão 1.0 utiliza dados de três grupos de fontes públicas:

1. **IBGE**  
   Estimativas municipais de população de 2024 e 2025.

2. **Inep/MEC**  
   Microdados do Censo Escolar 2024.

3. **MDHC/ONDH**  
   Dados do Disque 100 referentes ao segundo semestre de 2024 e ao ano de 2025.

A documentação das fontes está disponível em:

- [Fontes utilizadas](docs/FONTES.md)
- [Metodologia](docs/METODOLOGIA.md)
- [Governança dos dados](docs/GOVERNANCA_DADOS.md)

---

## IVPD — versão experimental

A Matriz de Vulnerabilidade e Proteção Digital — IVPD v1.0 apresenta resultados agregados para as 27 unidades federativas.

### Componentes publicados

| Componente | Fonte | Peso |
|---|---|---:|
| Taxa de denúncias por 100 mil habitantes | Disque 100 e IBGE | 50% |
| Déficit de internet escolar | Censo Escolar | 25% |
| Déficit de banda larga escolar | Censo Escolar | 25% |

Os indicadores são normalizados em escala de 0 a 100 por técnica min–max robusta, com limites nos percentis 5 e 95, reduzindo a influência de valores extremos.

O eixo de capacidade territorial de proteção não foi artificialmente preenchido. Ele permanecerá não publicado até que exista uma fonte territorial comparável e metodologicamente validada.

Leia a [metodologia completa](docs/METODOLOGIA.md).

---

## Público beneficiado

O Protege.Dados foi concebido para apoiar:

- gestores públicos;
- escolas e profissionais da educação;
- redes de proteção;
- conselhos de direitos;
- organizações da sociedade civil;
- pesquisadores;
- universidades;
- jornalistas de dados;
- famílias;
- cidadãos interessados em transparência e políticas públicas.

---

## Casos de uso

A iniciativa pode ser utilizada para:

- contextualizar diagnósticos territoriais;
- apoiar projetos educacionais de cidadania digital;
- fundamentar propostas e políticas públicas;
- facilitar pesquisas acadêmicas;
- apoiar organizações sociais na elaboração de projetos;
- ampliar o controle social;
- produzir visualizações e análises derivadas;
- promover educação para o uso responsável de dados públicos.

---

## Diferenciais

- integração de diferentes fontes públicas;
- harmonização territorial documentada;
- metodologia aberta e auditável;
- código-fonte público;
- dados derivados em CSV e JSON;
- manifestos com hashes SHA-256;
- documentação das limitações;
- ausência de ranking simplista;
- ausência de classificação individual;
- publicação de testes técnicos;
- linguagem de interpretação responsável;
- portal público responsivo;
- versionamento e rastreabilidade das alterações.

---

## Arquitetura da solução

```text
Fontes oficiais
      │
      ▼
Preservação dos arquivos e registro de hashes
      │
      ▼
Leitura, validação e limpeza
      │
      ▼
Harmonização de códigos territoriais
      │
      ▼
Agregação por unidade federativa
      │
      ▼
Cálculo dos indicadores e da IVPD
      │
      ▼
Exportação em CSV e JSON
      │
      ▼
Portal público no GitHub Pages
```

A documentação detalhada está em [ARQUITETURA.md](docs/ARQUITETURA.md).

---

## Infraestrutura tecnológica

O projeto utiliza:

- Python;
- HTML5;
- CSS3;
- JavaScript;
- Git;
- GitHub;
- GitHub Pages;
- GitHub Actions;
- Markdown;
- CSV;
- JSON.

---

## Versionamento, rastreabilidade e publicação automatizada

O código, a documentação, os dados derivados e os testes são mantidos em repositório público no GitHub.

Cada alteração relevante é registrada no histórico de commits, permitindo identificar:

- autoria;
- data da alteração;
- conteúdo modificado;
- evolução da metodologia;
- evolução da documentação;
- versão correspondente do produto.

A publicação da pasta `web` é automatizada por workflow do **GitHub Actions**, que realiza o deploy no **GitHub Pages**.

```text
Alteração validada
      │
      ▼
Commit no Git
      │
      ▼
Repositório GitHub
      │
      ▼
GitHub Actions
      │
      ▼
Deploy automatizado
      │
      ▼
GitHub Pages
```

Esse fluxo contribui para:

- transparência;
- rastreabilidade;
- reprodutibilidade;
- controle de versões;
- consistência entre repositório e portal;
- continuidade técnica da iniciativa.

> O workflow atual automatiza a publicação do portal. A ampliação da integração contínua para novas verificações automatizadas faz parte do plano de evolução do projeto.

---

## Testes técnicos

A versão 1.0 registra sete verificações aprovadas:

- presença das 27 unidades federativas;
- população positiva;
- denúncias não negativas;
- índice entre 0 e 100;
- não publicação artificial do eixo de proteção;
- códigos municipais com sete dígitos;
- ausência de duplicidade territorial na base populacional.

As evidências estão disponíveis em:

- [`evidence/testes_tecnicos.json`](evidence/testes_tecnicos.json)
- [`evidence/resumo_resultados.json`](evidence/resumo_resultados.json)
- [`evidence/manifesto_fontes_fornecidas.json`](evidence/manifesto_fontes_fornecidas.json)
- [`evidence/manifesto_derivados_sha256.json`](evidence/manifesto_derivados_sha256.json)

---

## Governança, privacidade e ética

O Protege.Dados adota os seguintes princípios:

- finalidade pública definida;
- minimização dos dados processados;
- publicação de resultados agregados;
- separação entre arquivos brutos e derivados;
- preservação das referências às fontes oficiais;
- documentação de filtros e transformações;
- controle de versões;
- revisão humana;
- não identificação de vítimas ou denunciantes;
- não estigmatização de territórios;
- não utilização para previsão individual;
- transparência sobre limitações e incertezas.

Leia a documentação de [Governança dos Dados](docs/GOVERNANCA_DADOS.md).

---

## Acessibilidade e inclusividade

O portal incorpora:

- navegação por teclado;
- foco visível;
- HTML semântico;
- contraste;
- estrutura responsiva;
- linguagem simples;
- apresentação textual dos resultados;
- dados disponíveis em formatos abertos.

A auditoria formal completa segundo WCAG 2.2 AA e eMAG está prevista no plano de aperfeiçoamento.

Leia a documentação de [Acessibilidade](docs/ACESSIBILIDADE.md).

---

## Limitações

A interpretação dos resultados deve considerar que:

- denúncias são registros administrativos e não equivalem à prevalência da violência;
- os dados dependem da cobertura e das práticas de notificação;
- podem existir situações de subnotificação;
- as fontes possuem períodos de referência diferentes;
- a infraestrutura escolar utilizada é referente a 2024;
- denúncias e estimativas populacionais utilizam referências de 2025;
- a primeira publicação utiliza a unidade federativa como nível territorial;
- o produto não substitui diagnósticos locais;
- o índice não identifica pessoas;
- o índice não realiza previsão individual;
- o eixo de capacidade territorial de proteção ainda não foi publicado.

---

## Estrutura do repositório

```text
protege-dados/
├── .github/
│   └── workflows/
├── config/
├── data/
│   └── processed/
├── docs/
│   ├── assets/
│   ├── relatorios/
│   └── submissao-cgu-2026/
├── evidence/
├── src/
│   └── protege_dados/
├── tests/
├── web/
├── CHANGELOG.md
├── CITATION.cff
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── DATA_LICENSE.md
├── LICENSE
├── README.md
├── SECURITY.md
└── pyproject.toml
```

---

## Documentação técnica

- [Arquitetura](docs/ARQUITETURA.md)
- [Metodologia](docs/METODOLOGIA.md)
- [Fontes oficiais](docs/FONTES.md)
- [Governança dos dados](docs/GOVERNANCA_DADOS.md)
- [Acessibilidade](docs/ACESSIBILIDADE.md)
- [Checklist de publicação](docs/CHECKLIST_PUBLICACAO.md)
- [Publicação passo a passo](docs/PUBLICACAO_PASSO_A_PASSO.md)
- [Relatórios técnicos](docs/relatorios/)
- [Documentos da submissão CGU 2026](docs/submissao-cgu-2026/)

---

## Documentos da candidatura

A pasta [`docs/submissao-cgu-2026`](docs/submissao-cgu-2026/) reúne:

1. Memorial Técnico em padrão ABNT;
2. respostas preparadas para o formulário;
3. Relatório Técnico de Evidências;
4. Matriz de Aderência aos critérios da CGU;
5. checklist das duas etapas obrigatórias.

---

## Reproduzir os testes

```bash
python -m venv .venv
```

### Linux ou macOS

```bash
source .venv/bin/activate
```

### Windows

```powershell
.venv\Scripts\activate
```

### Instalação e testes

```bash
pip install -e .
pytest -q
```

---

## Plano de evolução

As próximas etapas previstas incluem:

- testes formais de usabilidade com diferentes públicos;
- auditoria completa de acessibilidade;
- inclusão de novas fontes abertas;
- desenvolvimento do eixo de capacidade territorial de proteção;
- avaliação de séries temporais;
- ampliação para análises municipais, após validação;
- aprimoramento dos testes automatizados;
- publicação periódica de relatórios de qualidade;
- criação de materiais pedagógicos para escolas e redes de proteção.

---

## Licenças

### Código

O código-fonte é disponibilizado sob a [Licença MIT](LICENSE).

### Dados derivados

Os dados derivados podem ser reutilizados com atribuição ao Protege.Dados e preservação das referências às fontes oficiais.

Consulte [DATA_LICENSE.md](DATA_LICENSE.md).

---

## Como citar

```text
CARVALHEIRO, Ana Maria. Protege.Dados: Observatório de Proteção
Digital Infantojuvenil. Brasília, DF: Pretos Na Era Digital Ltda.,
2026. Disponível em:
https://anacarvalheiro-ai.github.io/protege-dados/.
```

Os metadados de citação também estão disponíveis no arquivo [`CITATION.cff`](CITATION.cff).

---

## Autoria

**Ana Maria Carvalheiro**  
Cientista da Computação  
Pretos Na Era Digital Ltda.  
Brasília — Distrito Federal — Brasil

---

## Contato

**E-mail:** anacarvalheiro@gmail.com

**Portal:**  
https://anacarvalheiro-ai.github.io/protege-dados/

**Repositório:**  
https://github.com/anacarvalheiro-ai/protege-dados

---

## Integridade da iniciativa

Os resultados publicados decorrem do processamento das fontes utilizadas no MVP.

Itens ainda não executados, como testes formais com usuários e auditoria completa de acessibilidade, são declarados como pendentes. O projeto não utiliza resultados, participantes, custos ou evidências fictícias.
