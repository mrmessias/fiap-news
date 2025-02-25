fetch('http://localhost:5000/api/news')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('news-container');
        data.forEach(news => {
            const div = document.createElement('div');
            div.className = 'news-item';
            div.innerHTML = `
                <h2>${news.title}</h2>
                <p class="date">${news.date}</p>
                <p>${news.content}</p>
                <a href="${news.title.toLowerCase().replace(' ', '-')}.html" class="read-more">+</a>
            `;
            container.appendChild(div);
        });
    });