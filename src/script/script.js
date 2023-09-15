'use strict';

const body = document.querySelector('body');
/*                          PRELOADER                              */

(function () {
  const content = [];
  content[0] = document.querySelector('.header');
  content[1] = document.querySelector('main');
  content[2] = document.querySelector('.footer');

  content.forEach((el) => {
    el.classList.add('hideContent');
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.preloader').classList.add('preloader_hidden');

      content.forEach((el) => {
        el.classList.remove('hideContent');
      });
    }, 1000);
  });

  //if (body.children.classList.contains('preloader') && )
})();

/* auxillary functions which i m going to use in sliders and so on
function showLoading() {
  content.forEach((el) => {
    el.classList.add('hideContent');
  });
  document.querySelector('.preloader').classList.remove('preloader_hidden');
}

function hideLoading() {
  setTimeout(() => {
    document.querySelector('.preloader').classList.add('preloader_hidden');

    content.forEach((el) => {
      el.classList.remove('hideContent');
    });
  }, 1000);
}
*/

/*                          HEADER                              */
//'jumping' button due to scrollBar:

const scrollBarWidth = () => {
  const innerWidth = window.innerWidth;
  const clientWidth = document.documentElement.clientWidth;

  const width = innerWidth - clientWidth;
  return width;
};

//burger-btn
(function () {
  const burgerBtn = document.querySelector('.burger');
  const currentPadding = 35;
  burgerBtn.style.right = `${currentPadding + 'px'}`;
  const mobileNav = document.querySelector('.nav');
  const body = document.querySelector('body');
  const header = document.querySelector('.header');

  const links = Array.from(document.querySelectorAll('.js-header-close'));

  function closeHeader() {
    burgerBtn.classList.toggle('burger_active');
    (function positionBurgerBtn() {
      let rightOffset;
      if (burgerBtn.classList.contains('burger_active')) {
        rightOffset = `${currentPadding + scrollBarWidth() + 'px'}`;
      } else {
        rightOffset = `${currentPadding - scrollBarWidth() + 'px'}`;
      }
      burgerBtn.style.right = rightOffset;
    })();
    mobileNav.classList.toggle('nav_active');
    body.classList.toggle('stop-scroll');
    header.classList.toggle('header_active');
  }

  burgerBtn.addEventListener('click', closeHeader);

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

/*                          FIRST                              */

const firstSection = () => {
  const first = document.getElementById('first');
  const girlBlock = first.querySelector('.first__girl');
  const footer = first.querySelector('.first__footer');
  const width767 = window.matchMedia('(min-width: 767px)');

  function checkScreenWidth(e) {
    if (e.matches) {
      girlBlock.appendChild(footer);
    } else {
      first.appendChild(footer);
    }
  }

  width767.addEventListener('change', checkScreenWidth);
};

firstSection();

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

/*                          SERVICES                           */
const servicesWidth = () => {
  function previousWidthCalc() {
    //I will define line under the button in respect of picture's size which is stabled by 43vh
    const img = document.querySelector('.services__face');
    //width of the line is 1/4 of the picture height
    let signWidth = Math.round((img.offsetHeight / 100) * 23);

    document.documentElement.style.setProperty(
      '--faceSignWidth',
      `${signWidth + 'px'}`,
    );
  }

  previousWidthCalc();

  window.addEventListener('resize', previousWidthCalc);
};

//due to loader shall be hidden in 1000ms after window.loaded so here is a crutch, for services' signs on the face:
window.onload = setTimeout(() => {
  servicesWidth();
}, 1500);

function switchBtn() {
  const face = document.querySelector('.services__face');
  const hand = document.querySelector('.services__hand');

  (function () {
    face.classList.toggle('hideContent');
    hand.classList.toggle('hideContent');
  })();
}

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

/*                       auxiliary                                */
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

const renderSlider = (sliderClass, swiperClass) => {
  const slider = makeElement('div', sliderClass);
  const swiper = makeElement('div', 'swiper');
  swiper.classList.add(swiperClass);
  const swiperWrapper = makeElement('div', 'swiper-wrapper');
  slider.appendChild(swiper);
  swiper.appendChild(swiperWrapper);
  return slider;
};

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

const renderSlides = (array) => {
  const swiper = modal.querySelector('.swiper-wrapper');
  for (let i = 0; i < array.length; i++) {
    const slide = renderSlide(array[i]);
    swiper.appendChild(slide);
  }
};

const renderIcon = () => {
  const icon = makeElement('img', 'swipeIcon');
  icon.src = './src/img/swipe.svg';
  return icon;
};

function renderModal() {
  if (modal.classList.contains('modal_closed')) {
    modal.classList.remove('modal_closed');
  }

  if (!body.classList.contains('stop-scroll')) {
    body.classList.add('stop-scroll');
  }
}

function closeModal() {
  modal.classList.add('modal_closed');
  body.classList.remove('stop-scroll');
  //удалить все node узлы
}

/*                           modals                                     */

const renderHandMain2 = () => {
  renderModal();

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
        </div>
      </div>
    `;

  const container = modal.querySelector('.modalHand2 .container');
  const picturesArray = [
    {
      id: 1,
      srcsetWebp: './src/img/services/hand1.webp',
      srcset: './src/img/services/hand1.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
    {
      id: 2,
      srcsetWebp: './src/img/services/hand1.webp',
      srcset: './src/img/services/hand1.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
    {
      id: 3,
      srcsetWebp: './src/img/services/hand1.webp',
      srcset: './src/img/services/hand1.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
  ];
  const slider = renderSlider('modalHand2__slider', 'modalHand2__swiper');
  container.appendChild(slider);
  renderSlides(picturesArray);

  const modalLipstherapySlider = new Swiper('.modalHand2__swiper', {
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

  const icon = renderIcon();

  container.appendChild(icon);

  const closeBtn = modal.querySelector('.modal__close');
  closeBtn.addEventListener('click', closeModal);
};

const renderInjections = () => {
  renderModal();

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
        <button class="light" onclick="renderMasks()">Маски</button>
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

  //this is unwanted mistake which can not be decided right now:
  const closeBtn = modal.querySelector('.modal__close');
  closeBtn.addEventListener('click', closeModal);
};

const renderMasks = () => {
  renderModal();

  modal.innerHTML = `
  <div class="modalMasks">
    <div class="container">
      <div class="modal__close">
        <span></span>
        <span></span>
      </div>
      <h2 class="h2">Услуги</h2>
      <div class="btnsBlock">
        <button class="dark" onclick="renderInjections()">Уколы</button>
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

  const picturesArray = [
    {
      id: 1,
      srcsetWebp: './src/img/services/mask1.webp',
      srcset: './src/img/services/mask1.jpg',
      alt: 'маски для лица',
    },
    {
      id: 2,
      srcsetWebp: './src/img/services/mask1.webp',
      srcset: './src/img/services/mask1.jpg',
      alt: 'маски для лица',
    },
    {
      id: 3,
      srcsetWebp: './src/img/services/mask1.webp',
      srcset: './src/img/services/mask1.jpg',
      alt: 'маски для лица',
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

  const slider = renderSlider('modalMasks__slider', 'modalMasks__swiper');
  container.appendChild(slider);
  renderSlides(picturesArray);

  const modalMasksSlider = new Swiper('.modalMasks__swiper', {
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

  const icon = renderIcon();
  container.appendChild(icon);

  //this is unwanted mistake which can not be decided right now:
  const closeBtn = modal.querySelector('.modal__close');
  closeBtn.addEventListener('click', closeModal);
};

const renderMesotherapy = () => {
  renderModal();
  modal.innerHTML = `
  <div class="modalMesotherapy">
    <div class="container">
      <div class="modal__close">
        <span></span>
        <span></span>
      </div>
    <h2 class="h2">Услуги</h2>
    <div class="service-block">
      <div class="service-block__left">
        <h3 class="service-block__h3">Мезотерапия волосистой части головы</h3>
        <span class="service-block__text"
          >(коктейли из витаминов, минералов, аминокислот)</span
        >
      </div>
      <span class="service-block__price">от 1500₽</span>
    </div>
    </div>
  </div>
  `;

  const container = modal.querySelector('.modalMesotherapy .container');

  const picturesArray = [
    {
      id: 1,
      srcsetWebp: './src/img/services/hairs.webp',
      srcset: './src/img/services/hairs.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
    {
      id: 2,
      srcsetWebp: './src/img/services/hairs.webp',
      srcset: './src/img/services/hairs.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
    {
      id: 3,
      srcsetWebp: './src/img/services/hairs.webp',
      srcset: './src/img/services/hairs.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
  ];

  const slider = renderSlider(
    'modalMesotherapy__slider',
    'modalMesotherapy__swiper',
  );
  container.appendChild(slider);
  renderSlides(picturesArray);

  const modalMasksSlider = new Swiper('.modalMesotherapy__swiper', {
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

  const icon = renderIcon();

  container.appendChild(icon);

  //this is unwanted mistake which can not be decided right now:
  const closeBtn = modal.querySelector('.modal__close');
  closeBtn.addEventListener('click', closeModal);
};

const renderNosetherapy = () => {
  renderModal();

  modal.innerHTML = `
  <div class="modalNosetherapy">
  <div class="container">
    <div class="modal__close">
      <span></span>
      <span></span>
    </div>
    <h2 class="h2">Услуги</h2>
    <div class="service-block">
      <div class="service-block__left">
        <h3 class="service-block__h3">Заполнение носогубных складок</h3>
        <span class="service-block__text"
          >(гиалуроновая кислота, которая заполняет морщины и делает кожу
          более упругой)</span
        >
      </div>
      <span class="service-block__price">от 3500₽</span>
    </div>
    <div class="service-block">
      <div class="service-block__left">
        <h3 class="service-block__h3">Коррекция носогубных складок</h3>
        <span class="service-block__text"
          >(филлер, который заполняет морщины и делает кожу более
          упругой)</span
        >
      </div>
      <span class="service-block__price">от 5000₽</span>
    </div>
  </div>
</div>
  `;

  const container = modal.querySelector('.modalNosetherapy .container');

  const picturesArray = [
    {
      id: 1,
      srcsetWebp: './src/img/services/lips.webp',
      srcset: './src/img/services/lips.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
    {
      id: 2,
      srcsetWebp: './src/img/services/lips.webp',
      srcset: './src/img/services/lips.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
    {
      id: 3,
      srcsetWebp: './src/img/services/lips.webp',
      srcset: './src/img/services/lips.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
  ];

  const slider = renderSlider(
    'modalNosetherapy__slider',
    'modalNosetherapy__swiper',
  );
  container.appendChild(slider);

  renderSlides(picturesArray);

  const modalNosetherapySlider = new Swiper('.modalNosetherapy__swiper', {
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

  const icon = renderIcon();

  container.appendChild(icon);

  //this is unwanted mistake which can not be decided right now:
  const closeBtn = modal.querySelector('.modal__close');
  closeBtn.addEventListener('click', closeModal);
};

const renderLipstherapy = () => {
  renderModal();

  modal.innerHTML = `
  <div class="modalLipstherapy">
    <div class="container">
      <div class="modal__close">
        <span></span>
        <span></span>
      </div>
      <h2 class="h2">Услуги</h2>
      <div class="service-block">
        <div class="service-block__left">
          <h3 class="service-block__h3">Контурная пластика губ</h3>
          <span class="service-block__text"
            >(позволяет увеличить объем губ, убрать ассиметрию, сделать их более формованными и привлекательными)</span
          >
        </div>
        <span class="service-block__price">от 3500₽</span>
      </div>
    </div>
  </div>
  `;
  const container = modal.querySelector('.modalLipstherapy .container');

  const picturesArray = [
    {
      id: 1,
      srcsetWebp: './src/img/services/chin.webp',
      srcset: './src/img/services/chin.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
    {
      id: 2,
      srcsetWebp: './src/img/services/chin.webp',
      srcset: './src/img/services/chin.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
    {
      id: 3,
      srcsetWebp: './src/img/services/chin.webp',
      srcset: './src/img/services/chin.jpg',
      alt: 'мезотерапия волосистой части головы',
    },
  ];

  const slider = renderSlider(
    'modalLipstherapy__slider',
    'modalLipstherapy__swiper',
  );
  container.appendChild(slider);
  renderSlides(picturesArray);

  const modalLipstherapySlider = new Swiper('.modalLipstherapy__swiper', {
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

  const icon = renderIcon();

  container.appendChild(icon);

  //this is unwanted mistake which can not be decided right now:
  const closeBtn = modal.querySelector('.modal__close');
  closeBtn.addEventListener('click', closeModal);
};

/*                           modals's functions                          */
(function () {
  const services = document.getElementById('services');
  //btns:
  const toMesotherapy = services.querySelector('.toMesotherapy');
  toMesotherapy.addEventListener('click', renderMesotherapy);
  const toForehead = services.querySelector('.toForehead');
  toForehead.addEventListener('click', renderInjections);
  const toEye = services.querySelector('.toEye');
  toEye.addEventListener('click', renderInjections);
  const toLeftCheeck = services.querySelector('.toLeftCheek');
  toLeftCheeck.addEventListener('click', renderMasks);
  const toNose = services.querySelector('.toNose');
  toNose.addEventListener('click', renderNosetherapy);
  const toLips = services.querySelector('.toLips');
  toLips.addEventListener('click', renderLipstherapy);
})();
