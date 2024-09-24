const btn_top = document.getElementById('btn_top');

btn_top.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.addEventListener('scroll', () => {
    let y = window.scrollY;
    if (y >= 500) {
        btn_top.style.opacity = 1;
    } else {
        btn_top.style.opacity = 0;
    }
})