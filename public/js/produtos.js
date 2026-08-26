async function carregarLivros() {

    try {

        const resposta = await fetch("/api/livros");
        const categorias = await resposta.json();

        categorias.forEach(categoria => {

            const container = document.querySelector("." + categoria.classeContainer);

            container.innerHTML = "";

            categoria.itens.forEach(item => {

                const card = document.createElement("div");
                card.className = categoria.classeCard;

                card.innerHTML = `
                    <img src="${item.imagem}" alt="${item.alt}" class="${categoria.classeImagem}">
                    <p class="${categoria.classeDescricao}">
                        ${item.descricao}
                    </p>
                `;

                container.appendChild(card);

            });

        });

    } catch (erro) {

        console.error("Erro ao carregar os livros:", erro);

    }

}

carregarLivros();