const readline = require('readline-sync');//importa o readline-sync para ler algo digitado
//Alteração de teste
//Gera numero aleatório
const aleatorio = parseInt(Math.random()* 10)+1;

const dica = (entrada)=>{
    if (entrada > aleatorio){
        return " O numero digitado é maior!";

    }
    if (entrada < aleatorio){
        return "O numero digitado é menor";

    }
}

console.log("Bem Vindo ao jogo de Advinhação!!");

while (true){
    const gerado = readline.question("Digite um número");
    if (gerado ==aleatorio){
        console.log("Parabens você advinhou o numero");
        break;
    }
    console.log(dica(gerado));
}