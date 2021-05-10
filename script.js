const cards = document.querySelectorAll('.card');

function clearAllCard() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    clearAllCard();
    e.target.classList.toggle('active');
  });
});
