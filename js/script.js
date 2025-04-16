const menuButton = document.getElementById('menu-icon')
const menu = document.getElementById('menu-id')

let isMenuOpen = false;

// click handler to toggle menu
menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menu.classList.remove('menu-close')
        menu.classList.add('menu-open')
        menuButton.innerHTML = `<i class="fas fa-times"></i>`
    } else {
        menu.classList.remove('menu-open')
        menu.classList.add('menu-close')
        menuButton.innerHTML = `<i class="fas fa-bars"></i>`
    }
})

