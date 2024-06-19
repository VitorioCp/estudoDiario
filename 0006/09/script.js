/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */



const pacients = [
    {
        name: 'John',
        age: 30,
        weight: 80,
        height: 180
    },
    {
        name: 'Maria',
        age: 25,
        weight: 60,
        height: 160
    },
    {
        name: 'José',
        age: 40,
        weight: 90,
        height: 170
    }
];

function imc (patient){
    alert(`O ${patient.name} tem o IMC de ${(patient.weight / (patient.height / 100) ** 2).toFixed(2)}`)

    
    
}

for (let patient of pacients){

    imc(patient)
}




