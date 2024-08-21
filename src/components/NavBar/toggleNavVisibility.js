export const displayNav = () => {
    const navBar = document.querySelector('.navbar');
    const navBarOverlay = document.querySelector('.navbar_overlay');
    navBar.classList.add('active');
    navBarOverlay.classList.add('active');
}

export const hideNav = () => {
    const navBar = document.querySelector('.navbar');
    const navBarOverlay = document.querySelector('.navbar_overlay');
    navBar.classList.remove('active');
    navBarOverlay.classList.remove('active');
}