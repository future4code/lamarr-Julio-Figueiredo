/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Black Jack!")

    if(confirm("Quer iniciar uma nova rodada?")) {
      const carta = comprarCarta();
      const carta2= comprarCarta(); 
      const carta3 = comprarCarta();
      const carta4= comprarCarta(); 
      
      let somaCartaUsuario = carta.valor + carta2.valor
      console.log(`Usuário - cartas: ${carta.texto} ${carta2.texto} - pontuação= ${somaCartaUsuario}`)
   
        
   let somaCartaComputador = carta3.valor + carta4.valor
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação= ${somaCartaComputador}`)
   
   if(somaCartaUsuario == somaCartaComputador){
      console.log("Empate!")
    } else if(somaCartaUsuario>somaCartaComputador){
   
      console.log("O usuario ganhou!") 
   }else if(somaCartaUsuario < somaCartaComputador){
      console.log("O computador ganhou!") }
 
 else {
     console.log("O jogo acabou")

}




    }
