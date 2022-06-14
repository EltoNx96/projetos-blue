const prompt = require("prompt-sync")();
console.clear();

let pontos1 = 0;
let pontos2 = 0;
let repete = "sim";
let rodadas;

for (let i = 0; i != rodadas; ) {
  if (repete == "sim") {
    i = 0;
    console.log("Quantas rodadas deseja jogar? ");
    rodadas = +prompt();
    while (i != rodadas) {
      const computador = Math.floor(3 * Math.random() + 1);
      console.log("Escolha somente um número de 1 a 3: ");
      let jogador = +prompt("1-PEDRA | 2-PAPEL | 3-TESOURA: ");

      // exibindo a escolha do jogador
      if (jogador == 1) {
        console.log("Você escolheu PEDRA!");
      } else if (jogador == 2) {
        console.log("Você escolheu PAPEL!");
      } else if (jogador == 3) {
        console.log("Você escolheu TESOURA!");
      }

      // exibindo o número gerado aleatoriamente para o computador
      if (computador == 1) {
        console.log("O computador escolheu PEDRA!");
      } else if (computador == 2) {
        console.log("O computador escolheu PAPEL!");
      } else if (computador == 3) {
        console.log("O computador escolheu TESOURA!");
      }

      if (jogador == 1 && computador == 3) {
        console.log("Você ganhou a rodada!");
        pontos1++, i++;
      } else if (jogador == 1 && computador == 2) {
        console.log("O computador ganhou a rodada!");
        pontos2++, i++;
      } else if (jogador == 1 && computador == 1) {
        console.log("A rodada deu empate!");
      } else if (jogador == 2 && computador == 1) {
        console.log("Você ganhou a rodada!");
        pontos1++, i++;
      } else if (jogador == 2 && computador == 3) {
        console.log("O computador ganhou a rodada!");
        pontos2++, i++;
      } else if (jogador == 2 && computador == 2) {
        console.log("A rodada deu empate!");
      } else if (jogador == 3 && computador == 2) {
        console.log("Você ganhou a rodada!");
        pontos1++, i++;
      } else if (jogador == 3 && computador == 1) {
        console.log("O computador ganhou a rodada!");
        pontos2++, i++;
      } else if (jogador == 3 && computador == 3) {
        console.log("A rodada deu empate!");
        i++;
      }
      console.log("Seus pontos = ", pontos1);
      console.log();
      console.log("Pontos do computador = ", pontos2);
    }

    if (pontos1 > pontos2) {
      console.log(
        "Você venceu o jogo com",
        pontos1,
        "pontos! E se sagrou campeão."
      );
    } else if (pontos2 > pontos1) {
      console.log(
        "O computador venceu o jogo com",
        pontos2,
        "pontos! E se sagrou campeão."
      );
    } else {
      console.log("Deu empate!");
    }
    console.log("FIM DE JOGO! GOSTARIA DE JOGAR NOVAMENTE? ");
    repete = prompt();
    if (repete == "sim") {
      (i = 0), (pontos1 = 0), (pontos2 = 0);
    } else {
      console.log("Ok, até a próxima.");

      console.log();
    }
  }
}
