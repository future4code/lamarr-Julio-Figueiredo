/* ------------Exercicios de Interpretação de Codigo-----------------------

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

// São três variaveis imutaveis declaradas, onde no console
// aparecera a variavel mais a letra "a" resultado que sera false, pois apenas
//bool1 é verdadeira enquanto a bool2 é falsa

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
//Imprimira no console a letra "b" e a palavra false 
//pois nem todas são verdadeiras

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// Imprimira que a letra c é verdadeira .

console.log("d. ", typeof resultado)

//Imprimira a mensagem "d. boolean " pois o comando typeof mostra o tipo 
//de variável descrita no algoritmo


let primeiroNumero =  prompt ("Digite um numero!")
let segundoNumero =   prompt ("Digite outro numero!")

 let soma = Number(primeiroNumero) + Number (segundoNumero)

console.log (soma)
//Seria impresso no console os dois numero um na frente do outro
//Para ser mostrada realmente a soma dos dois numeros foi necessario 
//declarar as variaveis como tipo Number como fiz acima.
/*

/*-----------Exercicios de escrita de código--------------*/
let idade  = prompt ("Qual sua idade?")  
let idadeAmigo = prompt ("Qual a idade do seu melhor amigo/a?")
const idadeMaior = idade > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo/a? -",idadeMaior)
console.log("A diferença de idade é",idade-idadeAmigo)

let numPar = prompt("Insira um numero par.")
const restDiv= (numPar % 2)
console.log(restDiv)
//Quando inserimos numero pares não há resto na divisão
//Quando há numeros impares o oposto ha resto.

let idadeUsuario = prompt("Qual sua idade em anos?")

console.log("Sua idade em meses é",(idadeUsuario*12))           
console.log("Sua idade em dias é",(idadeUsuario*365))
console.log("Sua idade em horas é",(idadeUsuario*8760))

let primNumero = prompt("Insira um numero .")
let segNumero = prompt("Insira um segundo numero.")

const maior = Number(primNumero) > Number (segNumero)
const igual =Number (primNumero) === Number(segNumero)
const div = Number(primNumero) % Number(segNumero)
const div2 = Number(segNumero) % Number(primNumero)

console.log ("O primeiro numero e maior que o segundo?",maior)
console.log ("O primeiro numero e igual o segundo?",igual)
console.log ("O primeiro numero e divisivel pelo segundo?",(div===0))
console.log ("O segundo numero e divisivel pelo primeiro?",(div2===0))

