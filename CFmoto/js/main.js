const btn = document.querySelector('.connect_btn')
const modal = document.querySelector('.body')
const btnClose = document.querySelector('.modal_application_close')

btn.addEventListener('click', () => {
  modal.classList.add('body_application-open')
})

btnClose.addEventListener('click', () => {
  modal.classList.remove('body_application-open')
})