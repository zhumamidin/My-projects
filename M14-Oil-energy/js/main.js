const btn = document.querySelector('.header-nav-btn')
const nav = document.querySelector('.header-nav')

btn.addEventListener('click', () => nav.classList.toggle('header-menu-open'))
