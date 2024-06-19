let students =[
    {
        name: "Vitorio",
        gradeOne: 7.5,
        gradeTwo: 7.5
    },
    {
        name: "Pedro",
        gradeOne: 7.5,
        gradeTwo: 5.0
    },
    {
        name: "Maria",
        gradeOne: 7.5,
        gradeTwo: 5.0
    }
]


function median (students){
    let avarage = ( (students.gradeOne + students.gradeTwo) / 2)
    alert( `${students.name} tirou ${avarage}`)
    return avarage
}

for (let i = 0; i < students.length; i++){
    let studentMedian = median(students[i])

    if(studentMedian >= 7){
        alert("O estudante foi aprovado")
    } else {
        alert("O estudante foi reprovado")
    }
    
}