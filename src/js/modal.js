const headerBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.modal');
const exitModal = document.querySelector('.modal__exit');
const body = document.querySelector('body');

headerBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  body.style.overflow = 'hidden';
});

exitModal.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});
