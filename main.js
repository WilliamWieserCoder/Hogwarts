"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var classeAluno_1 = require("./classeAluno");
function cadastrarAluno() {
    var nome = readlineSync.question('Digite o nome do aluno: ');
    var idade = (readlineSync.question('Digite a idade do aluno '));
    var nacionalidade = readlineSync.question('Digite a nacionalidade do aluno: ');
    var classeMagica = readlineSync.question('Digite a classe mágica que o aluno deseja se especializar: ');
    var aluno = new classeAluno_1.Aluno(nome, idade, nacionalidade, classeMagica);
    aluno.sortearCasa();
    alunos.push(aluno);
    console.clear();
    aluno.exibirInformacoes();
    console.log('Aluno cadastrado com sucesso!');
    readlineSync.question("Enter para continuar...");
}
function verAlunos() {
    for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
        var i = alunos_1[_i];
        readlineSync.question("Nome: ".concat(i.getNome(), "\nIdade: ").concat(i.getIdade(), "\nNacionalidade: ").concat(i.getNacionalidade(), "\n"));
    }
}
function editarAluno() {
    var index = parseInt(readlineSync.question('Digite o número do aluno que deseja editar: ')) - 1;
    if (index >= 0 && index < alunos.length) {
        var aluno = alunos[index];
        var nome = readlineSync.question("Digite o novo nome do aluno: (atual: ".concat(aluno.getNome(), "): "));
        aluno.setNome(nome);
        var idade = parseInt(readlineSync.question("Digite a nova idade do aluno: (atual: ".concat(aluno.getIdade(), "): ")));
        aluno.setIdade(idade);
        var nacionalidade = readlineSync.question("Digite a nova nacionalidade do aluno (atual: ".concat(aluno.getNacionalidade(), "): "));
        aluno.setNacionalidade(nacionalidade);
        var casa = readlineSync.question("Digite a nova casa do aluno (atual: ".concat(aluno.getCasa() || 'Não atribuída', "): "));
        aluno.setCasa(casa);
        var classeMagica = readlineSync.question("Digite a nova classe m\u00E1gica do aluno (atual: ".concat(aluno.getClasseMagica(), "): "));
        aluno.setClasseMagica(classeMagica);
        console.log('Aluno encontrado com sucesso!');
    }
    else {
        console.log('Aluno não encontrado no banco de dados!');
    }
}
function deletarAluno() {
    var index = parseInt(readlineSync.question('Digite o número do aluno que deseja excluir: ')) - 1;
    if (index >= 0 && index < alunos.length) {
        alunos.splice(index, 1);
        console.log('Aluno excluído com sucesso!');
    }
    else {
        console.log('Aluno não encontrado.');
    }
}
function main() {
    var opcao = 0;
    while (opcao !== 5) {
        console.log('\n1. Cadastrar novo aluno:');
        console.log('2. Ver alunos cadastrados');
        console.log('3. Editar dados de um aluno');
        console.log('4. Deletar aluno');
        console.log('5. Sair');
        opcao = parseInt(readlineSync.question('Escolha uma opcao: '));
        switch (opcao) {
            case 1:
                cadastrarAluno();
                break;
            case 2:
                verAlunos();
                break;
            case 3:
                editarAluno();
                break;
            case 4:
                deletarAluno();
                break;
            case 5:
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida!');
        }
    }
}
var alunos = [];
main();
