/* Exercicios de Interpretação de Codigo   */
 
// Exercicio 1
/*
let array
console.log('a. ', array)

// Imprimira a seguinte frase "a.undefined" pois a variavel array 
//não foi declarada

array = null
console.log('b. ', array)

// Nesse exemplo observamos que a variavel "Array" foi declarada
// por isso imprimira seu valor no caso"null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

//Nesse exemplo imprimira a quantidade de elemento existente dentro da 
// variavel array "c.11"


let i = 0
console.log('d. ', array[i])

//Imprimira o indice 0 de dentro da Array, sendo ele "3".Pois definiu a variavel "i" como 
// 0 e puxou o valor dela para o console.

array[i+1] = 19
console.log('e. ', array)

// Imprimira o valor de 19 no indice 1. Pois acima,  havia mudado o valor do indice 1 de "4" para  "19"

const valor = array[i+6]
console.log('f. ', valor)

// Imprimira o elemento "9" dentro do array.

//Exercicio 2 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
/*
// Imprimira da seguinte forma: "SUBI NUM ONIBUS EM MIRROCOS, 27"


/*------------------------- Exercicios de Escrita de Código ----------------------------------- */

// const nomeDoUsuario= prompt("Digite seu nome")
// const emailDoUsuario= prompt("Digite seu email")

 // console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso.Seja bem vindo(a) ${nomeDoUsuario}.`) 

//const comidasPreferidas=["lasanha", "pizza" , "lanche", "Strogonoff", "Cachorro-quente"]
//console.log(comidasPreferidas)

 /*  console.log("Essas são as minhas comidas preferidas:")
   console.log(comidasPreferidas[0])
   console.log(comidasPreferidas[1])
   console.log(comidasPreferidas[2])
   console.log(comidasPreferidas[3])
   console.log(comidasPreferidas[4])

let comidaUsuario= prompt("Digite sua comida preferida.")

comidasPreferidas[1]= comidaUsuario
 
 console.log(comidasPreferidas)
*/
const listaDeTarefas= []

 const primeiraTarefa= prompt("Primeira atividade do dia")
 const segundaTarefa= prompt ("Segunda atividade do dia")
 const terceiraTarefa= prompt ("Terceira tarefa do dia")

 listaDeTarefas.push(primeiraTarefa, segundaTarefa, terceiraTarefa)

 console.log(listaDeTarefas)

 
 const digiteIndice = Number(prompt("Digite o numero de uma tarefa que voce ja realizou"))
  arraylistaDeTarefas.splice(digiteIndice,1)

 console.log(arraylistaDeTarefas)