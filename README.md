# Fiap News - Solução para o Hackathon FIAP

## 1. Resumo do Projeto

O Fiap News é uma aplicação web desenvolvida para atender à solicitação do hackathon da FIAP, criando um site de notícias focado em tecnologia. Inclui um frontend interativo, uma API em Node.js para gerenciamento de dados, e um banco de dados SQLite para armazenamento persistente de 8 notícias. O design é minimalista, com cores da FIAP (#ed145b para vermelho magenta e #FBFFFF para branco), organizado em uma grade de 2 colunas com animações sutis e interatividade, como contornos brancos nos títulos ao passar o mouse.

## 2. Objetivo

Problema abordado: Desenvolver um site de notícias tecnológicas acessível, funcional e escalável para a Fiap News.
Solução proposta: Um site responsivo com frontend em HTML, CSS e JavaScript, conectado a uma API RESTful em Node.js e Express, acessando um banco de dados SQLite persistente.
Impacto esperado: Facilitar o acesso a informações tecnológicas com um design moderno e funcional, promovendo inovação e educação na comunidade FIAP.

## 3. Requisitos Atendidos

Site com apresentação de notícias: Exibe 8 notícias em uma grade de 2 colunas, com título, data, conteúdo breve e botão "Leia Mais".
API desenvolvida em Node.js: API em http://localhost:5000/api/news, retornando dados em JSON.
Acesso ao banco de dados: Banco de dados SQLite (news.db) armazena as notícias persistentemente.

## 4. Tecnologias Utilizadas

Backend: Node.js, Express, SQLite3
Frontend: HTML5, CSS3, JavaScript
Ferramentas: Git, GitHub, GitHub Desktop

## 5. Estrutura do Projeto

fiap-news/
├── backend/
│   ├── server.js
│   └── news.db
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js

## 6. Funcionalidades

Exibição de 8 notícias em uma grade responsiva de 2 colunas, com título, data, conteúdo breve e botão "Leia Mais".
Interatividade: contorno branco nos títulos ao passar o mouse, animações sutis para melhorar a experiência do usuário.
Backend persistente que armazena e retorna dados via API (/api/news) em http://localhost:5000.

## 7. Instalação e Configuração

Pré-requisitos
Node.js (versão 14.x ou superior)
Git
Navegador web moderno (Chrome, Firefox, Edge, etc.)
Passos
Clone o repositório:
bash
git clone https://github.com/seu-usuario/fiap-news.git
cd fiap-news
Instale as dependências do backend:
bash
cd backend
npm init -y
npm install express sqlite3
Configure o banco de dados:
O banco de dados SQLite (news.db) é criado automaticamente ao iniciar o servidor.
Inicie o servidor backend:
bash
node server.js
Abra o frontend:
Navegue para frontend e abra index.html em um navegador ou use um servidor local (como Live Server no VS Code).

## 8. Uso

Após iniciar o backend em http://localhost:5000, o frontend carrega as 8 notícias via API (/api/news).
Passe o mouse sobre os retângulos para ver o contorno branco nos títulos e clique em "Leia Mais" (atualmente estilizado, mas expansível).
O layout é responsivo, adaptando-se a telas menores.

## 9. Entrega no GitHub

O projeto está hospedado em: github.com/seu-usuario/fiap-news.
Inclui todos os arquivos necessários e está versionado com Git e GitHub Desktop.

## 10. Vídeo de Apresentação

Um vídeo demonstrando a solução e o projeto está disponível em: video-apresentacao.mp4.
O vídeo cobre: visão geral, objetivos, demonstração do frontend/backend, e tecnologias.

## 11. Contribuição

Contribuições são bem-vindas:
Faça um fork deste repositório.
Crie uma branch: git checkout -b feature/nova-funcionalidade.
Faça commits: git commit -m "Adiciona nova funcionalidade".
Envie para o remoto: git push origin feature/nova-funcionalidade.
Abra um Pull Request no GitHub.

## 12. Licença

Este projeto está sob a licença MIT. Veja LICENSE para detalhes (crie um LICENSE com o texto da licença MIT, se não tiver).

## 13. Equipe e Contato

Autor: [Seu Nome]  
GitHub: github.com/seu-usuario  
Email: [seu-email@example.com (mailto:seu-email@example.com)]  
Data: 24 de fevereiro de 2025

## 14. Agradecimentos

Agradecemos à Fiap News e ao hackathon FIAP pela oportunidade. Feedback e contribuições são sempre bem-vindos.