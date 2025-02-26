# Fiap News

## Descrição
Fiap News é um site de notícias tecnológicas, desenvolvido para atender ao Hackathon solicitado pela Faculdade FIAP. O projeto inclui um frontend responsivo, uma API em Node.js que integra-se a um banco de dados SQLite para gerenciar e retornar dinamicamente conteúdos de notícias. O site permite visualizar uma lista de notícias, acessar detalhes específicos e navegar intuitivamente.

## Por que atende ao escopo do Hackathon
O projeto "Fiap News" cumpre integralmente os requisitos do hackathon:

- **SITE com apresentação de notícias:** O frontend exibe uma grade de 8 notícias tecnológicas em 2 colunas, com links para acessar páginas detalhadas (ex.: "Carro voador").
- **API desenvolvida em Node.js:** O backend utiliza Node.js com o framework Express para criar uma API que retorna dados das notícias via endpoint (`/api/news`), acessível em `http://localhost:5000/api/news`.
- **Acesso ao banco de dados:** A API interage com um banco de dados SQLite (`news.db`) para armazenar, recuperar e gerenciar as notícias, garantindo persistência e dinamismo.
- **Projeto no GitHub:** O código está hospedado no GitHub: [Fiap News Repository](https://github.com/mrmessias/fiap-news.git).

## Vídeo de Apresentação
[Fiap News: Plataforma de Notícias Tecnológicas com Node.js e SQLite | Hackathon FIAP](https://www.youtube.com/watch?v=z08LBuzBc3M)

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js, instalado com Node.js)
- Um editor de código (como Visual Studio Code)
- Navegador web (Chrome, Firefox, Edge, etc.)
- Sistema operacional: Windows, macOS ou Linux

## Como Usar o Projeto

### Instalação

1. Clone o repositório do GitHub para um diretório local:

   ```bash
   git clone https://github.com/mrmessias/fiap-news.git fiap-news
   ```

   Ou extraia o arquivo ZIP para o diretório `fiap-news`.

2. Navegue até o diretório backend:

   ```bash
   cd fiap-news/backend
   ```

3. Instale as dependências do backend:

   ```bash
   npm install
   ```

4. Certifique-se de que o arquivo `news.db` existe no diretório `backend`. Se não existir, ele será gerado automaticamente ao iniciar o servidor.

### Configuração

Nenhuma configuração adicional é necessária. O projeto utiliza `news.db` como banco de dados SQLite, gerado automaticamente pelo `server.js`.

### Execução

1. Abra um terminal na pasta `backend` e inicie o servidor:

   ```bash
   node server.js
   ```

   Você verá a mensagem: `Servidor rodando em http://localhost:5000`.

2. Abra outro terminal (ou use o mesmo, se preferir) e navegue até a pasta `frontend`:

   ```bash
   cd ../frontend
   ```

3. Inicie o Live Server no VS Code para o frontend:
   - No VS Code, clique com o botão direito em `index.html` e selecione "Open with Live Server".
   - O navegador abrirá automaticamente `http://localhost:5500` (ou outra porta configurada pelo Live Server).

4. Acesse a página principal em `http://localhost:5500` para visualizar as notícias.

## Interação com o Site

- Na página principal (`index.html`), visualize a lista de 8 notícias tecnológicas em uma grade de 2 colunas.
- Clique no botão `+` de qualquer notícia para ser redirecionado à página de detalhes correspondente (ex.: "Carro voador" leva para `carro-voador.html`).
- Na página de detalhes, leia o título, data e conteúdo da notícia, e use o botão `⟵` para voltar à página principal.
- O site é responsivo, funcionando em desktops, tablets e smartphones.

## Estrutura do Projeto

```
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

Este projeto é open-source. Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações.
3. Envie um pull request com suas melhorias.
4. Reporte bugs ou sugira melhorias abrindo issues no repositório.

## Licença

Este projeto está sob a licença MIT:

```
MIT License

Copyright (c) 2025 Grupo 5

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contato

Desenvolvedor: **Grupo 5**