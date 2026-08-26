const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Permite trabalhar com JSON
app.use(express.json());

// Servir os arquivos da pasta public
app.use(express.static(path.join(__dirname, "public")));

// ==========================
// API DOS LIVROS
// ==========================
app.get("/api/livros", (req, res) => {

    const livros = [

        {
            categoria: "Tipos de Livros",
            classeContainer: "container-tipos-livros",
            classeCard: "card-tipo-livro",
            classeImagem: "livro-imagem",
            classeDescricao: "descricao-card-livro",
            itens: [

                {
                    imagem: "img/livros-variedades.png",
                    alt: "Variedades",
                    descricao: "Livros usados, bem conservados <br> e cheios de histórias para novos leitores."
                },

                {
                    imagem: "img/livros-coleção.png",
                    alt: "Coleções",
                    descricao: "Coleções completas e organizadas <br> para todos os gostos e estilos."
                },

                {
                    imagem: "img/Clssico.png",
                    alt: "Clássicos",
                    descricao: "Clássicos atemporais da literatura <br> para uma leitura rica e envolvente."
                }

            ]
        },

        {
            categoria: "Gibis",
            classeContainer: "container-gibis",
            classeCard: "card-gibi",
            classeImagem: "gibi-imagem",
            classeDescricao: "descricao-card-gibi",
            itens: [

                {
                    imagem: "img/gibi-variedade.png",
                    alt: "Variedade",
                    descricao: "Grande variedade de gibis com <br> histórias para todos os gostos."
                },

                {
                    imagem: "img/gibi-aventura.png",
                    alt: "Aventura",
                    descricao: "Gibis de aventura com tramas <br> cheias de ação e emoção."
                },

                {
                    imagem: "img/gibi-educativo.png",
                    alt: "Educativo",
                    descricao: "Gibis educativos que unem <br> aprendizado e diversão."
                }

            ]
        },

        {
            categoria: "Livros Clássicos",
            classeContainer: "container-classicos",
            classeCard: "card-classico",
            classeImagem: "classico-imagem",
            classeDescricao: "descricao-card-classico",
            itens: [

                {
                    imagem: "img/A arte da Guerra - Página 3.png",
                    alt: "A Arte da Guerra",
                    descricao: "Obras clássicas que marcaram <br> gerações de leitores."
                },

                {
                    imagem: "img/Classico - bras cubas.png",
                    alt: "Brás Cubas",
                    descricao: "Grandes títulos da literatura <br> brasileira em excelente estado."
                },

                {
                    imagem: "img/classico-morro.png",
                    alt: "O Morro dos Ventos Uivantes",
                    descricao: "Livros atemporais que continuam <br> encantando leitores."
                }

            ]
        }

    ];

    res.json(livros);

});

// Servir a página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});