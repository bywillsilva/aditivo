const btn_burger = document.getElementById('btn_burger');
const nav = document.getElementById('links_mobile');

btn_burger.addEventListener('click', () => {
    nav.style.display = 'flex';
})