const navBtn = document.getElementById('nav-btn')
const navLinks = document.getElementById('nav-links')
const toTop = document.getElementById('to-top')
const navLogo = document.getElementById('nav-logo')

navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('hidden-links')
})

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('hidden-links')
})

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

navLogo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})