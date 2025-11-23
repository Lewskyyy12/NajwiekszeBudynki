const menu = document.querySelector('.sidemenu');
const nav = document.querySelector('nav');

// początkowa pozycja menu względem dokumentu
const menuInitialTop = menu.offsetTop;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const navBottom = nav.getBoundingClientRect().bottom + window.scrollY;

    if (scrollY >= navBottom) {
        // menu przykleja się po tym, jak nav zniknie
        menu.style.position = 'fixed';
        menu.style.top = '0';
    } else {
        // menu wraca pod nav
        menu.style.position = 'absolute';
        menu.style.top = `${menuInitialTop}px`;
    }
});