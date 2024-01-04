
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    drawer.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
    drawer.classList.add('hidden');
    overlay.classList.add('hidden');
});
