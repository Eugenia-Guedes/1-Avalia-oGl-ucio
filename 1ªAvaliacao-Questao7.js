const produtos = [
    { nome: 'Produto A', preco: 25.9, quantidade: 15 },
    { nome: 'Produto B', preco: 17.65, quantidade: 65 },
    { nome: 'Produto C', preco: 65.99, quantidade: 30 }
];

function calcularValorTotalEstoque(arrayProdutos) {
    let valorTotal = 0;

    for (let i = 0; i < arrayProdutos.length; i++) {
        let produto = arrayProdutos[i];
        let valorProduto = produto.preco * produto.quantidade;
        valorTotal += valorProduto;
    }

    return valorTotal;
}

const valorTotalEstoque = calcularValorTotalEstoque(produtos);
console.log(`O valor total do estoque é: R$ ${valorTotalEstoque.toFixed(2)}`);
