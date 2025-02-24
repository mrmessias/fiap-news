markdown
# Fiap News

## Descrição
O Fiap News é uma aplicação web que exibe notícias de tecnologia em um layout moderno e minimalista. O projeto possui um backend em Node.js com Express, utilizando SQLite para armazenar 8 notícias, e um frontend em HTML, CSS e JavaScript para renderizá-las em uma grade de 2 colunas. O design usa cores do logotipo da FIAP (vermelho magenta `#ed145b` e branco `#FBFFFF`) com animações sutis e interatividade, como contorno branco nos títulos ao passar o mouse.

## Demonstração
Visualize o projeto clonando-o e rodando localmente ou acesse uma versão ao vivo (se disponível). Veja capturas de tela ou vídeos no repositório para uma prévia.

## Pré-requisitos
- Node.js (versão 14.x ou superior)
- Git
- Navegador web moderno (Chrome, Firefox, Edge, etc.)

## Instalação
Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/fiap-news.git
   cd fiap-news
Instale as dependências do backend:
bash
cd backend
npm init -y
npm install express sqlite3
Configure o banco de dados:
O banco de dados SQLite (news.db) é criado automaticamente ao rodar o servidor.
Inicie o servidor backend:
bash
node server.js
Abra o frontend:
Navegue para frontend e abra index.html em um navegador ou use um servidor local (como Live Server no VS Code).
Uso
Após iniciar o backend em http://localhost:5000, o frontend carrega as 8 notícias via API (/api/news).
Passe o mouse sobre os retângulos para ver o contorno branco nos títulos e clique em "Leia Mais" (atualmente estilizado, mas expansível para links ou ações).
O layout é responsivo, adaptando-se a telas menores.
Tecnologias Utilizadas
Backend: Node.js, Express, SQLite3
Frontend: HTML5, CSS3, JavaScript
Ferramentas: Git, GitHub, GitHub Desktop
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
Crie uma branch: git checkout -b feature/nova-funcionalidade.
Faça commits: git commit -m "Adiciona nova funcionalidade".
Envie para o remoto: git push origin feature/nova-funcionalidade.
Abra um Pull Request no GitHub.
Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes (crie um LICENSE com o texto da licença MIT, se não tiver).
Contato
Autor: [Seu Nome]  
GitHub: github.com/seu-usuario  
Email: [seu-email@example.com (mailto:seu-email@example.com)]  
Data: 24 de fevereiro de 2025
Agradecimentos
Agradeço à comunidade FIAP e aos tutoriais online que me ajudaram a desenvolver este projeto. Contribuições e feedback são sempre bem-vindos.
```