const navBtn = document.getElementById('nav-btn')
const navLinks = document.getElementById('nav-links')
const toTop = document.getElementById('to-top')

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