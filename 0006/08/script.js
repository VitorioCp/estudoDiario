/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const pacients = [
    {
        nome: "João",
        idade: 20,
        altura: 180
    },
    {
        nome: "Vitorio",
        idade: 20,
        altura: 180
    },

    {
        nome: "Clebeson",
        idade: 20,
        altura: 180
    }]

let patientsNames = []
let patientAge = []
let patientAltura = []

/*
for (let i = 0; i < pacients.length; i++) {
    patientsNames[i] = pacients[i].nome
}
*/

//Metodo mais moderno
for (let patient of pacients) {
    patientsNames.push(patient.nome)
    patientAge.push(patient.idade)
    patientAltura.push(patient.altura)
}

alert(patientsNames, patientAge, patientAltura)
