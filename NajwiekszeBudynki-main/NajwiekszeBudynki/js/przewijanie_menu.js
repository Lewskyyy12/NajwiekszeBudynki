const menu = document.querySelector('.sidemenu');
const nav = document.querySelector('nav');


const menuInitialTop = menu.offsetTop;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const navBottom = nav.getBoundingClientRect().bottom + window.scrollY;

    if (scrollY >= navBottom) {
        menu.style.position = 'fixed';
        menu.style.top = '0';
    } else {
        menu.style.position = 'absolute';
        menu.style.top = `${menuInitialTop}px`;
    }
});