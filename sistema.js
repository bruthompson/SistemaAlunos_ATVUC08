let nomeDeAluno = ["Nome1", "Nome2", "Nome3", "Nome4"]

for (let nome of nomeDeAluno) {
    console.log(`Esta pessoa se chama ${nome}`);
}

let numeroDeAlunos = 10;

let contador = 0;

// EXEMPLO WHILE 

while (contador <= numeroDeAlunos) {
    if (contador == 0) {
        console.log("O número atual é zero.")
    } else if (contador % 2 != 0) {
        console.log("O número " + contador + " é ímpar.")
    } else {
        console.log(`O número ${contador} é par.`)
    }
    contador++;
}


// EXEMPLO FOR 

// for (let contador = 0; contador <= numeroDeAlunos; contador++) {
// //console.log(contador)

//    if (contador == 0) {
// console.log("O número atual é zero.")
//    } else if (contador % 2 == 0) {
// console.log("O número " + contador + " é par.")
//    } else {
// console.log(`O número ${contador} é ímpar.`)
//    }
//    }