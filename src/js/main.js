import { data } from './works.js';

const previewsDiv = document.querySelector('.sec-5__category-previews');
const previewProt = previewsDiv.children[0].cloneNode(true);

const categoryDiv = document.querySelector('.sec-5__categories');
let categories = document.querySelectorAll('.sec-5__category');
let prevCategory = categories[0];
for (const category of categories) {
  category.addEventListener('click', (event) => {
    prevCategory.classList.remove('sec-5__category-active');
    event.currentTarget.classList.add('sec-5__category-active');
    prevCategory = event.currentTarget;
    hadnleCategories(event.currentTarget.id);
  });
}

const hadnleCategories = (categoryName = 'all') => {
  const previews = document.querySelectorAll('.sec-5__category-preview');
  const previewsArr = [];

  for (let i = 1; i <= previews.length; i++) {
    previews[previews.length - i].remove();
  }
  let currentData;
  if (categoryName !== 'all') {
    currentData = data.filter((el) => el.category === categoryName);
  } else {
    currentData = data;
  }
  for (let i = 0; i < currentData.length; i++) {
    previewsArr.push(previewProt.cloneNode(true));
    previewsArr[i].style.backgroundImage = `url(${currentData[i].image})`;
    previewsArr[i].children[0].children[0].innerText = currentData[i].text;
  }
  previewsDiv.append(...previewsArr);
};

hadnleCategories();

const toTopBtn = document.querySelector('.to-top');

function scrollToTop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    toTopBtn.style.display = 'flex';
  } else {
    toTopBtn.style.display = 'none';
  }
}

setInterval(scrollToTop, 1000);
