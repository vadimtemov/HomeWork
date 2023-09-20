// modal

const btn = document.querySelector('.connect_btn')
const modal = document.querySelector('.body')
const modalApp = document.querySelector('.modal_application')
const btnClose = document.querySelector('.modal_application_close')

const closeModalApp = () => {
  modal.classList.remove('body_application-open')
}

btn.addEventListener('click', () => {
  modal.classList.add('body_application-open')
})

modalApp.addEventListener('click', event => {
  const target = event.target
  if (target && target.classList.contains('modal_application')) {
    closeModalApp()
  }
})

btnClose.addEventListener('click', () => {
  closeModalApp()
})

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModalApp()
  }
})

// burger

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

// slider-routes

const swiper = new Swiper('.gallery__routes', {
  // direction: 'horizontal',
  // loop: true,
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 22,
  
  grabCursor: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // mousewheel: {
  //   sensitivity: 1,
  //   eventsTarget: '.swiper-wrapper'
  // },

});