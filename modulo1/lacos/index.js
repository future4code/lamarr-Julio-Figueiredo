// -----------Exercicio de Interpretação de Código -----------------
//  // 1 - 
//  let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// // Imprimi o valor da variavel "valor", pois se trata do primeiro indice do array,
// // sera impresso o valor 10.

// // 2 -
// // a - 

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// // Ira ser impresso todos os valores do array que são maiores que o valor "18"

// // b - Sim é o suficiente

// // 3- 
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Imprimira no console o novo valor da variavel linha que seria "*", subindo de um em um
// ate chegar no valor escrito no prompt

// --------------Exercicio de Escrita de Codigo--------------------

// 1  - 

/* const bichinhosEstimacao= Number(prompt("Quantos animais de estimação voce possui?"))
meuArray =[]

    let animaizinhos = bichinhosEstimacao

    if (animaizinhos == 0 ){

       console.log( "Que pena!Você pode adotar um pet!")
}
else if (animaizinhos>0){

    for(let i = 0; i <animaizinhos ; i++){

    let nomesAnimais= prompt("Digite o nome de seus animais")
    let guardarNomes = nomesAnimais

let meuArray = []
let arrayConstruido= meuArray.push(guardarNomes)

console.log(guardarNomes)
   
  }*/

  // 2 -

  const arrayOriginal = [10, 20 , 30 , 40 , 50]

  functionImprimir = (arrayOriginal)=>{

   for (let impressao of arrayOriginal){
  console.log(functionImprimir())
   }
  }
   
 


