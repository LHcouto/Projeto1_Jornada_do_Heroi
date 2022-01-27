var prompt = require("prompt-sync")();
let resp_s = 0;

console.clear();
console.log(`Era uma vez um guerreiro veterano chamado Krados, que após uma vida inteira de batalhas vive tranquilamente em sua fazenda, longe de tudo e todos. Um certo dia ao entardecer o céu se enche de nuvens escuras, trovões e ventos fortes, e um estrondo muito forte vindo do Reino de Calradia. Então Krados decide ir até la. Mas antes: 
`);
console.log(`Krados vai até seu bau e pega sua fiel espada Dragonbane: `);

pergunta = prompt(`sim ou nao? `);
console.clear();

do {
  if (pergunta !== "nao" && pergunta !== "sim") {
    pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
    console.clear();
  }
} while (pergunta !== "nao" && pergunta !== "sim");

if (pergunta === "sim") {
  resp_s++;
}

console.log(`Krados veste sua antiga armadura de batalha: `);
pergunta = prompt(`sim ou nao? `);
console.clear();

do {
  if (pergunta !== "nao" && pergunta !== "sim") {
    pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
    console.clear();
  }
} while (pergunta !== "nao" && pergunta !== "sim");

if (pergunta === "sim") {
  resp_s++;
}

console.log(`Então Krados parte em direção ao reino, no caminho se depara com um mercador de cavalos:
`);

console.log(`Krados compra um cavalo: `);

pergunta = prompt(`sim ou nao? `);
console.clear();

do {
  if (pergunta !== "nao" && pergunta !== "sim") {
    pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
    console.clear();
  }
} while (pergunta !== "nao" && pergunta !== "sim");

if (pergunta === "sim") {
  resp_s++;
}

console.log(`e continua sua jornada.
`);

console.log(`Chegando la descobre que estava tudo um caos, pois um terrivel Necromante chamado Mannimarco havia aberto um portal do mundo dos mortos. O local estava cheio de corpos dos guardas da Cidade, então krados olha para um deles.
`);

console.log(`E em seu leito de morte o soldado diz: Corra ele está no palacio, salve  a princesa! e então morre.
`);

console.log(`Krados pega o escudo do soldado caido?: `);

pergunta = prompt(`sim ou nao: `);
console.clear();

do {
  if (pergunta !== "nao" && pergunta !== "sim") {
    pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
    console.clear();
  }
} while (pergunta !== "nao" && pergunta !== "sim");

if (pergunta === "sim") {
  resp_s++;
}

console.log(`Então Krados ha caminho do castelo, enquanto luta contra um exercito de mortos vivos encontra um aldeão embaixo de escombros, de uma casa destruida.
`);

console.log(`Krados ajuda o aldeão(sim) ou (nao)
`);
pergunta = prompt(`sim ou nao: `);
console.clear();

do {
  if (pergunta !== "nao" && pergunta !== "sim") {
    pergunta = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
    console.clear();
  }
} while (pergunta !== "nao" && pergunta !== "sim");

if (pergunta === "sim") {
  resp_s++;
}

console.log(`Após isso ele chega até o castelo, onde a princesa é feita de refem, apos um longo combate temos o desfecho:
`);

console.clear();

if (resp_s == 5) {
  console.log(`Voce Derrota mannimarco , salva a princesa, os aldeoes e é aclamado como um Heroi para o resto de sua vida.
        . completou ${resp_s} desafios.`);
} else if (resp_s == 4) {
  console.log(
    `Voce Derrota manimmarco salva a princesa,  porem, muitos aldeoes morrem. completou ${resp_s} desafios.`
  );
} else if (resp_s == 3) {
  console.log(
    `Voce consegue salvar a princesa e fugir com ela, mas Manimmarco continua vivo, todos os outros aldeoes morrem. completou ${resp_s} desafios.`
  );
} else if (resp_s == 2 || resp_s == 1) {
  console.log(`Voce é derrotado por Manimmarco mas consegue fugir a beira da morte, deixando todos os outros morrerem.
        . completou ${resp_s} desafios.`);
} else if (resp_s == 0) {
  console.log(`voce não estava preparado o suficiente e é morto com muita facilidade por Mannimarco, todos do Reino de Calradia são mortos inclusive a princesa.
        . completou ${resp_s} desafios.`);
}