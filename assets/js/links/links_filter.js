const btn = document.getElementsByClassName('btn_link');
const cards = document.querySelectorAll('.link .card');
const content_cards = document.querySelector('.content_cards .content_right');

let checkBtnSelected = () => {
    for (let i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains('selected')) {
            btn[i].classList.remove('selected');
        }
    }
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {

        let all = btn[i].classList.contains('all');
        if (all) {
            checkBtnSelected();
            btn[i].classList.add('selected');
            content_cards.innerHTML = '';
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains('all')) {
                    content_cards.appendChild(cards[i])
                }
            }
        }

        let sugests = btn[i].classList.contains('sugests');
        if (sugests) {
            checkBtnSelected();
            btn[i].classList.add('selected');
            content_cards.innerHTML = '';
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains('sugests')) {
                    content_cards.appendChild(cards[i])
                }
            }
        }

        let gov = btn[i].classList.contains('gov');
        if (gov) {
            checkBtnSelected();
            btn[i].classList.add('selected');
            content_cards.innerHTML = '';
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains('gov')) {
                    content_cards.appendChild(cards[i])
                }
            }
        }

        let rh = btn[i].classList.contains('rh');
        if (rh) {
            checkBtnSelected();
            btn[i].classList.add('selected');
            content_cards.innerHTML = '';
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains('rh')) {
                    content_cards.appendChild(cards[i])
                }
            }
        }

        let contabil = btn[i].classList.contains('contabil');
        if (contabil) {
            checkBtnSelected();
            btn[i].classList.add('selected');
            content_cards.innerHTML = '';
            for (let i = 0; i < cards.length; i++) {
                if (cards[i].classList.contains('contabil')) {
                    content_cards.appendChild(cards[i])
                }
            }
        }
    })
}