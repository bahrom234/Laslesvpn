 alert("Hello to VPN site LaslesVPN");

window.addEventListener('DOMContentLoaded', function () {

    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');
    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    function show() {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '';
    }

    function close() {
        mainMenu.style.top = '-100%';
    }
})