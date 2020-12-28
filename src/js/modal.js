const headerBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.modal');
const exitModal = document.querySelector('.modal__exit');

headerBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

exitModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
