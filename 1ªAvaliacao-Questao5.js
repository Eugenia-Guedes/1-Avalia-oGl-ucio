function gerarTabelaMultiplicacao(numero) {
    
    if (numero <= 0) {
        console.log("Insira um número positivo.");
        return; 
    }

    console.log(`Tabela de multiplicação do número ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

gerarTabelaMultiplicacao(4);

gerarTabelaMultiplicacao(3);
