'use strict';

//burger-btn
(function () {
  const burgerBtn = document.querySelector('.burger');
  const mobileNav = document.querySelector('.nav');
  const body = document.querySelector('body');
  const header = document.querySelector('.header');

  //при нажатии на якорную ссылку или на ссылку адрес/тлф - мобильное меню также должно закрываться
  //для этого я дал класс js-header-close чтобы получить нужный массив ссылок, при нажатии на которые header будет закрываться
  const links = Array.from(document.querySelectorAll('.js-header-close'));

  //присваиваем все классы одной функцией:
  function closeHeader() {
    burgerBtn.classList.toggle('burger_active');
    mobileNav.classList.toggle('nav_active');
    body.classList.toggle('stop-scroll');
    header.classList.toggle('header_active');
  }

  burgerBtn.addEventListener('click', closeHeader);

  //клик по ссылкам в mobile-header должен работать и отключаться в зависимости от разрешения
  function checkCurrentWidth() {
    if (window.screen.width < 768) {
      links.forEach((el) => {
        el.addEventListener('click', closeHeader);
      });
    } else {
      links.forEach((el) => {
        el.removeEventListener('click', closeHeader);
      });
    }
  }

  checkCurrentWidth();

  window.addEventListener('resize', checkCurrentWidth);
})();

const swiperSertificates = new Swiper('.sertificates__swiper', {
  //direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  grabCursor: true,
  spaceBetween: 20,
  speed: 1000,
  autoplay: {
    delay: 4000,
  },
});

const swiperReviews = new Swiper('.reviews__swiper', {
  loop: true,
  slidesPerView: 1,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  grabCursor: true,
  spaceBetween: 20,
  speed: 1000,
  autoplay: {
    delay: 4000,
  },
});

const swiperResults = new Swiper('.results__swiper', {
  loop: true,
  slidesPerView: 1,
  allowSlideNext: true,
  allowSlidePrev: true,
  allowTouchMove: true,
  grabCursor: true,
  spaceBetween: 20,
  speed: 1000,
  autoplay: {
    delay: 4000,
  },
});

const faceContainer = document.querySelector('.services__face-sign');

const btn = document.querySelector('.services__face-sign button');

console.log(faceContainer);

console.log(btn);

//faq
const switchElements = document.querySelectorAll('.faq__switch');
const imgElements = document.querySelectorAll('.faq__pluse-btn');
const listElements = document.querySelectorAll('.faq__list');

switchElements.forEach(function (switchElement, index) {
  switchElement.addEventListener('click', function () {
    toggleList(index);
    imgElements[index].classList.toggle('rotated');
  });
});

imgElements.forEach(function (imgElement, index) {
  imgElement.addEventListener('click', function () {
    toggleList(index);
    imgElement.classList.toggle('rotated');
  });
});

function toggleList(index) {
  listElements.forEach(function (listElement, listIndex) {
    if (listIndex === index) {
      listElement.classList.toggle('show');
    } else {
      listElement.classList.remove('show');
    }
  });
}

window.addEventListener('resize', function () {
  listElements.forEach(function (listElement) {
    listElement.classList.add('show');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq__question');
  const showMoreButton = document.getElementById('showMoreButton');

  for (let i = 4; i < faqQuestions.length; i++) {
    faqQuestions[i].style.display = 'none';
  }

  showMoreButton.addEventListener('click', function () {
    for (let i = 4; i < faqQuestions.length; i++) {
      faqQuestions[i].style.display = 'block';
    }

    showMoreButton.style.display = 'none';
  });

  if (faqQuestions.length > 4) {
    showMoreButton.style.display = 'block';
  } else {
    showMoreButton.style.display = 'none';
  }
});
