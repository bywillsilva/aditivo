const content = document.querySelector('.content_bg .slides');
const slides = document.querySelectorAll('.content_bg .slides .slide');
const slideCount = slides.length;

// Clonando o primeiro e o último slide
const firstSlideClone = slides[0].cloneNode(true);
const lastSlideClone = slides[slideCount - 1].cloneNode(true);
content.appendChild(firstSlideClone);
content.insertBefore(lastSlideClone, slides[0]);

let i = 1; // Começar com o primeiro slide visível
const totalSlides = slideCount + 2; // Incluindo clones

// Inicialização da posição
content.style.transform = `translateX(${-100 / totalSlides * i}%)`;
content.style.transition = 'transform 2s ease'; // Tempo da transição ajustado

setInterval(() => {
    i++;

    // Se chegar ao clone do último slide
    if (i >= totalSlides) {
        // Reseta a posição rapidamente
        setTimeout(() => {
            i = 1; // Volta para o segundo slide (primeiro slide real)
            content.style.transition = 'none'; // Desativa a transição
            content.style.transform = `translateX(${-100 / totalSlides * i}%)`; // Voltar para o segundo slide
        }, 500); // Atraso para permitir que a transição finalize
    } else {
        // Mover o carrossel normalmente
        content.style.transition = 'transform 2s ease'; // Tempo da transição ajustado
        content.style.transform = `translateX(${-100 / totalSlides * i}%)`;
    }
}, 5000);
