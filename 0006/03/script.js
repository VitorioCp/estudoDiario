


alert("Calculadora de numeros")

let numberOne = prompt("Informe seu primeiro numero")
let operador = prompt("Informe o tipo de calculo +, -, *, /, %")
let numberTwo = prompt("Informe seu segundo numeros")
let resultado = 0
switch (operador) {
    
    case "+":
        resultado = (Number(numberOne) + Number(numberTwo))
        alert(resultado)
        break;
    case "-":
        alert("A subtração foi de "(Number(numberOne) - Number(numberTwo)))
        break;
    case "*":
        alert("A multiplicação foi de "(Number(numberOne) * Number(numberTwo)))
        break;
        case "/":
            alert("A divisão foi de "(Number(numberOne) / Number(numberTwo)))
            break
        case "%":
            alert("O resto da divisão foi de "(Number(numberOne) % Number(numberTwo)))
            break;
}
