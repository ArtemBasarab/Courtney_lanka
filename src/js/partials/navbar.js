export const navbar = window.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.navbar__burger-btn')
    .addEventListener('click', () => {
      document
        .querySelector('.navbar__burger-btn')
        .classList.toggle('burger-active')
      document
        .querySelector('.navbar__nav-list')
        .classList.toggle('nav-active')
    })
})
