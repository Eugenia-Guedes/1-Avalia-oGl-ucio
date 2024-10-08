const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tarefas = [];

function adicionarTarefas(tarefa) {
    tarefas.push(tarefa);
}

function exibirTarefas() {
    console.log("\nTarefas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
    });
}

function pedirTarefas(count = 5) {
    if (count > 0) {
        rl.question(`Digite a tarefa ${6 - count}: `, function (tarefa) {
            adicionarTarefas(tarefa);
            pedirTarefas(count - 1);
        });
    } else {
        exibirTarefas();
        rl.question("\nHá tarefa concluída? (Digite o número): ", function (numero) {
            let index = parseInt(numero) - 1;
            if (index >= 0 && index < tarefas.length) {
                console.log(`\nRemovendo a tarefa: "${tarefas[index]}"`);
                tarefas.splice(index, 1);
                exibirTarefas();
            } else {
                console.log("\nNúmero inválido.");
            }
            rl.close();
        });
    }
}

pedirTarefas();
