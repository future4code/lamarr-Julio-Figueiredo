// Exercicio de Interpretação de Código

function minhaFuncao(variavel) {
	return variavel * 5
}
 minhaFuncao(2)
 minhaFuncao(10)

 //  Imprimira a multiplicação do  valor 5 pelo valor emitido dentro do ()
 //"10", "50. Se retirar os dois console log não aparecera nada.

 let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
  // Imprimi no console "true", caso a palavra cenoura se encontre na frase
  // e caso não imprime o "false".
  //Todas as saidas acontecem com "true", pois todas as frasem incluem a palavra "cenoura".

  //  -----------------Exercicio de Escrita de Código-------------------//

  // 1 - a
    function sobreMim() {
    }
        
    console.log  ( sobreMim,"Eu sou Julio , tenho 21 anos, moro em Promissão e sou estudante.")
    
// 1 - b
function exercicio(nome,idade,cidade,profissão){
    
return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`

}

const frase= exercicio("Julio",21,"Promissao","açougueiro")

console.log(frase)
// 2 - a

function soma(num1,num2){

    return num1 + num2
}
 const somaTotal= soma (5 ,10)

 console.log(somaTotal)
// 2 - b 

 function maiorIgual(nume1,nume2){

    return nume1 >= nume2
 }

const resultadoMaiorIgual= maiorIgual(5 ,2)

console.log(resultadoMaiorIgual)

// 2 - c 
 function numPar(numePar){

    return numePar %2===0
 }

 const numeroPar= numPar( 5 )

 console.log(numeroPar)

 // 2 -d 

 function fraseDuasVersoes(texto){
return `${texto.length}, ${texto.toUpperCase()}`
 }

console.log(fraseDuasVersoes("Julio ama cachorros"))

// 3 - a

function soma(num1,num2){
return  num1 + num2
}
function subtracao(num1,num2){
return num1 - num2
}

function multiplicação(num1,num2){
 return num1 * num2
}

function divisao(num1,num2){
return num1 / num2
}

const  primeiroNumero= Number(prompt("Digite o primeiro numero"))
const segundoNumero= Number(prompt("Digite mais um numero"))

num1= primeiroNumero
num2=segundoNumero

const resultadosoma= soma(primeiroNumero, segundoNumero)
const resultadosubtracao= subtracao(primeiroNumero, segundoNumero)
const resultadomultiplicacao= multiplicação(primeiroNumero, segundoNumero)
const resultadodivisao= divisao(primeiroNumero, segundoNumero)

console.log(resultadosoma)
console.log(resultadosubtracao)
console.log(resultadomultiplicacao)
console.log(resultadodivisao)