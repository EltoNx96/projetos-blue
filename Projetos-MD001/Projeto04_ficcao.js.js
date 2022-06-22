console.clear();
const prompt = require("prompt-sync")();

console.log(
  `Olá, seja bem vindo ao jogo de ficção interativa, este jogo simula o dia a dia de um trabalhador, de um nome para esse trabalhador que será seu personagem e faça suas escolhas e veja a trajetoria dele. `
);

console.log();

// Usando onjeto

let personagem = {
  nome: "",
  hr: 5,
  min: 0,

  //metodo

  passaTempo: function (hora, minuto) {
    this.hr += hora;
    this.min += minuto;
    if (this.min >= 60) {
      this.hr++;
      this.min -= 60;
    }
  },
};

personagem.nome = prompt("Qual vai ser o nome do personagem?");

console.log(`Bom dia ${personagem.nome}, são 05h da manhã você tem que ir ao trabalho.

O que seu personagem vai fazer ao acordar? 

1- Escovar os dentes +5 min
2- Tomar café +10 min
3- Tomar banho +15 min
4- Se trocar +10 min\n
`);

let escolha = prompt("\n");

while (escolha != 1 && escolha != 2 && escolha != 3 && escolha != 4) {
  console.log("Digite apenas números...");
  escolha = prompt("\n");
}
if (escolha == 1) {
  personagem.passaTempo(0, 5);
  console.log(`Você escolheu escovar os dentes.`);
} else if (escolha == 2) {
  personagem.passaTempo(0, 10);
  console.log(`Você escolheu tomar café.`);
} else if (escolha == 3) {
  personagem.passaTempo(0, 15);
  console.log(`Você escolheu Tomar banho.`);
} else if (escolha == 4) {
  personagem.passaTempo(0, 10);
  console.log(`Você escolheu se trocar.`);
}
console.log(
  `Após escolher a opção ${escolha} são ${personagem.hr}h${personagem.min} min e agora precisamos pegar o ônibus que passa as 05h25 min, em direção ao terminal de ônibus.\n`
);

const pegarBus = ["cellular", "fone", "marmita", "chave"];
let resp;
let aleatorio;

console.log(`Você está descendo para pegar o ônibus e seu personagem esqueceu algo...

Você não ensqueceu nada? 
`);

resp = prompt("");

if (resp.toLowerCase() == "sim") {
  aleatorio = Math.floor(4 * Math.random() + 1);
  if (aleatorio == 1) {
    personagem.passaTempo(0, 5);
    aleatorio = pegarBus[0];
  } else if (aleatorio == 2) {
    personagem.passaTempo(0, 5);
    aleatorio = pegarBus[1];
  } else if (aleatorio == 3) {
    personagem.passaTempo(0, 5);
    aleatorio = pegarBus[2];
  } else if (aleatorio == 4) {
    personagem.passaTempo(0, 5);
    aleatorio = pegarBus[3];
  }
  console.log(`Você esqueceu a ${aleatorio} volte para buscar.`);
} else {
  console.log(`Ok, então vamos pegar o ônibus.`);
}

console.log(
  `Agora são ${personagem.hr}h${personagem.min}, lembre-se que o ônibus passa as 05h25 min, não se atrase.`
);
console.log();

//a partir daqui continuar com as opções do ônibus

console.log(
  `Ok, você pegou o ônibus no horário em direção ao terminal de ônibus, chegando lá precisamos verificar se o bilhete tem crédito para poder embarcar no trem.`
);

let bilhete;

console.log(`${personagem.nome}, o bilhete está com crédito?`);
bilhete = prompt();

if (bilhete.toLowerCase() == "sim") {
  personagem.passaTempo(0, 30);
  console.log(
    `Ok, siga em frente e passe na catraca. ${personagem.hr}h${personagem.min}`
  );
} else {
  personagem.passaTempo(0, 35);
  console.log(
    `Recarregue o bilhete em seguida passe a catraca. ${personagem.hr}h${personagem.min}`
  );
}

console.log(
  `Certo, pegamos o trem em direção a estação de metrô, lá precisaremos pegar um metrô, temos duas opções: Mertrô da linha 1 azul e Metrô da linha 4 amarela.`
);

let opcao;

console.log(`Qual opção você irá escolher?

1- Linha 1 Azul
2- Linha 4 Amarela
`);

opcao = prompt();
if (opcao == 1) {
  personagem.passaTempo(0, 30);
  console.log(
    `Ok ${personagem.nome}, você optou em ir pela linha 1 Azul, esse é o trajeto mais rápido chegaremos em 30 min.`
  );
} else if (opcao == 2) {
  personagem.passaTempo(0, 50);
  console.log(
    `Ok ${personagem.nome}, você optou em ir pela linha 4 Amarela, por esse trajeto teremos que fazer baldeações e demorará mais. 
    
    Como você optou em vir pela linha 4 Amarela, teremos que descer em outra estação e pegar um trem da linha 9 Esmeralda.
    
    Agora são ${personagem.hr}h${personagem.min} chegamos na estação da linha 9 Esmeralda, então vamos pegar o próximo trem que passar.`
  );

  let trem;
  console.log(`${personagem.nome} você já pegou o trem? `);
  trem = prompt();

  if (trem.toLowerCase() == "Sim") {
    personagem.passaTempo(0, 15);
    console.log(
      `Ok, em 15 minutos chegaremos no trabalho. ${personagem.hr}h${personagem.min}`
    );
  } else {
    personagem.passaTempo(0, 35);
    console.log(`Chegaremos atrasados e iremos receber uma advertência.`);
  }
}

console.log(`Chegamos no trabalho as ${personagem.hr}h${personagem.min}. 

Agora vamos comçar nossas atividades, mas antes precismaos abastecer a máquina.

A máquina tem uma capacidade de 40 litros, verifique no painel quantos litros ela tem no momento.
`);

let abasteceMaquina;
console.log(`${personagem.nome} quantos litros tem a máquina? `);

abasteceMaquina = +prompt();

let litros = 40 - abasteceMaquina;

console.log(`Falta ${litros} litros para completar o tanque da máquina, cada galão tem 10 litros. 

Coloque ${litros / 10} galão.\n`);

personagem.passaTempo(0, 15);

console.log(
  `Ok, máquina abastecida agora da pra trabalhar o dia todo já que o tanque esta cheio.
  
  Agora são ${personagem.hr}h${personagem.min} iremos parar para almoçar as 11:40 e retornaremos as 13h.`
);

console.log(
  `Trabalhamos por um certo tempo, vamos verificar se já está na hora do almoço.`
);

personagem.passaTempo(4, 50);

console.log(`Agora são ${personagem.hr}h${personagem.min}`);

let hr1;
let hr2;
console.log(`${personagem.nome} já é 11:40? `);
hr1 = prompt();

if (hr1.toLowerCase() == "sim") {
  console.log("Certo, vamos parar para almoçar.");
} else if (hr1.toLowerCase() == "nao") {
  console.log("Vamos trabalhar até da o horário de almoço.");
  while (hr1.toLowerCase() == "nao") {
    personagem.passaTempo(0, 10);
    console.log(`Agora são ${personagem.hr}h${personagem.min}`);
    console.log(`${personagem.nome} já são 11:40? `);
    hr1 = prompt();
    if (hr1.toLowerCase() == "sim") {
      console.log("Certo, vamos parar para almoçar.");
    }
  }
}

console.log();

console.log(`Após almoçar vamos descansar e voltar as 13h.
`);

personagem.passaTempo(1, 0);
console.log(`Agora são ${personagem.hr}h${personagem.min}`);

console.log(`${personagem.nome} já são 13h ou mais?`);

hr2 = prompt();

if (hr2.toLowerCase() == "sim") {
  console.log(`Vamos voltar ao trabalho.`);
} else if (hr2.toLowerCase() == "nao") {
  while (hr2.toLowerCase() == "nao") {
    personagem.passaTempo(0, 10);
    console.log(`Agora são ${personagem.hr}h${personagem.min}`);
    console.log(`${personagem.nome} já são 13h ou mais? `);
    hr2 = prompt();
  }
}

console.log(`HORA = ${personagem.hr}h${personagem.min}`);

console.log(
  `${personagem.nome} agora temos 3 serviços para fazer, você terá que escolher entre um deles, sendo que um é mais demorado que o outro,
  mas não se preocupe, se passarmos do nosso horario que é as 17h, iremos receber R$30 por hora.
  
  ESCOLHA ENTRE OS TRÊS SERVIÇOS:

  1- Cavar o poço + 2h
  2- Fazer o dreno + 3:40h
  3- Fazer a rampa + 4:30h

  DIGITE APENAS UM NÚMERO DE 1 A 3...
  `
);

let servico;
// let horaServico;

servico = prompt();

if (servico == 1) {
  console.log(`Certo, você escolheu cavar o poço, esse serviço demora em torno de 2hs.

  Agora são ${personagem.hr}h${personagem.min}`);

  console.log(
    `Após ter cavado o poço vamos verificar o horário que você terminou, para sabermos se passou do horário de saída e se terá direito à hora extra.`
  );

  personagem.passaTempo(2, 0);

  console.log(`HORA = ${personagem.hr}h${personagem.min}`);

  if (personagem.hr > 17) {
    console.log(
      `${personagem.nome} você passou das 17h terá direito a hora extra.`
    );
  } else {
    console.log(`${personagem.nome} você não passou das 17h.`);
  }
} else if (servico == 2) {
  console.log(
    `Certo, você escolheu fazer o dreno, esse serviço demora em torno de 3h30 min.
    
    Agora são ${personagem.hr}h${personagem.min}`
  );

  console.log(
    `Após ter feito o dreno vamos verificar o horário que você terminou, para sabermos se passou do horário de saída e se terá direito à hora extra.`
  );

  personagem.passaTempo(3, 40);

  console.log(`HORA = ${personagem.hr}h${personagem.min}`);
  if (personagem.hr > 17) {
    console.log(
      `${personagem.nome} você passou das 17h terá direito a hora extra.`
    );
  } else {
    console.log(`${personagem.nome} você não passou das 17h.`);
  }
} else if (servico == 3) {
  console.log(
    `Certo, você escolheu fazer a rampa, esse serviço é um pouco complicado iremos demorar em torno de 4h30 min.
    
    Agora são ${personagem.hr}h${personagem.min}`
  );

  console.log(
    `Após ter feito a rampa vamos verificar o horário que você terminou, para sabermos se passou do horário de saída e se terá direito à hora extra.`
  );

  personagem.passaTempo(4, 30);

  console.log(`HORA = ${personagem.hr}h${personagem.min}`);

  if (personagem.hr > 17) {
    console.log(
      `${personagem.nome} você passou das 17h terá direito a hora extra.`
    );
  } else {
    console.log(`${personagem.nome} você não passou das 17h.`);
  }
}

console.log(`Serviço finalizado.

Hora de voltar pra casa.`);

console.log();
