
const noticia_title = document.getElementById('noticia_title');
const noticia_text = document.getElementById('noticia_text');
const noticia_link = document.getElementById('noticia_link');

let noticias = [];
let noticiaAtual = 1;

fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?busca=empresarial')
    .then((res) => {
        return res.json()
    }).then((res) => {
        let noticia = {
            data: "",
            link: "",
            titulo: "",
            descricao: ""
        }

        for (let i = 0; i < 5; i++) {
            noticia.data = res.items[noticiaAtual].data_publicacao
            noticia.link = res.items[noticiaAtual].link
            noticia.titulo = res.items[noticiaAtual].titulo
            noticia.descricao = res.items[noticiaAtual].introducao
            noticias.push(noticia);
        }

        noticia_title.innerText = noticia.titulo;
        noticia_text.innerText = noticia.descricao;
        noticia_link.href = noticia.link;
        console.log(noticias)
    })

