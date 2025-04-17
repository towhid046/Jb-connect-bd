const menuButton = document.getElementById('menu-icon')
const menu = document.getElementById('menu-id')

let isMenuOpen = false;

// click handler to toggle menu
menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menu.classList.remove('hidden')
        menuButton.innerHTML = `<i class="fas fa-times"></i>`
    } else {
        menu.classList.add('hidden')
        menuButton.innerHTML = `<i class="fas fa-bars"></i>`
    }
})
