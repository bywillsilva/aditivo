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

            // Verificar se o array de notícias tem dados
            if (noticias.length === 0) {
                news.innerHTML = '<p>Sem notícias disponíveis no momento.</p>';
                return; // Não continuar com a renderização
            }
            
            divs = []
            for (let i = 0; i < Math.min(noticias.length, 5); i++) {
                noticia = new Noticia(
                    noticias[i].link || '',
                    noticias[i].titulo || 'Título não disponível',
                    noticias[i].descricao || 'Descrição não disponível',
                    noticias[i].img || 'Imagem não disponível'
                );
                
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
