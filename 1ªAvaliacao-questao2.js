const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificaPalindromo(palavra) {
    let tamanho = palavra.length;
    
    for (let i = 0; i < Math.floor(tamanho / 2); i++) {
        if (palavra[i] !== palavra[tamanho - 1 - i]) {
            return "A palavra não é um palíndromo.";
        }
    }
    
    return "A palavra é um palíndromo.";
}

rl.question("Digite uma palavra para verificar se é um palíndromo: ", function(palavra) {
    
    palavra = palavra.toLowerCase();
    
    console.log(verificaPalindromo(palavra));
    
    rl.close();
});
