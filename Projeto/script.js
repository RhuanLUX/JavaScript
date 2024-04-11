import { produtos } from "./data.js";

// Criar uma função que retorne todos os produtos
function getAllProducts() {
    console.log ("Nossa Erva",produtos[0].nome, "Custa",produtos[0].preco)
    console.log ("Nossa Erva",produtos[1].nome, "Custa",produtos[1].preco)
    console.log ("Nossa Erva",produtos[2].nome, "Custa",produtos[2].preco)
    console.log ("Nossa Erva",produtos[3].nome, "Custa",produtos[3].preco)
    console.log ("Nossa Erva",produtos[4].nome, "Custa",produtos[4].preco)

    console.log ()
// Abaixo - Estrutura de Repição para não ter que escrever o código para retornar todos os dados manualmente. (Comando 'Forof')
    for (const element of produtos) { 
        console.log ("Nossa Erva", element.nome, "Custa", element.preco, "e tem o THC de", element.thc,'%')
    }

}
getAllProducts()
// Criar uma função que retorne um produto a partir do ID
function getProductById(id) {
    
}

// Criar uma função que retorne um produto a partir do Nome
function getProductByName(nome) {
    
}

// Criar filtro de produto por tipo do produto
function getProductByTipo(tipo) {
    
}

// Criar um filtro por preço
function filteredProductByPrice() {
    
}

// Criar uma função de comparação, um produto ao lado do outro produto
function compareProduct(params) {
    
}

// Criar um funcao para THC
function getProductByTHC(THC){

}

// Criar um filtro Promoção
function getProductBypromocao(THC){

}
