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

const url = 'https://aitivo-api.onrender.com/noticias'; // URL para o back-end

const getNoticia = async () => {
    await fetch(url)
        .then((res) => res.json())
        .then((res) => {
            noticias = res;  // As notícias vêm do back-end
            for (let i = 0; i < 5; i++) {
                noticia = new Noticia(noticias[i].link, noticias[i].titulo, noticias[i].descricao, noticias[i].img);
                divs.push(`
                    <div class="text_content flex_column">
                        <h3 class="title" id="noticia_title">${noticia.titulo}</h3>
                        <p class="text" id="noticia_text">${noticia.descricao}</p>
                        <a href="${noticia.link}" target="_blank" id="noticia_link"><button class="btn_primary">Saiba mais</button></a>
                    </div>
                `);
            }
        })
        .then(() => {
            for (let i = 0; i < 5; i++) {
                let div = document.createElement('div');
                div.innerHTML = divs[i];
                news.appendChild(div);
            }
        })
        .catch((err) => console.error('Erro ao carregar as notícias:', err));
};

getNoticia();
