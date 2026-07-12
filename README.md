# Protege.Dados — Observatório de Proteção Digital Infantojuvenil

[![Portal público](https://img.shields.io/badge/portal-online-brightgreen)](https://anacarvalheiro-ai.github.io/protege-dados/)
[![GitHub Pages](https://github.com/anacarvalheiro-ai/protege-dados/actions/workflows/static.yml/badge.svg)](https://github.com/anacarvalheiro-ai/protege-dados/actions/workflows/static.yml)
[![Licença MIT](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)](LICENSE)
[![Dados abertos](https://img.shields.io/badge/dados-abertos-005CA9)](https://dados.gov.br/)
[![IVPD](https://img.shields.io/badge/IVPD-v1.0-C79A28)](docs/METODOLOGIA.md)

## Candidatura ao 2º Concurso de Reúso de Dados Abertos da CGU

O **Protege.Dados** é uma iniciativa de reúso responsável de dados abertos voltada à produção de indicadores territoriais relacionados à proteção digital de crianças e adolescentes.

O MVP integra dados oficiais do Instituto Brasileiro de Geografia e Estatística — IBGE, do Censo Escolar/Inep e do Disque 100/Observatório Nacional dos Direitos Humanos. A solução harmoniza códigos territoriais, produz dados derivados em formatos abertos e disponibiliza resultados agregados para as 27 unidades federativas.

O projeto reúne:

- portal público funcional;
- metodologia documentada;
- código-fonte aberto;
- dados derivados em CSV e JSON;
- testes técnicos;
- manifestos de integridade;
- histórico público de versões;
- documentação metodológica, técnica e institucional;
- publicação automatizada pelo GitHub Actions;
- hospedagem pública no GitHub Pages.

> **Leitura responsável:** a IVPD é um instrumento experimental de apoio à análise territorial. Não constitui ranking, não mede a prevalência da violência, não identifica pessoas e não realiza previsão individual. Os registros do Disque 100 são dados administrativos influenciados por cobertura, acesso aos canais, práticas de notificação e possíveis situações de subnotificação.

---

## Acesso público

### Portal do MVP

**https://anacarvalheiro-ai.github.io/protege-dados/**

### Repositório público

**https://github.com/anacarvalheiro-ai/protege-dados**

---

## Destaques da iniciativa

- reúso de dados governamentais de forma responsável;
- integração de três grupos de fontes oficiais;
- cobertura das 27 unidades federativas;
- metodologia aberta e auditável;
- indicadores territoriais documentados;
- código-fonte público;
- portal publicado;
- dados derivados em formatos abertos;
- testes técnicos e manifestos de integridade;
- versionamento completo em Git;
- deploy automatizado pelo GitHub Actions;
- publicação pelo GitHub Pages;
- documentação técnica e institucional;
- salvaguardas contra estigmatização territorial;
- transparência sobre limitações e itens ainda não executados.

---

## Problema público

Dados relevantes à proteção de crianças e adolescentes são produzidos por diferentes instituições, em formatos, períodos e granularidades distintos.

Essa fragmentação dificulta:

- a análise integrada das informações;
- a comparação responsável entre territórios;
- a utilização dos dados por pessoas não especialistas;
- o acompanhamento de políticas públicas;
- o controle social;
- o desenvolvimento de pesquisas;
- a elaboração de projetos baseados em evidências;
- a identificação de lacunas de infraestrutura e proteção.

O Protege.Dados cria uma camada pública de integração, documentação e interpretação responsável dessas informações.

A solução não pretende substituir diagnósticos locais, serviços de proteção, avaliações institucionais ou estudos especializados. Seu papel é facilitar o acesso, a compreensão e o reúso de dados públicos agregados.

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
- garantir rastreabilidade entre fonte, processamento e resultado;
- evitar identificação individual, estigmatização territorial e inferências causais indevidas.

---

## Resultados comprovados do MVP

| Evidência | Resultado |
|---|---:|
| Unidades federativas analisadas | 27 |
| Grupos de fontes oficiais integradas | 3 |
| Municípios nas bases populacionais | 5.571 |
| Escolas ativas analisadas | 181.065 |
| Matrículas consideradas | 47.088.922 |
| Escolas com internet | 166.771 |
| Escolas com banda larga | 145.195 |
| Denúncias únicas no recorte infantojuvenil de 2025 | 294.592 |
| Municípios com registro territorial identificado em 2025 | 4.900 |
| Indicadores publicados na IVPD v1.0 | 3 |
| Verificações técnicas aprovadas | 7 de 7 |

Os resultados decorrem do processamento dos arquivos utilizados no MVP.

Eles não representam:

- identificação de vítimas;
- previsão individual;
- medição definitiva da prevalência da violência;
- classificação de pessoas;
- classificação determinística de territórios;
- avaliação causal sobre políticas ou serviços.

---

## Fontes oficiais utilizadas

A versão 1.0 utiliza dados de três grupos de fontes públicas.

### Instituto Brasileiro de Geografia e Estatística — IBGE

Foram utilizadas estimativas municipais de população referentes aos anos de 2024 e 2025.

Finalidades no projeto:

- denominadores populacionais;
- códigos territoriais;
- municípios;
- unidades federativas;
- cálculo de taxas por população.

### Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira — Inep

Foram utilizados os Microdados do Censo Escolar 2024.

Variáveis relacionadas a:

- escolas ativas;
- matrículas;
- acesso à internet;
- acesso à banda larga;
- infraestrutura educacional.

### Ministério dos Direitos Humanos e da Cidadania — MDHC/ONDH

Foram utilizados dados públicos do Disque 100 referentes:

- ao segundo semestre de 2024;
- ao ano de 2025;
- ao recorte infantojuvenil;
- às unidades federativas;
- aos municípios identificados.

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

Os indicadores foram normalizados em escala de 0 a 100 por técnica min–max robusta, com limites nos percentis 5 e 95, reduzindo a influência de valores extremos.

O eixo de capacidade territorial de proteção não foi artificialmente preenchido. Ele permanecerá não publicado até que exista uma fonte territorial comparável, validada e metodologicamente adequada.

Leia a [metodologia completa](docs/METODOLOGIA.md).

---

## Público beneficiado

O Protege.Dados foi concebido para apoiar:

- gestores públicos;
- escolas e profissionais da educação;
- redes de proteção;
- conselhos tutelares;
- conselhos de direitos;
- organizações da sociedade civil;
- pesquisadores;
- universidades;
- jornalistas de dados;
- famílias;
- cidadãos interessados em transparência;
- profissionais envolvidos em políticas de infância e adolescência.

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
- promover educação para o uso responsável de dados públicos;
- identificar lacunas de infraestrutura educacional;
- estimular novas aplicações de interesse público.

---

## Diferenciais

- integração de diferentes fontes públicas;
- harmonização territorial documentada;
- uso de denominadores populacionais;
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
- versionamento e rastreabilidade das alterações;
- publicação automatizada;
- documentação específica para governança, acessibilidade e fontes;
- declaração expressa dos itens ainda não executados.

---

## Arquitetura da solução

```text
Fontes oficiais
      │
      ▼
Preservação dos arquivos originais
      │
      ▼
Registro de fontes e hashes
      │
      ▼
Leitura e validação estrutural
      │
      ▼
Limpeza e padronização
      │
      ▼
Harmonização de códigos territoriais
      │
      ▼
Agregação por unidade federativa
      │
      ▼
Cálculo dos indicadores
      │
      ▼
Normalização da IVPD
      │
      ▼
Exportação em CSV e JSON
      │
      ▼
Portal público no GitHub Pages
```

A documentação detalhada está disponível em:

- [Arquitetura da solução](docs/ARQUITETURA.md)
- [Metodologia](docs/METODOLOGIA.md)

---

## Fluxo de processamento

O pipeline foi estruturado nas seguintes etapas:

1. seleção das versões oficiais das bases;
2. preservação dos arquivos utilizados;
3. registro das fontes e dos períodos;
4. validação da estrutura dos dados;
5. seleção das variáveis necessárias;
6. filtragem do recorte infantojuvenil;
7. deduplicação dos registros aplicáveis;
8. harmonização de códigos territoriais;
9. agregação por unidade federativa;
10. cálculo das taxas e déficits;
11. normalização dos indicadores;
12. geração da IVPD experimental;
13. exportação dos derivados;
14. execução dos testes técnicos;
15. geração dos manifestos de integridade;
16. publicação no portal.

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

## Versionamento e rastreabilidade

O código, a documentação, os dados derivados e os testes são mantidos em repositório público no GitHub.

Cada alteração relevante é registrada no histórico de commits, permitindo identificar:

- autoria;
- data da alteração;
- conteúdo modificado;
- evolução da metodologia;
- evolução da documentação;
- atualização dos dados derivados;
- versão correspondente do produto;
- histórico das decisões técnicas.

O repositório funciona como fonte pública de documentação e controle de versões da iniciativa.

---

## Publicação automatizada e CI/CD

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
Upload do artefato do portal
      │
      ▼
Deploy automatizado
      │
      ▼
GitHub Pages
      │
      ▼
Portal público atualizado
```

Esse fluxo contribui para:

- transparência;
- rastreabilidade;
- reprodutibilidade;
- controle de versões;
- redução de divergências;
- consistência entre repositório e portal;
- continuidade técnica da iniciativa.

> O workflow atual automatiza a publicação do portal. A ampliação da integração contínua para verificações adicionais e execução automática de todos os testes integra o plano de evolução do projeto.

---

## Reprodutibilidade

O Protege.Dados foi estruturado para permitir auditoria e reprodução técnica.

O repositório disponibiliza:

- código-fonte;
- metodologia;
- configuração do projeto;
- dados derivados;
- relatórios;
- testes;
- manifestos;
- hashes de integridade;
- documentação das fontes;
- documentação das limitações;
- histórico público de alterações;
- versão publicada do portal.

A reprodução depende do acesso às fontes oficiais utilizadas e da compatibilidade entre suas versões, estruturas e períodos.

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

## Governança dos dados

O Protege.Dados adota práticas de governança relacionadas a:

- identificação das fontes;
- registro dos períodos de referência;
- minimização das variáveis processadas;
- controle de qualidade;
- harmonização territorial;
- documentação das transformações;
- versionamento;
- separação entre arquivos brutos e derivados;
- rastreabilidade dos resultados;
- preservação da atribuição às fontes;
- declaração das limitações;
- revisão humana.

Leia a documentação de [Governança dos Dados](docs/GOVERNANCA_DADOS.md).

---

## Privacidade, ética e segurança

O Protege.Dados adota os seguintes princípios:

- finalidade pública definida;
- minimização dos dados processados;
- publicação de resultados agregados;
- não identificação de vítimas;
- não identificação de denunciantes;
- não publicação de dados pessoais;
- não estigmatização de territórios;
- não utilização para previsão individual;
- ausência de decisão automatizada sobre pessoas;
- revisão humana;
- transparência sobre limitações e incertezas;
- preservação das referências às fontes oficiais.

A iniciativa não deve ser utilizada para:

- investigar pessoas;
- classificar indivíduos;
- presumir culpa;
- substituir diagnósticos especializados;
- produzir rankings punitivos;
- inferir prevalência diretamente a partir de denúncias;
- tomar decisões automatizadas sobre serviços ou direitos.

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
- dados disponíveis em formatos abertos;
- organização compatível com tecnologias assistivas.

A auditoria formal completa segundo WCAG 2.2 AA e eMAG está prevista no plano de aperfeiçoamento.

Leia a documentação de [Acessibilidade](docs/ACESSIBILIDADE.md).

---

## Impacto público esperado

O Protege.Dados busca contribuir para:

- ampliação do reúso de dados públicos;
- fortalecimento da transparência;
- fortalecimento do controle social;
- produção de conhecimento;
- apoio a políticas públicas;
- educação digital;
- apoio a escolas e redes de proteção;
- elaboração de projetos sociais;
- pesquisas acadêmicas;
- identificação de lacunas territoriais;
- governança responsável de dados;
- disseminação de práticas de Governo Aberto.

O impacto efetivo deverá ser acompanhado por indicadores de acesso, downloads, reutilização, conclusão de tarefas e uso institucional.

Nenhuma métrica de impacto ainda não observada é declarada como resultado comprovado.

---

## Sustentabilidade

O MVP utiliza infraestrutura pública e gratuita:

- repositório público no GitHub;
- hospedagem no GitHub Pages;
- publicação pelo GitHub Actions;
- código aberto;
- documentação aberta;
- arquivos derivados em formatos não proprietários.

Esse modelo reduz custos de hospedagem, facilita a manutenção e permite evolução por ciclos de atualização.

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
- o eixo de capacidade territorial de proteção ainda não foi publicado;
- testes formais com usuários ainda não foram realizados;
- a auditoria completa de acessibilidade ainda está programada;
- futuras mudanças nas fontes podem exigir ajustes no pipeline.

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

### Criar ambiente virtual

```bash
python -m venv .venv
```

### Ativar no Linux ou macOS

```bash
source .venv/bin/activate
```

### Ativar no Windows

```powershell
.venv\Scripts\activate
```

### Instalar o projeto

```bash
pip install -e .
```

### Executar os testes

```bash
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
- integração dos testes ao fluxo de CI;
- publicação periódica de relatórios de qualidade;
- criação de materiais pedagógicos para escolas e redes de proteção;
- acompanhamento de métricas públicas de uso;
- documentação das novas versões no changelog.

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

Itens ainda não executados, como testes formais com usuários e auditoria completa de acessibilidade, são declarados como pendentes.

O projeto não utiliza:

- resultados fictícios;
- participantes fictícios;
- custos inventados;
- métricas de acesso não verificadas;
- evidências fabricadas;
- fontes não processadas apresentadas como integradas.

---

## Conclusão

O Protege.Dados demonstra como o reúso responsável de dados públicos pode gerar conhecimento aplicado, ampliar a transparência, incentivar o controle social e apoiar políticas públicas voltadas à proteção de crianças e adolescentes no ambiente digital.

A iniciativa reúne dados governamentais, metodologia documentada, portal público, código aberto, versionamento, evidências técnicas e publicação automatizada.

Seu compromisso central é transformar dados públicos em informação compreensível e reutilizável, preservando rigor metodológico, privacidade, acessibilidade, transparência e responsabilidade ética.
