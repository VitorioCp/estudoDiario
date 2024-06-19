let numberOne = prompt("Insira o primeiro numero")
let numberTwo = prompt("Insira o segundo numero")

let sum = Number(numberOne) + Number(numberTwo)
let sub = Number(numberOne) - Number(numberTwo)
let mul = Number(numberOne) * Number(numberTwo)
let div = Number(numberOne) / Number(numberTwo)
let sob = Number(numberOne) % Number(numberTwo)

alert(sum)
alert(sub)
alert(mul)
alert(div)
alert(sob)

if((Number(numberOne) + Number(numberTwo)) % 2 == 0){
    alert("Esse numero é par");
}else {
    alert("Esse numero é impar");
}

if(Number(numberOne) == Number(numberTwo)){
    alert("Os dois numeros são iguais");
}else{
    alert("Os dois numeros são diferentes");
}