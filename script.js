const searchBar = document.getElementById('searchBar');
const cards = document.querySelectorAll('.product-card');

searchBar.addEventListener('keyup', function () {
    const query = this.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h1').textContent.toLowerCase();
        const visible = title.includes(query);
        card.style.display = visible ? 'block' : 'none';
    });
});

// Modal
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        const title = card.querySelector('h1').textContent;
        const description = card.querySelector('p').textContent;

        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});