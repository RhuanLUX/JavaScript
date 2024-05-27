import { produtos } from "./data.js";

const divProdutos = document.getElementById('div-produtos');
const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');

for (const element of produtos) {
    divProdutos.innerHTML += `
        <div class="produto">
            <img src="${element.imagem}" alt="not-found" class="img-produto" />
            <h4>${element.nome}</h4>
            <p>Price: ${element.preco}€ gram</p>
            <p>THC: ${element.thc} | Type: ${element.tipo}</p>
            <button>Show more</button>
        </div>
    `
};

btnSearch.addEventListener('click', function () {
    const inputeValue = inputSearch.value;


    // Abaixo eu escrevo a função que vai buscar na minha base de dados
    // o valor
});