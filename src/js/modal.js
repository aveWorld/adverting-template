const headerBtn = document.querySelector('.header__btn');
const modal = document.querySelector('.modal');
const exitModal = document.querySelector('.modal__exit');
const account = document.getElementById('account');
const modalAcc = document.querySelector('.modal__account');
const exitModalAcc = document.querySelector('.modal__exit__account');
const body = document.querySelector('body');

headerBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  body.style.overflow = 'hidden';
});

account.addEventListener('click', () => {
  // close current modal
  modal.style.display = 'none';
  body.style.overflow = 'auto';

  modalAcc.style.display = 'flex';
  body.style.overflow = 'hidden';
  exitModalAcc.addEventListener('click', () => {
    modalAcc.style.display = 'none';
    body.style.overflow = 'auto';
  });
});

exitModal.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});
