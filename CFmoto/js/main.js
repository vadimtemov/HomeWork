// MODAL_APPLICATION

const body = document.querySelector('.body')
const btn = document.querySelector('.connect_btn')
const modalApp = document.querySelector('.modal_application')
const btnCloseApp = document.querySelector('.modal_application_close')

const closeModalApp = () => {
  body.classList.remove('body_application-open')
}

btn.addEventListener('click', () => {
  body.classList.add('body_application-open')
})

modalApp.addEventListener('click', event => {
  const target = event.target
  if (target && target.classList.contains('modal_application')) {
    closeModalApp()
  }
})

btnCloseApp.addEventListener('click', () => {
  closeModalApp()
})

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModalApp()
  }
})

// MODAL_EXCURSION

const btnDetal = document.querySelector('.route-btn_details')
const modalEx = document.querySelector('.modal_excursion')

btnDetal.addEventListener('click', openModalEx)
modalEx.addEventListener('click', closeModalEx)

function openModalEx(e) {
  e.preventDefault()
  body.classList.add('body_excursion-open')
}

function closeModalEx(e) {
  // e.preventDefault() - из-за нее не работает календарь

  const target = e.target

  if (target.closest('.modal_excursion-close') || target.classList.contains('modal_excursion')) {
    document.body.classList.remove('body_excursion-open')
  }
}

// Открытие модальных окон для кнопок
const btnExtendetOpen = document.querySelector('.btn_open-extended')

btnExtendetOpen.addEventListener('click', openModalEx)
function openModalEx(e) {
  e.preventDefault()
  body.classList.add('body_excursion-open')
}
// Открытие модальных окон для кнопок
const btnExperienceOpen = document.querySelector('.btn_open-experience')

btnExperienceOpen.addEventListener('click', openModalEx)
function openModalEx(e) {
  e.preventDefault()
  body.classList.add('body_excursion-open')
}

// MODAL_INFO

const btnOption = document.querySelector('.icon-options')
const modalInfo = document.querySelector('.modal__info')

btnOption.addEventListener('click', openModalInfo)
modalInfo.addEventListener('click', closeModalInfo)

function openModalInfo(e) {
  e.preventDefault()
  body.classList.add('body__info-open')
}

function closeModalInfo(e) {
  e.preventDefault()

  const target = e.target

  if (target.closest('.modal_info-close') || target.classList.contains('modal__info')) {
    document.body.classList.remove('body__info-open')
  }
}


// BURGER

const btnBurger = document.querySelector('.burger-icon')
const overlay = document.querySelector('.overlay')

btnBurger.addEventListener('click', () => {
  if (!document.body.classList.contains('body--open-menu')) {
    document.body.classList.add('body--open-menu'),
    overlay.classList.add('overlay--show')
  } else {
    document.body.classList.remove('body--open-menu')
    overlay.classList.remove('overlay--show')
  }
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay--show'),
  document.body.classList.remove('body--open-menu')
})


// SLIDER

// ============== slider-routes ===========

// new Swiper(".swiper-container", {
//   slidesPerView: 'auto',
//   spaceBetween: 22,
//   speed: 700,
  

//   observer: true,
//   observeParents: true,
//   observeSlideChildren: true,
  
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// =============== slider-routes 2=====================

const swiper = new Swiper('.route__slider', {

  spaceBetween: 22,
  slidesPerView: 1.1,
  speed: 700,
  grabCursor: true,
  width: 320,
  // centeredSlides: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      800: {
        slidesPerView: 1.1,
        spaceBetween: 22,
      },
      600: {
        slidesPerView: 1.4,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 8,
      },
      400: {
        slidesPerView: 0.9,
        spaceBetween: 30,
      },
    }
  });

  // =============== Gallery_slider=====================

  const photo = new Swiper('.photo__swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 22,
    centeredSlides: true,
    initialSlide: 2,
    speed: 700,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.photo-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.photo-button-prev',
      prevEl: '.photo-button-next',
    },

    breakpoints: {
      900: {
        slidesPerView: 4,
      },
      800: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      300: {
        slidesPerView: 1,
      },
    }
  });

  // ------------------ Accordion ----------------------

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {

      const accordionControl = e.target.closest('.accordion-list__control');
      if(!accordionControl) return
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });