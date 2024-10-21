const noticia_title = document.getElementById('noticia_title');
const noticia_text = document.getElementById('noticia_text');
const noticia_link = document.getElementById('noticia_link');

class Noticia {
    constructor(data, link, titulo, descricao) {
        this.data = data;
        this.link = link;
        this.titulo = titulo;
        this.descricao = descricao;
    }
}

let noticia;
let noticias = [];

let url = 'https://newsapi.org/v2/everything?' +
          'q=empresarial&' +
        //   'from=2024-10-05&' +
          'sortBy=popularity&' +
          'apiKey=55328aac8b954a94b71a265545300c65';

const getNoticia = () => {
    fetch(url)
    .then((res) => {
        return res.json()
    }).then((res) => {
        const news = res.items;
        console.log(res)
    })
}

getNoticia();
