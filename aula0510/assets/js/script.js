var pontos1 = 0
var pontos2 = 0
function jokenpo_func(jogada){
    var bot =Math.floor(Math.random()*(3)+1)
    var resultado = bot - jogada
    if (resultado == 1 || resultado == -2){
        pontos1 +=1
        alert('perdeu! bot '+ pontos1 + ' jogador '+pontos2)
    }else if(bot == jogada){
        alert('empate!')
    }else{
        pontos2 +=1
        alert('ganhou! bot '+ pontos1 + ' jogador '+pontos2)
    }
 
}