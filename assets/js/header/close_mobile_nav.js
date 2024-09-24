const li = document.querySelectorAll('header li');

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', () => {
        btn_close.click()
    })
}