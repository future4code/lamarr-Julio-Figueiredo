
// -------------Exercicio de Interpretação de Codigo ----------------------
 
// 1 -
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//Imprimira "Matheus Nachtergaele", por ser o primeiro indice.
//No segundo console imprimira o ultimo indice do array , "Virginia Cavendish "
//No terceiro console imprimi toda a estrutura do objeto indice "2"

// 2 - a 
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// Imprimi todas as propriedades do objeto "cachorro"
//Invoca o objeto cachorro, mudando a propriedade nome.
//troca  a letra "a", pela letra "o" do valor da propriedade nome

//b - Ela faz uma copia adicionando ou alterando  o valor da  propriedade.

//3 -a 

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// Imprimira no console "false" e "undefined"

// b - 

// O parametro pessoa se trata do objeto criado , e o "false" foi imprimido , pois o valor definido
// foi esse, e o "undefined" foi pois não existe nenhuma propriedade de altura.


// --------------------Exercicio de Escrita de Codigo -------------------

// 1 - a

const nomeMeu = {

    nome:"julio",
    apelidos:["zoi verde", "juh", "olho de burca"]
}
function resultadoApelidos(){ 
    const fraseResultado= (`Eu sou o ${nomeMeu.nome}, mas pode me chamar de: ${nomeMeu.apelidos}`)
    return fraseResultado
    
}

console.log(resultadoApelidos())

const apelidosNovos = {
    ...nomeMeu,
    apelidos:["lindo","orelhudo","trakinas"]
}

//b - 

console.log(`Eu sou o ${nomeMeu.nome}, mas pode me chamar de: ${apelidosNovos.apelidos}`)

// 2 - a -

const pessoa1={
nome: "Julio",
idade: 21,
profissao: "Açougueiro"
}
const pessoa2= {
    nome: "Cesar",
    idade: 21,
    profissao: "Desenvolvedor Web"
}    

// b -
 minhaFuncao= (pessoa2) =>{
  
return [pessoa2.nome , pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
 }
console.log(minhaFuncao(pessoa2))
 
// 3 - a - 

let carrinho= []
 // b- 
 const fruta1={
	 nome:"banana",
	 disponibilidade: "true"
 }
 const fruta2={
	nome:"jaca",
	disponibilidade: "true"
}
const fruta3={
	nome:"mamão",
	disponibilidade: "true"
}
console.log()
// c - 
funcaoFruta = (fruta1)=> {
	 
	carrinho.push(fruta1)
}
funcaoFruta(fruta1)
funcaoFruta(fruta2)
funcaoFruta(fruta3)

console.log(carrinho)