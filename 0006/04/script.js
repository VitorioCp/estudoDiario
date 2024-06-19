let nameUser = prompt("Nome do aluno")
let primeiraNota = prompt("Primeira nota")
let segundoNota = prompt("Segunda nota")

let media = ((Number(primeiraNota)+ Number(segundoNota)) / 2).toFixed(2)

if(media >= 6){
    alert( `${nameUser} teve uma media de ${media} e foi aprovado!`)
} else{
    alert( `${nameUser} teve uma media de ${media} e foi reprovado!`)
}