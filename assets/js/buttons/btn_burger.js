const btn_burger = document.getElementById('btn_burger');
const nav = document.getElementById('links_mobile');
const btn_hr = document.querySelectorAll('.btn_burger hr');

function burger() {
    nav.style.display = 'flex';
}

btn_burger.addEventListener('click', () => {
    nav.style.display = 'flex';
})

btn_burger.addEventListener('mouseover', () => {
    for (let i = 0; i < btn_hr.length; i++) {
        btn_hr[i].style.color = "#6CC4EE"
    }
})

btn_burger.addEventListener('mouseout', () => {
    for (let i = 0; i < btn_hr.length; i++) {
        btn_hr[i].style.color = "#1A1A1A"
    }
})