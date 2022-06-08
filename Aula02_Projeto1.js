const prompt = require("prompt-sync")();

console.clear();

/*
 Projeto - A jornada do herói

 Neste programa são feitas 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final.
 As perguntas devem ser todas de Sim ou Não,
 e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada.

 Dia a dia de um Operador de Máquinas.

 Em seu dia de trabalho o operador antes de comecar suas tarefas precisa fazer pequenas inspeções para ver se está tudo certo com a máquina, primeiramente ele deve olhar o nível do Óleo do motor, em seguida olhar o nível do Óleo Hidráulico, depois o nível da água do radiador, engraxar as articulações da máquina e por último preencher o checklist de segurança diário e só depois de ter feito todas as inspeções que ele poderá comecar a trabalhar, caso contrário a máquina não será liberada para trabalho.
*/

let nome = prompt("Nome de identificação: ");

console.log(`\nOlá ${nome}, por favor, responda as questões com sim ou não.\n`);

let resposta = 0;

let pergunta1 = prompt(`${nome}, você olhou o nível de Óleo do motor? `);
while (pergunta1.toLowerCase() != "sim" && pergunta1.toLowerCase() != "nao") {
  pergunta1 = prompt(`${nome}, você olhou o nível de Óleo do motor? `);
}
if (pergunta1.toLowerCase() == "sim") {
  resposta++;
}

let pergunta2 = prompt(`${nome}, você olhou o nivel do Óleo Hidráulico? `);
while (pergunta2.toLowerCase() != "sim" && pergunta2.toLowerCase() != "nao") {
  pergunta2 = prompt(`${nome}, você olhou o nivel do Óleo Hidráulico `);
}
if (pergunta2.toLowerCase() == "sim") {
  resposta++;
}

let pergunta3 = prompt(`${nome}, você olhou o nivel da água do radiador? `);
while (pergunta3.toLowerCase() != "sim" && pergunta3.toLowerCase() != "nao") {
  pergunta3 = prompt(`${nome}, você olhou o nivel da água do radiador? `);
}
if (pergunta3.toLowerCase() == "sim") {
  resposta++;
}

let pergunta4 = prompt(`${nome}, você engraxou a máquina? `);
while (pergunta4.toLowerCase() != "sim" && pergunta4.toLowerCase() != "nao") {
  pergunta4 = prompt(`${nome}, você engraxou a máquina? `);
}
if (pergunta4.toLowerCase() == "sim") {
  resposta++;
}

let pergunta5 = prompt(`${nome}, você preencheu o CheckList de segurança? `);
while (pergunta5.toLowerCase() != "sim" && pergunta5.toLowerCase() != "nao") {
  pergunta5 = prompt(`${nome}, você preencheu o CheckList de segurança? `);
}
if (pergunta5.toLowerCase() == "sim") {
  resposta++;
}

console.log(
  `\nPergunta1: ${pergunta1}\nPrtgunta2: ${pergunta2}\nPergunta3: ${pergunta3}\nPergunta4: ${pergunta4}\nPergunta5: ${pergunta5}`
);

console.log("\n");
console.log(resposta);
console.log("\n");

if (resposta == 0) {
  console.log(
    "Você não fez nenhuma inspeção, volte e faça as inspeções necessárias."
  );
}
if (resposta == 1) {
  console.log("Você deixou de fazer 4 inspeção, volte e revise a máquina.");
}
if (resposta == 2) {
  console.log("Você deixou de fazer 3 inspeção, volte e revise a máquina.");
}
if (resposta == 3) {
  console.log("Você deixou de fazer 2 inspeção, volte e revise a máquina.");
}
if (resposta == 4) {
  console.log("Você deixou de fazer 1 inspeção, volte e revise a máquina.");
}
if (resposta == 5) {
  console.log(
    `Parabéns ${nome}, a máquina está inspecionada e liberada para trabalho. Tenha um bom dia!`
  );
}

console.log();
