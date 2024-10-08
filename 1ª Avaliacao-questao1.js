function calculadora(num1, num2, operacao) {
    if (operacao === 'soma') {
        return num1 + num2;
    } else if (operacao === 'subtracao') {
        return num1 - num2;
    } else if (operacao === 'multiplicacao') {
        return num1 * num2;
    } else if (operacao === 'divisao') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Erro: Divisão por zero não é permitida.";
        }
    } else {
        return "Operação inválida.";
    }
}

console.log(calculadora(5, 5, 'soma')); 
console.log(calculadora(10, 6, 'subtracao')); 
console.log(calculadora(4, 7, 'multiplicacao')); 
console.log(calculadora(8, 4, 'divisao')); 
console.log(calculadora(5, 0, 'divisao')); 
console.log(calculadora(3, 5, 'potencia')); 
