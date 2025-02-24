# FIAP News - Solução para o Hackathon FIAP

## 1. Resumo do Projeto
O Fiap News é uma aplicação web desenvolvida para atender à solicitação do hackathon da FIAP, com o objetivo de criar um site de notícias focado em tecnologia. O projeto inclui um frontend interativo, uma API em Node.js para gerenciamento de dados, e um banco de dados SQLite para armazenamento persistente de conteúdos. O design é minimalista, inspirado em padrões modernos, com cores baseadas no logotipo da FIAP (vermelho magenta `#ed145b` e branco `#FBFFFF`), organizado em uma grade de 2 colunas com animações sutis e interatividade, como contornos brancos nos títulos ao passar o mouse.

## 2. Objetivo
- **Problema abordado:** Desenvolver um site de notícias tecnológicas acessível, funcional e escalável, atendendo à demanda da Fiap News por uma solução inovadora para exibir conteúdos relacionados a tecnologia.
- **Solução proposta:** Um site responsivo com frontend em HTML, CSS e JavaScript, conectado a uma API RESTful em Node.js e Express, que acessa um banco de dados SQLite para armazenar e retornar 8 notícias de forma persistente.
- **Impacto esperado:** Proporcionar uma plataforma visualmente atraente e fácil de usar para estudantes, profissionais e entusiastas de tecnologia, promovendo a disseminação de informações com design moderno e funcionalidade robusta.

## 3. Requisitos Atendidos
- **Site com apresentação de notícias:** O frontend exibe 8 notícias em uma grade de 2 colunas, com título, data, conteúdo breve e botão "Leia Mais".
- **API desenvolvida em Node.js:** Uma API RESTful em Node.js com Express, acessível em `http://localhost:5000/api/news`, retorna os dados das notícias em formato JSON.
- **Acesso ao banco de dados:** Um banco de dados SQLite (`news.db`) armazena as notícias de forma persistente, garantindo que os dados sejam mantidos entre reinícios do servidor.

## 4. Tecnologias Utilizadas
- **Backend:** Node.js, Express, SQLite3 – para criar e gerenciar a API e o banco de dados.
- **Frontend:** HTML5, CSS3, JavaScript – para construir uma interface responsiva e interativa.
- **Ferramentas:** Git, GitHub, GitHub Desktop – para controle de versão, colaboração e hospedagem do código.
- **Design:** Cores e identidade visual baseadas no logotipo da FIAP, com foco em minimalismo e usabilidade.

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
- Exibição de 8 notícias em uma grade responsiva de 2 colunas, com título, data, conteúdo breve e botão "Leia Mais".
- Interatividade: contorno branco nos títulos ao passar o mouse, animações sutis para melhorar a experiência do usuário.
- Backend persistente que armazena e retorna dados via API (`/api/news`) em `http://localhost:5000`.
- Design minimalista com cores da FIAP (`#ed145b` para vermelho magenta e `#FBFFFF` para branco), garantindo uma identidade visual consistente.

## 7. Instalação e Configuração
### Pré-requisitos
- Node.js (versão 14.x ou superior)
- Git
- Navegador web moderno (Chrome, Firefox, Edge, etc.)

### Passos
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
O banco de dados SQLite (news.db) é criado automaticamente ao iniciar o servidor.
Inicie o servidor backend:
bash
node server.js
Abra o frontend:
Navegue para frontend e abra index.html em um navegador ou use um servidor local (como Live Server no VS Code).
8. Uso
Após iniciar o backend em http://localhost:5000, o frontend carrega as 8 notícias via API (/api/news).
Interaja com os retângulos das notícias para visualizar o contorno branco nos títulos e explore o botão "Leia Mais" (atualmente estilizado, mas expansível para mais funcionalidades).
O layout ajusta-se automaticamente a diferentes tamanhos de tela, garantindo acessibilidade.
9. Entrega no GitHub
O projeto está hospedado no GitHub em: github.com/seu-usuario/fiap-news.
O repositório inclui todos os arquivos necessários (server.js, index.html, style.css, script.js, news.db, e este README.md).
O código está versionado com Git, utilizando o GitHub Desktop para commits e sincronização.
10. Vídeo de Apresentação
Um vídeo demonstrando a solução proposta e o projeto desenvolvido está disponível no repositório. Acesse o arquivo video-apresentacao.mp4 ou veja o link incorporado na aba "Releases" ou "Issues" do repositório.
O vídeo inclui:
Uma visão geral do projeto e seus objetivos.
Demonstração do funcionamento do frontend, backend e banco de dados.
Explicação do design, interatividade e tecnologias utilizadas.
11. Contribuição
Contribuições são incentivadas para aprimorar o Fiap News. Siga estas etapas:
Faça um fork deste repositório.
Crie uma branch: git checkout -b feature/nova-funcionalidade.
Faça commits: git commit -m "Adiciona nova funcionalidade".
Envie para o remoto: git push origin feature/nova-funcionalidade.
Abra um Pull Request no GitHub.
12. Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes (crie um arquivo LICENSE com o texto da licença MIT, se ainda não tiver).
13. Equipe e Contato
Autor: [Seu Nome]  
GitHub: github.com/seu-usuario  
Email: [seu-email@example.com (mailto:seu-email@example.com)]  
Data: 24 de fevereiro de 2025
14. Agradecimentos
Agradecemos à Fiap News e à organização do hackathon FIAP pelo apoio e oportunidade. Feedback e contribuições são sempre bem-vindos para melhorar o projeto.
```