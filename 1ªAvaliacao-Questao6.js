function cadastrarPessoas() {
    let pessoas = [];

    for (let i = 1; i <= 5; i++) {
        let nome = prompt(`Digite o nome da pessoa ${i}:`);
        let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
        
        pessoas.push({ nome: nome, idade: idade });
    }

    let maioresDeIdade = pessoas.filter(pessoa => pessoa.idade > 18);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "<h3>Pessoas com mais de 18 anos:</h3>";

    maioresDeIdade.forEach(pessoa => {
        resultado.innerHTML += `<p>${pessoa.nome}</p>`;
    });

    if (maioresDeIdade.length === 0) {
        resultado.innerHTML += "<p>Ninguém tem mais de 18 anos.</p>";
    }
}


