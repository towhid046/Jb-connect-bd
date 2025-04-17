const menuButton = document.getElementById('menu-icon')
const menu = document.getElementById('menu-id')
const navbar = document.getElementById('navbar-id')

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

// change the background to white if user scroll more that 100px
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-primary', 'box-shadow');
    } else {
        navbar.classList.remove('bg-primary', 'box-shadow');
        navbar.classList.add('bg-transparent');
    }
});


