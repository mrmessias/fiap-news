# Fiap News

## Descrição
Fiap News é um site de notícias tecnológicas, desenvolvido para atender ao Hackathon solicitado pela empresa Fiap News. O projeto inclui um frontend responsivo, uma API em Node.js que integra-se a um banco de dados SQLite para gerenciar e retornar dinamicamente conteúdos de notícias. O site permite visualizar uma lista de notícias, acessar detalhes específicos, e navegar intuitivamente.

## Por que atende ao escopo do Hackathon
O projeto "Fiap News" cumpre integralmente os requisitos do hackathon:
- **SITE com apresentação de notícias:** O frontend exibe uma grade de 8 notícias tecnológicas em 2 colunas, com links para acessar páginas detalhadas (ex.: "Carro voador").
- **API desenvolvida em Node.js:** O backend utiliza Node.js com o framework Express para criar uma API que retorna dados das notícias via endpoint (`/api/news`), acessível em `http://localhost:5000/api/news`.
- **Acesso ao banco de dados:** A API interage com um banco de dados SQLite (`news.db`) para armazenar, recuperar, e gerenciar as notícias, garantindo persistência e dinamismo.
- **Projeto no GitHub:** O código está hospedado no GitHub (`https://github.com/mrmessias/fiap-news.git`).

## Vídeo de Apresentação
Insira aqui o link ou informações do vídeo de apresentação da solução, demonstrando o funcionamento do site, a interação com a API, o acesso ao banco de dados, e o impacto no setor tecnológico. Exemplo: [Vídeo no YouTube](https://www.youtube.com/watch?v=exemplo)

## Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js, instalado com Node.js)
- Um editor de código (como Visual Studio Code)
- Navegador web (Chrome, Firefox, Edge, etc.)
- Sistema operacional: Windows, macOS, ou Linux

## Como Usar o Projeto
### Instalação
1. Clone o repositório do GitHub para um diretório local:

```bash
   git clone https://github.com/mrmessias/fiap-news.git fiap-news
```

Ou extraia o arquivo ZIP em `fiap-news`.

2. Navegue até o diretório `backend`:

```bash
   cd fiap-news/backend
```

3. Instale as dependências do backend:

```bash
   npm install
```

4. Certifique-se de que o arquivo `news.db` existe no diretório `backend`. Se não existir, o servidor criará automaticamente ao iniciar.

### Configuração
- Não é necessário configurar variáveis de ambiente ou arquivos adicionais. O projeto utiliza `news.db` como banco de dados SQLite, gerado automaticamente pelo `server.js`.

### Execução
1. Abra um terminal na pasta `backend` e inicie o servidor:

   node server.js

- Você verá a mensagem: `Servidor rodando em http://localhost:5000`.

2. Abra outro terminal (ou use o mesmo, se preferir) e navegue até a pasta `frontend`:

```bash
   cd fiap-news/frontend
```

3. Inicie o Live Server no VS Code para o frontend:
- No VS Code, clique com o botão direito em `index.html` e selecione "Open with Live Server".
- O navegador abrirá automaticamente `http://localhost:5500` (ou outra porta configurada pelo Live Server).

4. Acesse a página principal em `http://localhost:5500` para visualizar as notícias.

### Interação com o Site
- Na página principal (`index.html`), visualize a lista de 8 notícias tecnológicas em uma grade de 2 colunas.
- Clique no botão "+" de qualquer notícia para ser redirecionado à página de detalhes correspondente (ex.: "Carro voador" leva para `carro-voador.html`).
- Na página de detalhes, leia o título, data, e conteúdo da notícia, e use o botão "⟵" para voltar à página principal.
- O site é responsivo, funcionando em desktops, tablets, e smartphones.

## Estrutura do Projeto

```bash
fiap-news/
├── backend/
│   ├── news.db
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── carro-voador.html
│   ├── index.html
│   ├── script.js
│   └── style.css
├── .gitattributes
└── README.md
```

## Contribuição
- Este projeto é open-source. Para contribuir, faça um fork do repositório, crie uma branch, e envie um pull request com suas alterações.
- Reporte bugs ou sugera melhorias abrindo issues no repositório.

## Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` (se aplicável) para mais detalhes.

## Contato
- Desenvolvedor: Grupo 5