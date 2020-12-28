const burgerMenu = document.querySelector('.burger-menu');
const burgerLinks = document.querySelector('.burger__links');
const burgerLink = document.querySelectorAll('.burger__link');

burgerMenu.addEventListener('click', () => {
  if (burgerMenu.classList.value === 'burger-menu') {
    burgerMenu.classList.add('open');
    burgerLinks.classList.add('show__burger');
  } else {
    burgerMenu.classList.remove('open');
    burgerLinks.classList.remove('show__burger');
  }
});

for (const link of burgerLink) {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
    burgerLinks.classList.remove('show__burger');
  });
}
