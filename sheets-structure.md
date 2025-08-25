# Estrutura do Google Sheets

## 📋 Visão Geral

Este documento descreve a estrutura necessária da planilha Google Sheets para o Sistema de Gestão de Equipe.

**URL da Planilha:** https://docs.google.com/spreadsheets/d/1T8UVwalXffnC3EKWBxvSD5GawV5aHh7U1JNTAEUqqP8/edit

## 📊 Estrutura das Abas

### Aba 1: `colaboradores`

Esta aba contém os dados básicos de cada colaborador.

#### Colunas:
| Coluna | Nome | Tipo | Descrição | Exemplo |
|--------|------|------|-----------|---------|
| A | id | Número | ID único do colaborador | 1 |
| B | nome | Texto | Nome completo | Cristiane Godoi |
| C | funcao | Texto | Função/cargo principal | Analista Marítimo Rotina |
| D | ativo | Booleano | Status ativo (TRUE/FALSE) | TRUE |

#### Exemplo de Dados:
```
A1: id          B1: nome               C1: funcao                    D1: ativo
A2: 1           B2: Cristiane Godoi    C2: Analista Marítimo Rotina  D2: TRUE
A3: 2           B3: Brunna             C3: Analista Marítimo OVS     D3: TRUE
A4: 3           B4: Giulia Gouvea      C4: Analista Aéreo e Marítimo D4: TRUE
A5: 4           B5: Luis Souza         C5: Analista Aéreo Rotina     D5: TRUE
```

### Aba 2: `atribuicoes`

Esta aba contém todas as atribuições de cada colaborador.

#### Colunas:
| Coluna | Nome | Tipo | Descrição | Exemplo |
|--------|------|------|-----------|---------|
| A | id | Número | ID único da atribuição | 1 |
| B | id_colaborador | Número | ID do colaborador (FK) | 1 |
| C | atividade | Texto | Descrição da atividade | Coordenação dos processos marítimos |
| D | categoria | Texto | Categoria da atividade | Coordenação |

#### Exemplo de Dados:
```
A1: id    B1: id_colaborador    C1: atividade                              D1: categoria
A2: 1     B2: 1                 C2: Coordenação dos processos marítimos    D2: Coordenação
A3: 2     B3: 1                 C3: Abertura de Processos no Importsys     D3: Sistemas
A4: 3     B4: 1                 C4: Elaboração de Originais                D4: Documentação
A5: 4     B5: 2                 C5: Embarque marítimo OVS BID              D5: Embarque
```

## 🔧 Configuração da Planilha

### 1. Criar as Abas
1. Acesse a planilha pelo link fornecido
2. Certifique-se de que existem duas abas:
   - `colaboradores`
   - `atribuicoes`

### 2. Configurar Cabeçalhos
Na **primeira linha** de cada aba, adicione os cabeçalhos conforme especificado acima.

### 3. Permissões
Certifique-se de que o service account tem permissão de **Editor** na planilha:
- **Service Account:** `gestao-equipe-service@gestaoequipe-470023.iam.gserviceaccount.com`

### 4. Dados Iniciais

#### Colaboradores Iniciais:
```
1 | Cristiane Godoi | Analista Marítimo Rotina | TRUE
2 | Brunna | Analista Marítimo OVS | TRUE
3 | Giulia Gouvea | Analista Aéreo e Marítimo | TRUE
4 | Luis Souza | Analista Aéreo Rotina | TRUE
```

#### Atribuições da Cristiane (ID: 1):
```
1 | 1 | Coordenação dos processos marítimos: Containers Padrão – DRY e HC | Coordenação
2 | 1 | Abertura de Processos no Importsys: Marítimo carga geral | Sistemas
3 | 1 | Abertura de Processos no Icomex: Marítimo carga geral | Sistemas
4 | 1 | Aprovação de Debit Note / Emissão de Credit note / Debit note: Marítimo carga geral | Financeiro
5 | 1 | Elaboração de Originais no modal marítimo carga geral | Documentação
6 | 1 | Envio de Pré-Alerta Marítimo carga geral | Comunicação
7 | 1 | Alimentação de desvios no Importsys Marítimo carga geral | Sistemas
8 | 1 | FUP / SLA / Atualização Relatório Marítimo carga geral | Relatórios
9 | 1 | Impressão dos originais e envio para Santos | Logística
10 | 1 | Relatório Demurrage e Lavagem de CTN | Relatórios
11 | 1 | Embarque Marítimos Spots carga geral e OVS | Embarque
```

#### Atribuições da Brunna (ID: 2):
```
12 | 2 | Coordenação dos processos marítimos: Embarque marítimo OVS BID | Coordenação
13 | 2 | Abertura de Processos no Importsys: Marítimo OVS | Sistemas
14 | 2 | Abertura de Processos no Icomex: Marítimo OVS | Sistemas
15 | 2 | Aprovação de Debit Note / Emissão de Credit note / Debit note: Marítimo OVS | Financeiro
16 | 2 | Elaboração de Originais no modal marítimo OVS | Documentação
17 | 2 | Envio de Pré-Alerta Marítimo OVS | Comunicação
18 | 2 | Alimentação de desvios no Importsys Marítimo OVS | Sistemas
19 | 2 | FUP / SLA / Atualização Relatório Marítimo OVS | Relatórios
```

#### Atribuições da Giulia (ID: 3):
```
20 | 3 | Realização do RA: Spots | Análise
21 | 3 | Elaboração de Propostas: Spots | Comercial
22 | 3 | Cotação Spot | Comercial
23 | 3 | Projetos Célula Embraer | Projetos
24 | 3 | Elaboração de atas das reuniões | Documentação
25 | 3 | Solicitação de autorizações de custo extra | Financeiro
26 | 3 | Data de pick up – Aéreo e Marítimo | Logística
27 | 3 | Levantamento de históricos dos processos | Análise
28 | 3 | Embarque Aéreo Spots | Embarque
```

#### Atribuições do Luis (ID: 4):
```
29 | 4 | Relatório de Faturas no Warehouse | Relatórios
30 | 4 | Cobrança do valor do combustível mensalmente | Financeiro
31 | 4 | Coordenação dos processos aéreos: AOG / Rotina / B2B | Coordenação
32 | 4 | Embarque Aéreo Spots carga geral e OVS | Embarque
33 | 4 | Abertura de Processos no Importsys: Aéreo carga geral | Sistemas
34 | 4 | Abertura de Processos no Icomex: Aéreo carga geral | Sistemas
35 | 4 | Aprovação de Debit Note / Emissão de Credit note / Debit note: Aéreo | Financeiro
36 | 4 | Envio de Pré-Alerta Aéreo carga geral | Comunicação
37 | 4 | Alimentação de desvios no Importsys Aéreo carga geral | Sistemas
38 | 4 | FUP / SLA / Atualização Relatório Aéreo carga geral | Relatórios
```

## 🔄 Operações do Sistema

### Leitura de Dados
O sistema lê os dados usando os ranges:
- `colaboradores!A:D` - Todos os colaboradores
- `atribuicoes!A:D` - Todas as atribuições

### Escrita de Dados
Quando um novo colaborador é adicionado:
- Novo registro na aba `colaboradores`
- Novas atribuições na aba `atribuicoes`

### Redistribuição
Quando uma atribuição é redistribuída:
- Atualiza o campo `id_colaborador` na aba `atribuicoes`

## 🔍 Validação dos Dados

### Verificar Integridade:
1. **IDs únicos**: Não deve haver IDs duplicados
2. **Referências válidas**: Todo `id_colaborador` em `atribuicoes` deve existir em `colaboradores`
3. **Dados obrigatórios**: Nome e função não podem estar vazios
4. **Status ativo**: Colaboradores inativos (FALSE) não recebem novas atribuições

### Troubleshooting:
- **Erro 403**: Verificar permissões do service account
- **Erro 400**: Verificar formato dos dados
- **Dados não aparecem**: Verificar nomes das abas e ranges

---

**📌 Importante**: Mantenha sempre um backup da planilha antes de fazer alterações estruturais!
