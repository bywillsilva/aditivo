let dot = document.querySelectorAll('.hero .dot');
let arrow = document.querySelectorAll('.hero .arrow');
let content = document.querySelector('.hero .content_slides');


arrow[0].addEventListener('click', () => {
    prevSlide();
})

arrow[1].addEventListener('click', () => {
    nextSlide();
})

let nextDot = () => {
    for (let i = 0; i < dot.length; i++) {
        if (dot[i].classList.contains('selected')) {

            removeCheck();

            if (i + 1 >= dot.length) {
                dot[0].classList.add('selected')
                checkSelectedDot();
                break;
            }

            dot[i + 1].classList.add('selected');
            checkSelectedDot();
            break;
        }
    }
}

class Carrossel {
    constructor() { 
        this.interval = setInterval(nextDot, 5000)
    }

    interval = ''
    
    stop = function () {
        clearInterval(this.interval)
    }
}

let carr = new Carrossel();

let prevSlide = () => {
    carr.stop();

    for (let i = 0; i < dot.length; i++) {
        if (dot[i].classList.contains('selected')) {  
            
            removeCheck();
            
            if (i - 1 < 0) {
                dot[dot.length-1].classList.add('selected')
                checkSelectedDot();
                break;
            }

            dot[i - 1].classList.add('selected');
            checkSelectedDot();
            break;
        }
    }

    carr = new Carrossel();
}

let nextSlide = () => {
    carr.stop();

    for (let i = 0; i < dot.length; i++) {
        if (dot[i].classList.contains('selected')) {
            removeCheck();
            if (i + 1 >= dot.length) {
                dot[0].classList.add('selected')
                checkSelectedDot();
                break;
            }
            dot[i + 1].classList.add('selected');
            checkSelectedDot();
            break;
        }
    }

    carr = new Carrossel();
}

for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener('click', () => {
        removeCheck();
        dot[i].classList.add('selected');
        checkSelectedDot();
    })
}

let removeCheck = () => {
    for (let i = 0; i < dot.length; i++) {
        if (dot[i].classList.contains('selected')) {
            dot[i].classList.remove('selected');
        }
    }
}

let checkSelectedDot = () => {
    for (let i = 0; i < dot.length; i++) {
        if (dot[i].classList.contains('selected')) {
            switch (i) {
                case 0:
                    content.classList.add('one')
                    content.classList.remove('two')
                    content.classList.remove('three')
                    content.classList.remove('four')
                    content.classList.remove('five')
                    content.classList.remove('six')
                    content.classList.remove('seven')
                    break;
                case 1:
                    content.classList.add('two')
                    content.classList.remove('one')
                    content.classList.remove('three')
                    content.classList.remove('four')
                    content.classList.remove('five')
                    content.classList.remove('six')
                    content.classList.remove('seven')
                    break;
                case 2:
                    content.classList.add('three')
                    content.classList.remove('one')
                    content.classList.remove('tow')
                    content.classList.remove('four')
                    content.classList.remove('five')
                    content.classList.remove('six')
                    content.classList.remove('seven')
                    break;
                case 3:
                    content.classList.add('four')
                    content.classList.remove('one')
                    content.classList.remove('two')
                    content.classList.remove('three')
                    content.classList.remove('five')
                    content.classList.remove('six')
                    content.classList.remove('seven')
                    break;
                case 4:
                    content.classList.add('five')
                    content.classList.remove('one')
                    content.classList.remove('two')
                    content.classList.remove('three')
                    content.classList.remove('four')
                    content.classList.remove('six')
                    content.classList.remove('seven')
                    break;
                case 5:
                    content.classList.add('six')
                    content.classList.remove('one')
                    content.classList.remove('two')
                    content.classList.remove('three')
                    content.classList.remove('four')
                    content.classList.remove('five')
                    content.classList.remove('seven')
                break;
                case 6:
                    content.classList.add('seven')
                    content.classList.remove('one')
                    content.classList.remove('two')
                    content.classList.remove('three')
                    content.classList.remove('four')
                    content.classList.remove('five')
                    content.classList.remove('six')
                    break;
                default:
                    content.classList.add('one')
                    content.classList.remove('two')
                    content.classList.remove('three')
                    content.classList.remove('four')
                    content.classList.remove('five')
                    content.classList.remove('six')
                    content.classList.remove('seven')
                    break;
            }
        }
    }
}