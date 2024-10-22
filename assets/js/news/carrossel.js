let dot_news = document.querySelectorAll('#news .dot');
let arrow_news = document.querySelectorAll('#news .arrow');
let content_news = document.querySelector('#news .content_news');


arrow_news[0].addEventListener('click', () => {
    prevSlide_news();
})

arrow_news[1].addEventListener('click', () => {
    nextSlide_news();
})

let nextDot_news = () => {
    for (let i = 0; i < dot_news.length; i++) {
        if (dot_news[i].classList.contains('selected')) {

            removeCheck_news();

            if (i + 1 >= dot_news.length) {
                dot_news[0].classList.add('selected')
                checkSelectedDot_news();
                break;
            }

            dot_news[i + 1].classList.add('selected');
            checkSelectedDot_news();
            break;
        }
    }
}

class Carrossel_news {
    constructor() { 
        this.interval = setInterval(nextDot_news, 5000);
    }

    interval = ''
    
    stop = function () {
        clearInterval(this.interval)
    }
}

let carr_news = new Carrossel_news();

let prevSlide_news = () => {
    carr_news.stop();

    for (let i = 0; i < dot_news.length; i++) {
        if (dot_news[i].classList.contains('selected')) {  
            
            removeCheck_news();
            
            if (i - 1 < 0) {
                dot_news[dot_news.length - 1].classList.add('selected');
                checkSelectedDot_news();
                break;
            }

            dot_news[i - 1].classList.add('selected');
            checkSelectedDot_news();
            break;
        }
    }

    carr_news = new Carrossel_news();
}

let nextSlide_news = () => {
    carr_news.stop();

    for (let i = 0; i < dot_news.length; i++) {
        if (dot_news[i].classList.contains('selected')) {
            removeCheck_news();
            if (i + 1 >= dot_news.length) {
                dot_news[0].classList.add('selected')
                break;
            }
            dot_news[i + 1].classList.add('selected');
            break;
        }
    }

    carr_news = new Carrossel_news();
}

for (let i = 0; i < dot_news.length; i++) {
    dot_news[i].addEventListener('click', () => {
        removeCheck_news();
        dot_news[i].classList.add('selected');
    })
}

let removeCheck_news = () => {
    for (let i = 0; i < dot_news.length; i++) {
        if (dot_news[i].classList.contains('selected')) {
            dot_news[i].classList.remove('selected');
        }
    }
}


let checkSelectedDot_news = () => {
    for (let i = 0; i < dot_news.length; i++) {
        if (dot_news[i].classList.contains('selected')) {
            switch (i) {
                case 0:
                    content_news.classList.add('one')
                    content_news.classList.remove('two')
                    content_news.classList.remove('three')
                    content_news.classList.remove('four')
                    content_news.classList.remove('five')
                    content_news.classList.remove('six')
                    content_news.classList.remove('seven')
                    break;
                case 1:
                    content_news.classList.add('two')
                    content_news.classList.remove('one')
                    content_news.classList.remove('three')
                    content_news.classList.remove('four')
                    content_news.classList.remove('five')
                    content_news.classList.remove('six')
                    content_news.classList.remove('seven')
                    break;
                case 2:
                    content_news.classList.add('three')
                    content_news.classList.remove('one')
                    content_news.classList.remove('tow')
                    content_news.classList.remove('four')
                    content_news.classList.remove('five')
                    content_news.classList.remove('six')
                    content_news.classList.remove('seven')
                    break;
                case 3:
                    content_news.classList.add('four')
                    content_news.classList.remove('one')
                    content_news.classList.remove('two')
                    content_news.classList.remove('three')
                    content_news.classList.remove('five')
                    content_news.classList.remove('six')
                    content_news.classList.remove('seven')
                    break;
                case 4:
                    content_news.classList.add('five')
                    content_news.classList.remove('one')
                    content_news.classList.remove('two')
                    content_news.classList.remove('three')
                    content_news.classList.remove('four')
                    content_news.classList.remove('six')
                    content_news.classList.remove('seven')
                    break;
                case 5:
                    content_news.classList.add('six')
                    content_news.classList.remove('one')
                    content_news.classList.remove('two')
                    content_news.classList.remove('three')
                    content_news.classList.remove('four')
                    content_news.classList.remove('five')
                    content_news.classList.remove('seven')
                break;
                case 6:
                    content_news.classList.add('seven')
                    content_news.classList.remove('one')
                    content_news.classList.remove('two')
                    content_news.classList.remove('three')
                    content_news.classList.remove('four')
                    content_news.classList.remove('five')
                    content_news.classList.remove('six')
                    break;
                default:
                    content_news.classList.add('one')
                    content_news.classList.remove('two')
                    content_news.classList.remove('three')
                    content_news.classList.remove('four')
                    content_news.classList.remove('five')
                    content_news.classList.remove('six')
                    content_news.classList.remove('seven')
                    break;
            }
        }
    }
}