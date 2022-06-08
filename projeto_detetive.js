const prompt = require("prompt-sync")();
console.clear();

let nome = prompt("Nome de identificação: ");

console.log(`\nOlá ${nome}, por favor, responda as questões com sim ou não.\n`);

let resposta = 0;

let pergunta1 = prompt(`${nome}, você foi dormir cedo? `);
while (pergunta1.toLowerCase() != "sim" && pergunta1.toLowerCase() != "nao") {
  pergunta1 = prompt(`${nome}, você foi dormir cedo? `);
}
if (pergunta1.toLowerCase() == "sim") {
  resposta++;
}

let pergunta2 = prompt(`${nome}, você levantou de madrugada? `);
while (pergunta2.toLowerCase() != "sim" && pergunta2.toLowerCase() != "nao") {
  pergunta2 = prompt(`${nome}, você levantou de madrugada? `);
}
if (pergunta2.toLowerCase() == "sim") {
  resposta++;
}

let pergunta3 = prompt(`${nome}, você bebeu o leite de madrugada? `);
while (pergunta3.toLowerCase() != "sim" && pergunta3.toLowerCase() != "nao") {
  pergunta3 = prompt(`${nome}, você bebeu o leite de madrugada? `);
}
if (pergunta3.toLowerCase() == "sim") {
  resposta++;
}

let pergunta4 = prompt(`${nome}, você comeu um pedaço do bolo? `);
while (pergunta4.toLowerCase() != "sim" && pergunta4.toLowerCase() != "nao") {
  pergunta4 = prompt(`${nome}, você comeu um pedaço do bolo? `);
}
if (pergunta4.toLowerCase() == "sim") {
  resposta++;
}

let pergunta5 = prompt(`${nome}, você que comeu o bolo? `);
while (pergunta5.toLowerCase() != "sim" && pergunta5.toLowerCase() != "nao") {
  pergunta5 = prompt(`${nome}, você que comeu o bolo? `);
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

if (resposta <= 2) {
  console.log("Você é inocente.");
}
if (resposta == 3) {
  console.log("Você é um suspeito.");
}
if (resposta >= 4) {
  console.log("Você é culpado.");
}

console.log();
