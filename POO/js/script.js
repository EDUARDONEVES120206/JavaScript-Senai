
class personagem{
    nome
    força
    vida
    stamina
    nivel    
}

function teste() {
    // alert('teste')
    // atribuir caracteristicas ao meu personagem

    let personagem_1 = new personagem();
    personagem_1.nome = "Eduardo"
    personagem_1.forca = 8
    personagem_1.vida = 10
    personagem_1.stamina = 6
    personagem_1.nivel = 7

    let personagem_2 = new personagem();
    personagem_2.nome = "Ewerson"
    personagem_2.forca = 81
    personagem_2.vida = 10
    personagem_2.stamina = 5
    personagem_2.nivel = 8

    alert(personagem_1.nome+ "  "+ "Força: "+ personagem_1.forca)
    alert(personagem_2.nome+ "  "+ "Força: "+ personagem_2.forca)
}

