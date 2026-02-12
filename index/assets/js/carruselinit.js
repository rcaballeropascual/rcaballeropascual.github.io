document.querySelectorAll('.main-swiper').forEach(swiperEl => {
  new Swiper(swiperEl, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,
    navigation: {
      nextEl: swiperEl.querySelector('.swiper-button-next'),
      prevEl: swiperEl.querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: swiperEl.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});
