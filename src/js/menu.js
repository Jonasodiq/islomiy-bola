const toggleMenu = () => {

    // Get element from DOM
    const menuButton = document.querySelector('.menu__button')
    const rightMenu = document.querySelector('.right-menu')

    const linkButton = document.querySelector('.hero__regin')
    const menuLeftButton = document.querySelector('.left-menu__close')
    const leftMenu = document.querySelector('.left-menu')

    // Toggle-right Menu
    const toggleRightMenu = () => {
        rightMenu.classList.toggle('right-menu--visible')
        menuButton.classList.toggle('menu__button--close')
    }
    // Create Event
    menuButton.addEventListener('click', toggleRightMenu)

    // Toggle-left Menu
    const toggleLeftMenu = () => {
        leftMenu.classList.toggle('left-menu--visible')
    }
    // Close-left Menu
    const closeMenu = () => {
        leftMenu.classList.remove('left-menu--visible')
    }

    // Create Event
    linkButton.addEventListener('click', toggleLeftMenu)
    menuLeftButton.addEventListener('click', closeMenu)

}
toggleMenu()