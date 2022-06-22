console.clear();
const prompt = require("prompt-sync")();
/*
Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array com 3 arrays de 3 elementos cada dentro). 
O programa deve pedir as coordenadas (linha e coluna) alternadamente para 2 jogadores e marcar X ou O em cada caso. Caso um jogador 
vença, ele deve perguntar se desejam jogar mais uma vez, e registrar quem venceu aquela rodada, se os jogadores desejarem parar, 
o programa deve mostrar quem ganhou mais rodadas e quem é o grande vencedor.
*/
console.log("Bem vindo ao jogo da velha, vamos começar.");
let ticTacToe = [[], [], []];
ticTacToe[2][2] = undefined;
let Layout = "";
let item;
let player1 = 0;
let player2 = 0;
let repete = "sim";

function updateLayout() {
  Layout = `${displayItem(ticTacToe[0][0])} | ${displayItem(
    ticTacToe[0][1]
  )} | ${displayItem(ticTacToe[0][2])}
---------
${displayItem(ticTacToe[1][0])} | ${displayItem(
    ticTacToe[1][1]
  )} | ${displayItem(ticTacToe[1][2])}
---------
${displayItem(ticTacToe[2][0])} | ${displayItem(
    ticTacToe[2][1]
  )} | ${displayItem(ticTacToe[2][2])}`;
}
function displayItem(item) {
  return item === undefined ? " " : item;
}
displayItem();
updateLayout();
console.log(Layout);

function game() {
  for (let i = 1; i > 0; ) {
    console.log("Jogador1, por favor selecione o símbolo 'X' ou 'O'");
    jogador1 = prompt();
    if (jogador1 == "x") {
      jogador2 = "o";
    } else if (jogador1 == "o") {
      jogador2 = "x";
    }
    console.log("Quantas rodadas? ");
    i = +prompt();
    let jogadas = 0;
    if (repete.toLowerCase() == "sim") {
      while (i > 0) {
        console.log(i);
        jogadas++;
        console.log(`Selecione a linha e a coluna, sendo de 1 a 3 para colunas e A a C para linhas e X ou O
      ex: 1a x`);
        selecao = prompt();
        if (selecao.toLowerCase() == "1a x" && ticTacToe[0][0] == undefined) {
          (ticTacToe[0][0] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "1a o" &&
          ticTacToe[0][0] == undefined
        ) {
          (ticTacToe[0][0] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "1b x" &&
          ticTacToe[0][1] == undefined
        ) {
          (ticTacToe[0][1] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "1b o" &&
          ticTacToe[0][1] == undefined
        ) {
          (ticTacToe[0][1] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "1c x" &&
          ticTacToe[0][2] == undefined
        ) {
          (ticTacToe[0][2] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "1c o" &&
          ticTacToe[0][2] == undefined
        ) {
          (ticTacToe[0][2] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "2a x" &&
          ticTacToe[1][0] == undefined
        ) {
          (ticTacToe[1][0] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "2a o" &&
          ticTacToe[1][0] == undefined
        ) {
          (ticTacToe[1][0] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "2b x" &&
          ticTacToe[1][1] == undefined
        ) {
          (ticTacToe[1][1] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "2b o" &&
          ticTacToe[1][1] == undefined
        ) {
          (ticTacToe[1][1] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "2c x" &&
          ticTacToe[1][2] == undefined
        ) {
          (ticTacToe[1][2] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "2c o" &&
          ticTacToe[1][2] == undefined
        ) {
          (ticTacToe[1][2] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "3a x" &&
          ticTacToe[2][0] == undefined
        ) {
          (ticTacToe[2][0] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "3a o" &&
          ticTacToe[2][0] == undefined
        ) {
          (ticTacToe[2][0] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "3b x" &&
          ticTacToe[2][1] == undefined
        ) {
          (ticTacToe[2][1] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "3b o" &&
          ticTacToe[2][1] == undefined
        ) {
          (ticTacToe[2][1] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "3c x" &&
          ticTacToe[2][2] == undefined
        ) {
          (ticTacToe[2][2] = "x"), displayItem();
          updateLayout();
          console.log(Layout);
        } else if (
          selecao.toLowerCase() == "3c o" &&
          ticTacToe[2][2] == undefined
        ) {
          (ticTacToe[2][2] = "o"), displayItem();
          updateLayout();
          console.log(Layout);
        } else {
          console.log("Opção invalida");
        }
        if (
          ticTacToe[0][0] == ticTacToe[0][1] &&
          ticTacToe[0][1] == ticTacToe[0][2] &&
          ticTacToe[0][0] != undefined
        ) {
          console.log(ticTacToe[0][0], "Ganhou!");
          if (ticTacToe[0][0] == "x") {
            if (jogador1 == "x") {
              player1++;
            } else if (jogador2 == "x") {
              player2++;
            }
            i--;
          } else if (ticTacToe[0][0] == "o") {
            if (jogador1 == "o") {
              player1++;
            } else if (jogador2 == "o") {
              player2++;
            }
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[1][0] == ticTacToe[1][1] &&
          ticTacToe[1][1] == ticTacToe[1][2] &&
          ticTacToe[1][0] != undefined
        ) {
          console.log(ticTacToe[1][0], "Ganhou!");
          if (ticTacToe[1][0] == "x") {
            if (jogador1 == "x") {
              player1++;
            } else if (jogador2 == "x") {
              player2++;
            }
            i--;
            console.log(ticTacToe[0]);
          } else if (ticTacToe[1][0] == "o") {
            if (jogador1 == "o") {
              player1++;
            } else if (jogador2 == "o") {
              player2++;
            }
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[2][0] == ticTacToe[2][1] &&
          ticTacToe[2][1] == ticTacToe[2][2] &&
          ticTacToe[2][0] != undefined
        ) {
          console.log(ticTacToe[2][0], "Ganhou!");
          if (ticTacToe[2][0] == "x") {
            if (jogador1 == "x") {
              player1++;
            } else if (jogador2 == "x") {
              player2++;
            }
            i--;
          } else if (ticTacToe[2][0] == "o") {
            if (jogador1 == "o") {
              player1++;
            } else if (jogador2 == "o") {
              player2++;
            }
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[0][0] == ticTacToe[1][0] &&
          ticTacToe[1][0] == ticTacToe[2][0] &&
          ticTacToe[0][0] != undefined
        ) {
          console.log(ticTacToe[0][0], "Ganhou!");
          if (ticTacToe[0][0] == "x") {
            if (jogador1 == "x") {
              player1++;
            } else if (jogador2 == "x") {
              player2++;
            }
            i--;
          } else if (ticTacToe[0][0] == "o") {
            if (jogador1 == "o") {
              player1++;
            } else if (jogador2 == "o") {
              player2++;
            }
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[0][1] == ticTacToe[1][1] &&
          ticTacToe[1][1] == ticTacToe[2][1] &&
          ticTacToe[0][1] != undefined
        ) {
          console.log(ticTacToe[0][1], "Ganhou!");
          if (ticTacToe[0][1] == "x") {
            if (jogador1 == "x") {
              player1++;
            } else if (jogador2 == "x") {
              player2++;
            }
            i--;
            console.log(ticTacToe[0]);
          } else if (ticTacToe[0][1] == "o") {
            if (jogador1 == "o") {
              player1++;
            } else if (jogador2 == "o") {
              player2++;
            }
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[0][2] == ticTacToe[1][2] &&
          ticTacToe[1][2] == ticTacToe[2][2] &&
          ticTacToe[0][2] != undefined
        ) {
          console.log(ticTacToe[0][2], "Ganhou!");
          if (ticTacToe[0][2] == "x") {
            if (jogador1 == "x") {
              player1++;
            } else if (jogador2 == "x") {
              player2++;
            }
            i--;
          } else if (ticTacToe[0][2] == "o") {
            if (jogador1 == "o") {
              player1++;
            } else if (jogador2 == "o") {
              player2++;
            }
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[2][0] == ticTacToe[1][1] &&
          ticTacToe[1][1] == ticTacToe[0][2] &&
          ticTacToe[2][0] != undefined
        ) {
          console.log(ticTacToe[2][0], "Ganhou!"), (i = 0);
          if (ticTacToe[2][0] == "x") {
            if (jogador1 == "x") {
              player1++;
            } else if (jogador2 == "x") {
              player2++;
            }
            i--;
          } else if (ticTacToe[2][0] == "o") {
            if (jogador1 == "o") {
              player1++;
            } else if (jogador2 == "o") {
              player2++;
            }
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador 1", player1, "Jogador 2", player2);
        } else if (
          ticTacToe[2][2] == ticTacToe[1][1] &&
          ticTacToe[1][1] == ticTacToe[0][0] &&
          ticTacToe[2][2] != undefined
        ) {
          console.log(ticTacToe[2][2], "Ganhou!");
          if (ticTacToe[2][2] == "x") {
            if (jogador1 == "x") {
              player1++;
            } else if (jogador2 == "x") {
              player2++;
            }
            i--;
          } else if (ticTacToe[2][2] == "o") {
            if (jogador1 == "o") {
              player1++;
            } else if (jogador2 == "o") {
              player2++;
            }
            i--;
          }
          ticTacToe = [[], [], []];
          jogadas = 0;
          console.log("Jogador1", player1, "Jogador2", player2);
        } else if (jogadas >= 9) {
          displayItem();
          updateLayout();
          console.log(Layout);
          console.log("Velha"), i--;
          ticTacToe = [[], [], []];
          jogadas = 0;
        }
      }
    }
    console.log("FIM! Gostaria de jogar novamente?");
    repete = prompt();
    if (repete.toLowerCase() == "sim") {
      (i = 1), (player1 = 0), (player1 = 0);
      console.log(i);
      jogador1;
      jogador2;
    } else {
      console.log("Ok, até a próxima.");
    }
  }
}
game();
displayItem();
updateLayout();
console.log();
