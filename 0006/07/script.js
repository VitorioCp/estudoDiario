/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/
let rodar = true
let lista = []
while (rodar == true) {
    

    let opcao = prompt("Olá usuário! Digite o número da opção desejada \n 1. Cadastrar um item na lista \n 2. Mostrar itens cadastrados \n 3. Sair do programa")

    switch (opcao) {
        
        case "1":
            item = prompt("Informe o nome do item para ser cadastrado");
            lista.push(item)
            break

        case "2":
            if (lista.length == 0) {
                alert("Não existem itens cadastrados")
                break
            } else {
                alert(lista)
                break
            }
            

        case "3":
            alert("Programa encerrado")
            rodar = false
            break
        default:
            alert("Opção inválida, tente novamente")
            break
    }
}