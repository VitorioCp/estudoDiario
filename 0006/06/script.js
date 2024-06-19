let result = prompt("Advinhe o numero que eu estou pensando é entre 0 e 10")

let randomNumber = Math.round(Math.random() * 10)

let Xattempts = 1;


while (Number(result) != randomNumber) {
    alert("Você errou, tente novamente")
    result = prompt("Advinhe o numero que eu estou pensando é entre 0 e 10")
    Xattempts++ 
}

alert("Você acertou, parabéns com " + Xattempts + " tentantivas")