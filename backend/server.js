const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

const db = new sqlite3.Database('news.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite com sucesso');
    }
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        content TEXT,
        date TEXT
    )`, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err.message);
        }
    });

    const newsList = [
        { title: 'Nova IA lançada', content: 'Uma IA revolucionária foi lançada hoje.', date: '24 de Fevereiro de 2025' },
        { title: 'Carro voador', content: 'Protótipo de carro voador é testado com sucesso.', date: '23 de Fevereiro de 2025' },
        { title: '5G expandido', content: 'Nova rede 5G cobre 90% das áreas urbanas.', date: '22 de Fevereiro de 2025' },
        { title: 'Realidade virtual avançada', content: 'Óculos VR revolucionam jogos e trabalho remoto.', date: '21 de Fevereiro de 2025' },
        { title: 'Baterias de longa duração', content: 'Tecnologia promete baterias que duram até 10 anos.', date: '20 de Fevereiro de 2025' },
        { title: 'Inteligência quântica', content: 'Primeiro computador quântico comercial é lançado.', date: '19 de Fevereiro de 2025' },
        { title: 'Robôs domésticos', content: 'Assistentes robóticos chegam às casas brasileiras.', date: '18 de Fevereiro de 2025' },
        { title: 'Internet espacial', content: 'Satélites expandem acesso global à internet.', date: '17 de Fevereiro de 2025' }
    ];

    newsList.forEach(news => {
        db.get("SELECT id FROM news WHERE title = ? AND content = ? AND date = ?", [news.title, news.content, news.date], (err, row) => {
            if (err) {
                console.error('Erro ao verificar notícia:', err.message);
            } else if (!row) {
                
                db.run("INSERT INTO news (title, content, date) VALUES (?, ?, ?)", [news.title, news.content, news.date], (err) => {
                    if (err) {
                        console.error('Erro ao inserir notícia:', err.message);
                    }
                });
            }
        });
    });
});

app.get('/api/news', (req, res) => {
    db.all("SELECT * FROM news ORDER BY date DESC", [], (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Erro ao fechar o banco de dados:', err.message);
        }
        console.log('Banco de dados fechado.');
        process.exit(0);
    });
});