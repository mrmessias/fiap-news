# Fiap News - Solução para o Hackathon FIAP

## 1. Resumo do Projeto

O **Fiap News** é uma aplicação web desenvolvida para o hackathon da FIAP, focada em notícias de tecnologia. O projeto inclui:
- **Frontend interativo**
- **API em Node.js** para gerenciamento de dados
- **Banco de dados SQLite** para armazenamento persistente

O design é minimalista, com as cores da FIAP (**#ed145b** e **#FBFFFF**), organizado em uma **grade de 2 colunas** com animações sutis e interatividade.

---

## 2. Objetivo

### **Problema abordado**
Criar um site de notícias tecnológicas acessível, funcional e escalável para a **Fiap News**.

### **Solução proposta**
Um site responsivo utilizando **HTML, CSS e JavaScript**, conectado a uma **API RESTful** em **Node.js/Express** com **SQLite** para persistência.

### **Impacto esperado**
Facilitar o acesso a informações tecnológicas com um design moderno e funcional, promovendo **inovação e educação** na comunidade FIAP.

---

## 3. Requisitos Atendidos

✅ **Site responsivo com apresentação de notícias** (8 notícias em uma grade de 2 colunas).  
✅ **API RESTful** em `http://localhost:5000/api/news`, retornando dados em **JSON**.  
✅ **Banco de dados SQLite** (`news.db`) para armazenamento persistente.

---

## 4. Tecnologias Utilizadas

- **Backend:** Node.js, Express, SQLite3  
- **Frontend:** HTML5, CSS3, JavaScript  
- **Ferramentas:** Git, GitHub, GitHub Desktop  

---

## 5. Estrutura do Projeto

```bash
fiap-news/
├── backend/
│   ├── server.js
│   └── news.db
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## 6. Funcionalidades

- 📌 **Exibição de 8 notícias** em uma **grade responsiva** (2 colunas).
- 🖱️ **Interatividade**: Contorno branco nos títulos ao passar o mouse.
- 🔄 **Backend persistente** que armazena e retorna dados via API (`/api/news`).

---

## 7. Instalação e Configuração

### **Pré-requisitos**
- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [Git](https://git-scm.com/)
- Navegador web moderno (Chrome, Firefox, Edge, etc.)

### **Passos**

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/fiap-news.git
   cd fiap-news
   ```

2. **Instale as dependências do backend**:
   ```bash
   cd backend
   npm init -y
   npm install express sqlite3
   ```

3. **Inicie o servidor backend**:
   ```bash
   node server.js
   ```

4. **Abra o frontend**:
   - Navegue até a pasta `frontend` e abra `index.html` em um navegador.
   - Ou use um servidor local (ex: Live Server no VS Code).

---

## 8. Uso

🔹 **Backend** rodando em `http://localhost:5000`.  
🔹 **Frontend** carrega as notícias via API (`/api/news`).  
🔹 **Efeitos visuais** ao passar o mouse sobre os títulos.  
🔹 **Layout responsivo**, adaptando-se a telas menores.

---

## 9. Entrega no GitHub

📌 **Repositório do projeto**: [github.com/seu-usuario/fiap-news](https://github.com/seu-usuario/fiap-news)

Inclui todos os arquivos necessários e está versionado com Git e GitHub Desktop.

---

## 10. 🎥 Vídeo de Apresentação

Um vídeo demonstrando a solução está disponível em:  
📌 `video-apresentacao.mp4`

### O vídeo cobre:
- ✅ Visão geral do projeto
- ✅ Objetivos e funcionalidades
- ✅ Demonstração do frontend/backend
- ✅ Tecnologias utilizadas

---

## 11. Contribuição

Contribuições são bem-vindas! 🚀

1. **Faça um fork do repositório**.
2. **Crie uma branch**:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Faça commits das suas alterações**:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. **Envie para o repositório remoto**:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra um Pull Request** no GitHub.

---

## 12. Licença

Este projeto está sob a licença **MIT**.

### MIT License

```
Copyright (c) 2025

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
