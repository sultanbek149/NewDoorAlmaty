// Collapse NavbarContent

const navbarContent = document.querySelector('#navbarToggleExternalContent')
const navbarButton = document.querySelector('[data-bs-target]')


const hideNavbarContent = () => {
    navbarContent.classList.toggle('show')
    navbarButton.classList.toggle('collapsed')
    navbarButton.ariaExpanded = false
}

navbarContent.addEventListener('click', hideNavbarContent)