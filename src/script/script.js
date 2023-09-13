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

//services
const servicesWidth = () => {
  function previousWidthCalc() {
    //I will define line under the button in respect of picture's size which is stabled by 43vh
    const container = document.querySelector('.services__face');
    //width of the line is 1/4 of the picture height
    let signWidth = Math.round((container.offsetHeight / 100) * 23);

    document.documentElement.style.setProperty(
      '--faceSignWidth',
      `${signWidth + 'px'}`,
    );
  }

  window.onload = previousWidthCalc();

  window.addEventListener('resize', previousWidthCalc);
};

servicesWidth();

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

/*                          MODAL                              */

const modal = document.getElementById('modal');
const makeElement = function (tagName, className, elemText) {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }

  if (elemText) {
    element.textContent = elemText;
  }
  return element;
};

const renderHandMain = () => {
  modal.innerHTML = `
  <div class="modalHand">
    <div class="modal__close">
      <span></span>
      <span></span>
    </div>
    <h2 class="h2">Услуги</h2>
    <div class="btnsBlock">
      <button class="dark">Лицо</button>
      <button class="light">Руки</button>
    </div>
    <div class="modalHand__img">
      <button class="modalHand__btn"></button>
      <img src="./src/img/services/hand.png" alt="мезотерапия" />
    </div>
  </div>
  `;
};

//renderHandMain();

const renderHandMain2 = () => {
  modal.innerHTML = `
    <div class="modalHand2">
      <div class="container">
        <div class="modal__close">
          <span></span>
          <span></span>
        </div>
        <h2 class="h2">Услуги</h2>
        <div class="service-block">
          <div class="service-block__left">
            <h3 class="service-block__h3">Мезотерапия кисти</h3>
            <span class="service-block__text"
              >(коктейли из витаминов, минералов, аминокислот)</span
            >
          </div>
          <span class="service-block__price">от 1500₽</span>
        </div>
        <div class="service-slider">
          <img
            class="service-slider__img"
            src="./src/img/services/hand-1.jpg"
            alt=""
          />
          <img class="swipeIcon" src="./src/img/swipe.svg" alt="слайдер" />
        </div>
      </div>
    </div>
    `;
};

//renderHandMain2();

const renderInjections = () => {
  modal.innerHTML = `
  <div class="modalInjections">
    <div class="container">
      <div class="modal__close">
        <span></span>
        <span></span>
      </div>
      <h2 class="h2">Услуги</h2>
      <div class="btnsBlock">
        <button class="dark">Уколы</button>
        <button class="light">Маски</button>
      </div>
      
      </div>
    </div>
  `;

  const renderCard = function (service) {
    const card = makeElement('div', 'injections-card');
    const cardUp = makeElement('div', 'injections-card__up');
    card.appendChild(cardUp);
    const img = makeElement('img', 'injections-card__img');
    const title = makeElement('div', 'injections-card__title');
    cardUp.appendChild(img);
    img.src = service.imgPath;
    img.alt = service.h3;
    cardUp.appendChild(title);
    const h3 = makeElement('h3', 'injections-card__h3', service.h3);
    const text = makeElement('span', 'injections-card__text', service.subtitle);
    const price = makeElement('span', 'injections-card__price', service.price);
    title.appendChild(h3);
    title.appendChild(text);
    title.appendChild(price);
    const cardDown = makeElement('div', 'injections-card__down');
    card.appendChild(cardDown);
    const list = makeElement('ul', 'services-list');
    cardDown.appendChild(list);
    //every card contains sub-card with ul. that's why I created array inside of every object
    function render() {
      for (let i = 0; i < service.liTexts.length; i++) {
        const listItem = makeElement('li', 'services-list__item');
        listItem.textContent = service.liTexts[i];
        list.appendChild(listItem);
      }
    }

    render();

    return card;
  };

  const renderCards = function (services) {
    const cardList = modal.querySelector('.modalInjections .container');
    for (let i = 0; i < services.length; i++) {
      const card = renderCard(services[i]);
      cardList.appendChild(card);
    }
  };

  renderCards(dataIncjections);
};

//renderInjections();

const renderMasks = () => {
  modal.innerHTML = `
  <div class="modalMasks">
    <div class="container">
      <div class="modal__close">
        <span></span>
        <span></span>
      </div>
      <h2 class="h2">Услуги</h2>
      <div class="btnsBlock">
        <button class="dark">Уколы</button>
        <button class="light">Маски</button>
      </div>
      
      </div>
    </div>
  `;
  const container = document.querySelector('.modalMasks .container');

  const data = [
    {
      id: 1,
      h3: 'Пилинг',
      text: '(раствор, который помогает удалить ороговевшие клетки истимулирует регенерацию кожи)',
      price: 'от 1000₽',
    },

    {
      id: 2,
      h3: 'Чистка лица',
      text: '(позволяет очистить кожу от загрязнений, улучшить ее цвет и текстуру)',
      price: 'от 1000₽',
    },

    {
      id: 3,
      h3: 'Альгинатная маска',
      text: '(маска на основе водорослей, увлажняет и делает упругой)',
      price: 'от 400₽',
    },
  ];

  const renderBlock = (service) => {
    const block = makeElement('div', 'service-block');
    const leftSide = makeElement('div', 'service-block__left');
    const h3 = makeElement('h3', 'service-block__h3');
    h3.textContent = service.h3;
    const text = makeElement('span', 'service-block__text');
    text.textContent = service.text;
    const price = makeElement('span', 'service-block__price');
    price.textContent = service.price;
    block.appendChild(leftSide);
    block.appendChild(price);
    leftSide.appendChild(h3);
    leftSide.appendChild(text);
    return block;
  };

  function renderBlocks(services) {
    for (let i = 0; i < services.length; i++) {
      const block = renderBlock(services[i]);
      container.appendChild(block);
    }
  }

  renderBlocks(data);

  const picturesArray = [
    {
      id: 1,
      srcsetWebp: './src/img/services/mask1.webp',
      srcset: './src/img/services/mask1.jpg',
      alt: 'маски для лица',
    },
    {
      id: 2,
      srcsetWebp: './src/img/services/mask2.webp',
      srcset: './src/img/services/mask2.jpg',
      alt: 'маски для лица',
    },
    {
      id: 3,
      srcsetWebp: './src/img/services/mask2.webp',
      srcset: './src/img/services/mask3.jpg',
      alt: 'маски для лица',
    },
  ];

  function renderSlider() {
    const slider = makeElement('div', 'modalMasks__slider');
    const swiper = makeElement('div', 'swiper');
    swiper.classList.add('modalMasks__swiper');
    const swiperWrapper = makeElement('div', 'swiper-wrapper');
    slider.appendChild(swiper);
    swiper.appendChild(swiperWrapper);
    container.appendChild(slider);
  }

  renderSlider();

  const renderSlide = (pictureItem) => {
    const slide = makeElement('div', 'swiper-slide');
    const picture = makeElement('picture');
    //source1 is for modern browser due to low maintanance of webp format
    const source1 = makeElement('source');
    if (pictureItem.srcsetWebp) {
      source1.setAttribute('srcset', pictureItem.srcsetWebp);
      source1.setAttribute('alt', pictureItem.alt);
      source1.setAttribute('type', 'image/webp');
    }
    //source2 is for old browser
    const source2 = makeElement('source');
    source1.setAttribute('srcset', pictureItem.srcset);
    source2.setAttribute('alt', pictureItem.alt);
    source2.setAttribute('type', 'image/jpg');

    const image = makeElement('img');
    image.src = pictureItem.srcset;
    image.alt = pictureItem.alt;

    slide.appendChild(picture);

    picture.appendChild(source1);
    picture.appendChild(source2);
    picture.appendChild(image);

    return slide;
  };

  const renderSlides = () => {
    const swiper = modal.querySelector('.swiper-wrapper');
    for (let i = 0; i < picturesArray.length; i++) {
      const slide = renderSlide(picturesArray[i]);
      swiper.appendChild(slide);
    }
  };

  renderSlides(picturesArray);

  const modalMasksSlider = new Swiper('.modalMasks__swiper', {
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

  const renderIcon = () => {
    const icon = makeElement('img', 'swipeIcon');
    icon.src = './src/img/swipe.svg';
    container.appendChild(icon);
  };

  renderIcon();
};

//renderMasks();
