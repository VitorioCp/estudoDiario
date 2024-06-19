#include <stdio.h>
#include <
int main()
{
 typedef struct{
     int dia;
     int mes;
     int ano;
 } data;

    typedef struct{
        char rua[30];
        int numero;
        char bairro[30];
        char cidade[30];
        char estado[2];
        int cep;
    } endereco;
    
    struct ficha_aluno{
        int matricula;
        char nome[50];
        char displina[30];
        float nota;
        
        data datanasc;
        endereco endaluno
    }

    struct ficha_aluno aluno[2];

    int i;

    printf("\n Ficha do Aluno \n");

    for(i=0; i<2; i++){
        printf("Matricula do aluno: ");
        scanf("%d", %aluno[i].matricula);

        printf("Nome do aluno: ");
        scanf("%s", %aluno[i].nome);

        printf("Informe o endereço do aluno (Rua): ");
        scanf("%s", %aluno[i].endaluno.rua);

        printf("Informe o endereço do aluno (Numero): ");
        scanf("%d", %aluno[i].endaluno.numero);

        printf("Informe o endereço do aluno (Bairro): ");
        scanf("%s", %aluno[i].endaluno.bairro);

        printf("Informe o endereço do aluno (Cidade): ");
        scanf("%s", %aluno[i].endaluno.cidade);

        printf("Informe o endereço do aluno (Estado): ");
        scanf("%s", %aluno[i].endaluno.estado);

        printf("Informe o endereço do aluno (CEP): ");
        scanf("%d", %aluno[i].endaluno.cep);

        printf("Informe a data de nascimento do aluno (Dia): ");
        scanf("%d", %aluno[i].datanasc.dia);

        printf("Informe a data de nascimento do aluno (Mes): ");
        scanf("%d", %aluno[i].datanasc.mes);

        printf("Informe a data de nascimento do aluno (Ano): ");
        scanf("%d", %aluno[i].datanasc.ano);

        printf("Informe a disciplina do aluno: ");
        scanf("%s", %aluno[i].disciplina);

        printf("Informe a nota do aluno: ");
        scanf("%f", %aluno[i].nota);

        
    }

    for(i=0; i<2; i++){
        print("\n Ficha Do Aluno\n");
        printf("Matricula: %d\n", %aluno[i].matricula);
        printf("Nome: %s\n", %aluno[i].nome);
        printf("Endereço: %s, %d, Bairro %s, Cidade %s, CEP: %d\n", aluno[i].endaluno.rua, aluno[i].endaluno.numero, aluno[i].endaluno.bairro, aluno[i].endaluno.bairro, aluno[i].endaluno.cidade, aluno[i].endaluno.estado, aluno[i].endaluno.cep)
    }
}
