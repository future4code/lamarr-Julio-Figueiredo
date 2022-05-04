// --------------Exercicio de Interpretação de Codigo -------------------------

// 1 - 

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */

// a - Ele pede um numero ao usuario e declara esse numero como valor a variavel "numero".Usa uma condicional
// para caso o numero tiver o resto igual a "0 " imprima a primeira mensagem , caso não, a segunda mensagem.

// b- Os numeros cujo o resto seja "0", ou seja numeros pares.

// c - Os numeros cujo o resto seja diferente de "0", ou seja numeros impares.

// 2 -

/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break; 
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

// a - O codigo acima faz um pergunta ao usuario ,e dependendo da sua pergunta imprimi a condição
// descrita acima com a fruta digitada e o seu preço.

// b- Sera impresso "O preço da fruta , Maçã, é, R$2,25"

// c - "O preço da fruta , Pêra, é, R$5" - Ela imprimi o preço errado .

// 3 - 

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
  let mensagem = "Essa mensagem é secreta!!!"	
}
console.log(mensagem)
// a - A primeira linha esta pedindo ao usuario que digite um valor tipo "number"
// b - Se for o numero 10 apareceria "Esse numero passou no teste", se for -10 não imprime nada.
// c - Sim , pois a variavel "mensagem " foi declarada dentro do escopo do operador condicional "if"
*/

// ----------------Exercicio de Escrita de Codigo -----------------------

// 1 - a

/*const idadeUsuario = Number(prompt("Digite sua idade"))
idadeRevelada = idadeUsuario

if (idadeRevelada >= 18){
    console.log("Voce pode dirigir")
}    else 
        console.log("Você não pode dirigir") */
// 2 - 
 
/*const turnoEscolar= prompt("Digite a primeira letra do seu turno.")

const resultadoTurno = turnoEscolar

if (resultadoTurno == "M"){
    console.log("Bom dia!")}
else if(resultadoTurno == "V"){
console.log("Boa Tarde!")}
else if (resultadoTurno == "N"){
console.log("Boa Noite!")
}
*/

// 3- 
/*
const turnoEscolar= prompt("Digite a primeira letra do seu turno.")

const resultadoTurno = turnoEscolar

switch(resultadoTurno){
    case 'V':
        console.log("Boa Tarde")
        break;
        case 'M':
            console.log("Bom Dia!")
            break;
            case 'N':
                console.log("Boa Noite!")
                break;
                default: 
                console.log("turno inexistente" )
                break;
}
*/
// 4 - 
const generoFilme=prompt("Qual gênero de filme voce vai assistir?")
const valorIngresso= Number(prompt("Qual preço do ingresso?"))
const snackAComprar= prompt("Qual snack voce quer comprar?")


const filme = generoFilme
const realIngresso= valorIngresso
const valorSnack = snackAComprar

if (filme == "fantasia" && realIngresso < 15){
    console.log("Bom filme!")}

    else if (filme == "fantasia" && realIngresso > 15){
    console.log("Escolha outro filme :(") }

     else if (filme != "fantasia" && realIngresso < 15){
    console.log("Escolha outro filme :(")}

    console.log(`Aproveite o seu ${valorSnack}`)
    

