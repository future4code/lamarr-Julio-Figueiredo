// ----------------------Exercicio de Interpretação de Código ---------------------------

// 1 - a -

/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  // Imprimira n console todo o array separado por "item, index e array"
*/

  // 2 - a
//  const usuarios = [
 //   { nome: "Amanda Rangel", apelido: "Mandi" },
  //  { nome: "Laís Petra", apelido: "Laura" },
   // { nome: "Letícia Chijo", apelido: "Chijo" },
  // ]
  
 // const novoArrayB = usuarios.map((item, index, array) => {
  //   return item.nome
  //})
  
  // console.log(novoArrayB)

// Imprimira a propriedade "nome" de cada item do array.

// 3 - a 
//const usuarios = [
 //   { nome: "Amanda Rangel", apelido: "Mandi" },
  //  { nome: "Laís Petra", apelido: "Laura" },
  //  { nome: "Letícia Chijo", apelido: "Chijo" },
 // ]
  
  //const novoArrayC = usuarios.filter((item, index, array) => {
   //  return item.apelido !== "Chijo"
  //})
  
  // console.log(novoArrayC)

  // Retornara toda a propriedade "apelido" do array usuarios diferente do valor 
  // "Chijo"

  //----------------------Exercicio de Escrita de Codigo ------------------------
  
  // 1 - a 
  
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
/*
 const novoArrayDog = pets.map((item, index, array) =>{
return item.nome

 })

 console.log(novoArrayDog)

 // b - 

 const arrayFiltro = pets.filter((item,index,array)=>{

  return item.raca == "Salsicha"
 })

 console.log(arrayFiltro)
*/
 // c - 

 const arrayPoodle = (array) =>{

  return array.raca === "Poodle"
  
}
  const arrayCompleto = (array)=>{

    return `Você ganhou um cupom de desconto de 10% para tosar o/a${array.nome} `
  }

 let mensagem = pets.filter(arrayPoodle).map(arrayCompleto)

console.log(mensagem)
console.log("")


// 2 -a 

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


const arrayNome = produtos.map ((array) =>{

  return array.nome
  })

  console.log(arrayNome)

  // b -

  const arrayNome1 = produtos.map ((array) =>{

    return {nome:array.nome,preco:(array.preco*0.95).toFixed(2)}
    })
    console.log(arrayNome1)

    // c - 

    const arrayNome2 = produtos.filter((array)=>{

    return array.categoria == "Bebidas"
    })

    console.log(arrayNome2)

    // d - 

    const arrayNome3 = produtos.filter((array)=>{

      return array.nome.includes("Ypê")
    })

    console.log(arrayNome3)

    // e - 

    const arrayNome4 = (array)=>{
      return array.nome.includes("Ypê")
    }

    const arrayNome5 = (array)=>{
      return (`Compre ${array.nome} por ${array.preco}`)
    }

    let mensagemCompleta= produtos.filter(arrayNome4).map(arrayNome5)

    console.log(mensagemCompleta)