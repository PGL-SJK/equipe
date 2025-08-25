# Sistema de Gestão de Equipe

## 📋 Descrição

Sistema web para gerenciamento inteligente de colaboradores e redistribuição dinâmica de atribuições, integrado ao Google Sheets para persistência de dados.

## ✨ Funcionalidades

- **Gestão de Colaboradores**: Adicionar, editar e remover colaboradores
- **Redistribuição Dinâmica**: Realocar atribuições entre colaboradores facilmente
- **Interface Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- **Integração Google Sheets**: Sincronização automática com planilha online
- **Visual Intuitivo**: Cards com destaque visual para operações em andamento

## 🚀 Instalação

### 1. Clone ou Baixe o Projeto
```bash
git clone [seu-repositorio]
cd sistema-gestao-equipe
```

### 2. Configuração do Google Sheets

#### 2.1 Preparar a Planilha
- Acesse: https://docs.google.com/spreadsheets/d/1T8UVwalXffnC3EKWBxvSD5GawV5aHh7U1JNTAEUqqP8/edit
- Verifique se possui as abas: `colaboradores` e `atribuicoes`
- Configure as permissões para o service account: `gestao-equipe-service@gestaoequipe-470023.iam.gserviceaccount.com`

#### 2.2 Estrutura da Planilha
Consulte o arquivo `sheets-structure.md` para ver a estrutura detalhada das abas.

### 3. Deploy

#### GitHub Pages
1. Faça upload dos arquivos para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione "Deploy from branch" > main
4. Aguarde alguns minutos para o deploy

#### Servidor Local
```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve .
```

## 🔧 Configuração

### Credenciais Já Configuradas
- **API Key**: `AIzaSyDSlHmeLWmo_AqlgnfHOgoxzj8r9JGZKd4`
- **Service Account**: `gestao-equipe-service@gestaoequipe-470023.iam.gserviceaccount.com`
- **Sheet ID**: `1T8UVwalXffnC3EKWBxvSD5GawV5aHh7U1JNTAEUqqP8`

### Personalizar Configurações
Edite o arquivo `config.js` para alterar:
- ID da planilha
- Credenciais da API
- Configurações de sincronização

## 📱 Como Usar

### 1. Visualizar Equipe
- Acesse a página inicial
- Veja todos os colaboradores em cards
- Clique em um card para ver detalhes

### 2. Adicionar Colaborador
- Clique no botão "Adicionar Colaborador"
- Preencha nome, função e atribuições
- Salve para sincronizar com Google Sheets

### 3. Redistribuir Atribuições
- Clique em "Redistribuir Atividades" no card do colaborador
- Selecione a atividade (card fica verde)
- Escolha o colaborador destino
- Confirme a redistribuição

### 4. Gerenciar Dados
- Editar: Clique no ícone de edição
- Remover: Use o botão de exclusão
- Sincronização: Automática com Google Sheets

## 🔧 Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: Google Sheets API v4
- **Design**: Material Design
- **Responsividade**: CSS Grid & Flexbox
- **Hospedagem**: GitHub Pages (ou qualquer servidor web)

## 📊 Estrutura de Arquivos

```
sistema-gestao-equipe/
├── index.html          # Página principal
├── config.js           # Configurações do Google Sheets
├── README.md           # Este arquivo
├── package.json        # Dependências (futuras expansões)
├── .gitignore         # Arquivos ignorados pelo Git
└── sheets-structure.md # Estrutura da planilha Google
```

## 🔄 Backup e Sincronização

- **Dados**: Armazenados no Google Sheets
- **Backup Automático**: Google Drive mantém histórico
- **Sincronização**: Tempo real entre dispositivos
- **Offline**: LocalStorage como fallback

## 🛠️ Troubleshooting

### Problema: Dados não carregam
- Verifique a conexão com internet
- Confirme as permissões da planilha
- Verifique o console do navegador para erros

### Problema: Redistribuição não funciona
- Certifique-se que o colaborador de destino existe
- Verifique se a atividade não está duplicada
- Recarregue a página se necessário

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique este README
2. Consulte o arquivo `sheets-structure.md`
3. Verifique o console do navegador para erros
4. Entre em contato com o desenvolvedor

## 📄 Licença

Este projeto é de uso interno da empresa.

---

**Desenvolvido para gestão eficiente de equipes de logística** 🚀
