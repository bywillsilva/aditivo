const li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', () => {
        event.preventDefault();
        checkSelected();
        li[i].classList.add('selected');
    })
}

const checkSelected = () => {
    for (let i = 0; i < li.length; i++) {
        if (li[i].classList.contains('selected')) {
            li[i].classList.remove('selected');
        }
    }
}