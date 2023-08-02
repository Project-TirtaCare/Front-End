const nav = document.querySelector('#container-navbar')

const onScroll = () => {
    const scrollPosition = window.scrollY

    nav.classList.toggle("scrolled-down", scrollPosition > 100)
}

document.addEventListener("scroll", onScroll, {passive : true})

const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropDown-menu')

toggleBtn.addEventListener('click', () => {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu'
})


