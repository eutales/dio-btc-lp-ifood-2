//Esse desafio de código foi construído usando VSCODE após instalar o node.js.
// Antes de mais nada, execute os comandos a seguir no console;
// npm i promp-sync     Instalar a biblioteca que permite realizar leitura de dados via console.

//Criando uma constante chamada leia para efetuar leitura dos dados informados via teclado.
const leia = require("prompt-sync")();

//Declarando variáveis

let qtdeVitorias, qtdeDerrotas, ranking;
let sair = "n";

// Criando a função para calcular o saldo
// A função calculaSaldo recebe dois parâmetros sendo vitorias e derrotas
// após o cálculo, ela vai retornar o saldo do jogador, essa função pode virar uma soma simples
// ela está aqui apenas para ser mais um exemplo de função e caso no futuro, a regra de cálculo do saldo
// se alterar, basta alterar essa função.
function setSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Criando a função que informa o ranking do jogador.
// Ela recebe apenas o saldo do jogador como parâmetro
function checkRanking(saldo) {
  // Ao invés de fazer um IF aninhado,
  // vou colocar várias instruções condicionais para exemplificar os operadores lógicos
  if (saldo < 11) {
    return "Ferro";
  }
  if (saldo >= 11 && saldo <= 20) {
    return "Bronze";
  }
  if (saldo >= 21 && saldo <= 50) {
    return "Prata";
  }
  if (saldo >= 51 && saldo <= 80) {
    return "Ouro";
  }
  if (saldo >= 81 && saldo <= 90) {
    return "Diamante";
  }
  if (saldo >= 91 && saldo <= 100) {
    return "Lendário";
  }
  if (saldo >= 101) {
    return "Imortal";
  }
}

// Início da execução principal do programa. 
// Lembre-se que apenas executamos a funções quando as chamamos.
// Estrutura de repetição que verifica se o usuário não está saindo do programa.
while (sair !== "s") {
  if (sair == "s") {
    break;
  } else {
    // Leitura dos dados, precisamos converter o texto lido pela constante leia para inteiro. 
    console.log("Digite a quantidade de vitórias:");
    qtdeVitorias = parseInt(leia());
    console.log("Digite a quantidade de derrotas:");
    qtdeDerrotas = parseInt(leia());
    console.clear();

    // É possível passar uma função como parâmetro de outra!
    // Ao chamar checkRanking() é passado a função setSaldo() que é executada primeiro retornando o saldo.
    console.log(
      "O Herói tem de saldo de " +
        setSaldo(qtdeVitorias, qtdeDerrotas) +
        " está no nível de " +
        checkRanking(setSaldo(qtdeVitorias, qtdeDerrotas))
    );

    console.log("Tales: Obrigado por testar o meu código =D!");
    console.log("Deseja sair? (s/n)");
    sair = leia();
    console.clear();
  }
}
