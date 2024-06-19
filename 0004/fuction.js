let salarioTotorioStr = prompt("Salário Totorio: ");
let salarioLehStr = prompt("Salário Leh: ");

let salarioTotorio = parseFloat(salarioTotorioStr);
let salarioLeh = parseFloat(salarioLehStr);
const renda = (salarioTotorio + salarioLeh)

console.log("Renda conjunta: " +renda)

function divisaoRenda(renda) {

    let sustento = renda / 2;
    let reservaEmergencia = renda / 10
    let lazer = renda / 10
    let investimentoLongoPrazo = (renda / 10) * 2
    let conhecimento = (renda / 10)


    return {
        sustento: sustento,
        reservaEmergencia: reservaEmergencia,
        lazer: lazer,
        investimentoLongoPrazo: investimentoLongoPrazo,
        conhecimento: conhecimento
    };
}
console.log("Financias totorio")
console.log(divisaoRenda(salarioTotorio))
console.log("Financias Leh")
console.log(divisaoRenda(salarioLeh))
console.log("Financias em conjunto")
console.log(divisaoRenda(renda))




