const noticia_title = document.getElementById('noticia_title');
const noticia_text = document.getElementById('noticia_text');
const noticia_link = document.getElementById('noticia_link');
const news = document.querySelector('#news .news_');

class Noticia {
    constructor(link, titulo, descricao, img) {
        this.link = link;
        this.titulo = titulo;
        this.descricao = descricao;
        this.img = img;
    }
}

let noticia;
let noticias = [];
let divs = [];

let url = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=contábil&apiKey=55328aac8b954a94b71a265545300c65';

const getNoticia = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Origin': 'https://bywillsilva.github.io/aditivo', // Especifica o domínio de origem
            'X-Requested-With': 'XMLHttpRequest'  // Cabeçalho comum em requisições AJAX
        }
    })
        .then((res) => {
            return res.json()
        }).then((res) => {
            const news = res.articles;
            for (let i = 0; i < 5; i++) {
                noticia = new Noticia(news[i].url, news[i].title, news[i].description, news[i].urlToImage)
                noticias.push(noticia)
            }
            for (let i = 0; i < 5; i++) {
                noticia = ` <div class="text_content flex_column" style="width: 500px"><!--text_content-->
                                <h3 class="title" id="noticia_title">${noticias[i].titulo}</h3>
                                <p class="text" id="noticia_text">${noticias[i].descricao}</p>
                                <a href="${noticias[i].link}" target="_blank" id="noticia_link"><button class="btn_primary">Saiba mais</button></a>
                            </div><!--text_content-->` 
                divs.push(noticia);
            }
        }).then((res) => {
            for (let i = 0; i < 5; i++) {
                let div = document.createElement('div');
                div.innerHTML = divs[i]
                news.appendChild(div);
            }

            news_img.src = noticias[0].img;
        })
}

getNoticia();
