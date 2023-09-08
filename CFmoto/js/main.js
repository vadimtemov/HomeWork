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