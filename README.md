# Fiap News

## Descrição
O Fiap News é uma aplicação web que exibe notícias de tecnologia em um layout moderno e minimalista, inspirado no estilo da Apple dos anos 2010. O projeto possui um backend desenvolvido em Node.js com Express, utilizando SQLite para armazenar 8 notícias, e um frontend em HTML, CSS e JavaScript para renderizar as notícias em uma grade de 2 colunas. O design inclui cores inspiradas no logotipo da FIAP (vermelho magenta `#ed145b` e branco `#FBFFFF`) e animações sutis, com interatividade como contorno branco nos títulos ao passar o mouse.

## Demonstração
Você pode visualizar o projeto ao cloná-lo e rodá-lo localmente ou acessar uma versão ao vivo (se disponível). Para uma prévia, veja as capturas de tela ou o vídeo no repositório.

## Pré-requisitos
- Node.js (versão 14.x ou superior)
- Git
- Um navegador web moderno (Chrome, Firefox, Edge, etc.)

## Instalação
Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/fiap-news.git
   cd fiap-news
Instale as dependências do backend:
Navegue até a pasta backend:
bash
cd backend
npm init -y
npm install express sqlite3
Configure o banco de dados:
O banco de dados SQLite (news.db) será criado automaticamente ao rodar o servidor.
Inicie o servidor backend:
bash
node server.js
Abra o frontend:
Navegue até a pasta frontend e abra o arquivo index.html em um navegador ou use um servidor local (como Live Server no VS Code).
Uso
Após iniciar o servidor backend em http://localhost:5000, o frontend (em index.html) carrega automaticamente as 8 notícias via API (/api/news).
Interaja com as notícias passando o mouse sobre os retângulos para ver o contorno branco nos títulos e clique em "Leia Mais" para explorar mais (atualmente, o botão é apenas estilizado, mas pode ser expandido para links ou ações futuras).
O layout é responsivo, ajustando-se para telas menores.
Tecnologias Utilizadas
Backend: Node.js, Express, SQLite3
Frontend: HTML5, CSS3, JavaScript
Ferramentas: Git, GitHub, GitHub Desktop
Design Inspirado: Estilo minimalista da Apple dos anos 2010, com cores da FIAP
Estrutura do Projeto
fiap-news/
├── backend/
│   ├── server.js
│   └── news.db
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
Contribuindo
Contribuições são bem-vindas! Siga estas etapas:
Faça um fork deste repositório.
Crie uma branch para sua feature (git checkout -b feature/nova-funcionalidade).
Faça commits das suas alterações (git commit -m "Adiciona nova funcionalidade").
Envie para o repositório remoto (git push origin feature/nova-funcionalidade).
Abra um Pull Request no GitHub.
Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes (crie um arquivo LICENSE com o texto da licença MIT, se ainda não tiver).
Contato
Autor: [Seu Nome]  
GitHub: github.com/seu-usuario  
Email: [seu-email@example.com (mailto:seu-email@example.com)]  
Data: 24 de fevereiro de 2025
Agradecimentos
Agradeço à comunidade FIAP e aos tutoriais online que me ajudaram a desenvolver este projeto. Contribuições e feedback são sempre bem-vindos!
