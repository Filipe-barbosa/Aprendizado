const readline = require('readline-sync');//importa o readline-sync para ler algo digitado
//Alteração de teste
//Gera numero aleatório
const aleatorio = parseInt(Math.random()* 10)+1;


function verificacontador(){

    if (count == 5){
        console.log("Suas tentativas acabaram");
    }
    
};

const dica = (entrada)=>{
    if (entrada > aleatorio){
        return " O numero digitado é maior!";

    }
    if (entrada < aleatorio){
        return "O numero digitado é menor";

    }
   
}

console.log("Bem Vindo ao jogo de Advinhação!!");
console.log("você terá 5 tentativas para advinhar o numero, Boa sorte!!");
let count = 0;

while (count<5){
    const gerado = readline.question("Digite um número");
    if (gerado ==aleatorio){
        console.log("Parabens você advinhou o numero");
        break;
    }
    count++;
 console.log(dica(gerado));

}

verificacontador();