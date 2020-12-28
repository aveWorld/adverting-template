document.addEventListener('DOMContentLoaded', function () {
  new Splide('.sec-7__reviews', {
    arrows: false,
  }).mount();

  new Splide('.sec-1', {
    type: 'fade',
    rewind: true,
  }).mount();
});
