const links = document.querySelectorAll('#menu a');
const articles = document.querySelectorAll('.articles li');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const filter = link.dataset.filter;

        articles.forEach(li => {
            const article = li.querySelector('article');

            if (filter === 'all' || article.classList.contains(filter)) {
                li.style.display = 'list-item';
            } else {
                li.style.display = 'none';
            }
        });
    });
});