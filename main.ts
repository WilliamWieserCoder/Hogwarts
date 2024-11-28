import * as readlineSync from 'readline-sync'
import { Aluno } from './classeAluno'



function cadastrarAluno(): void {
    const nome = readlineSync.question('Digite o nome do aluno: ')
    const idade = (readlineSync.question('Digite a idade do aluno '))
    const nacionalidade = readlineSync.question('Digite a nacionalidade do aluno: ')
    const classeMagica = readlineSync.question('Digite a classe mágica que o aluno deseja se especializar: ')

    const aluno = new Aluno(nome, idade, nacionalidade, classeMagica)
    aluno.sortearCasa()

    alunos.push(aluno)
    console.clear()
    aluno.exibirInformacoes()
    console.log('Aluno cadastrado com sucesso!')
    readlineSync.question("Enter para continuar...")
}

function verAlunos(): void {
    for(let i of alunos){
        readlineSync.question(`Nome: ${i.getNome()}\nIdade: ${i.getIdade()}\nNacionalidade: ${i.getNacionalidade()}\n`)
    }
}

function editarAluno(): void {
    const index = parseInt(readlineSync.question('Digite o número do aluno que deseja editar: ')) - 1

    if (index >= 0 && index < alunos.length) {
        const aluno = alunos[index];

        const nome = readlineSync.question(`Digite o novo nome do aluno: (atual: ${aluno.getNome()}): `)
        aluno.setNome(nome)

        const idade = parseInt(readlineSync.question(`Digite a nova idade do aluno: (atual: ${aluno.getIdade()}): `))
        aluno.setIdade(idade)

        const nacionalidade = readlineSync.question(`Digite a nova nacionalidade do aluno (atual: ${aluno.getNacionalidade()}): `)
        aluno.setNacionalidade(nacionalidade)

        const casa = readlineSync.question(`Digite a nova casa do aluno (atual: ${aluno.getCasa() || 'Não atribuída'}): `)
        aluno.setCasa(casa)

        const classeMagica = readlineSync.question(`Digite a nova classe mágica do aluno (atual: ${aluno.getClasseMagica()}): `)
        aluno.setClasseMagica(classeMagica)

        console.log('Aluno encontrado com sucesso!')
    } else {
        console.log('Aluno não encontrado no banco de dados!')
    }
}

function deletarAluno(): void{
    const index = parseInt(readlineSync.question('Digite o número do aluno que deseja excluir: ')) - 1
    if (index >= 0 && index < alunos.length) {
        alunos.splice(index, 1)
        console.log('Aluno excluído com sucesso!')
    } else {
        console.log('Aluno não encontrado.')
    }
}

function main(): void {
    let opcao = 0
    while (opcao !== 5) {
        console.log('\n1. Cadastrar novo aluno:')
        console.log('2. Ver alunos cadastrados')
        console.log('3. Editar dados de um aluno')
        console.log('4. Deletar aluno')
        console.log('5. Sair')
        
        opcao = parseInt(readlineSync.question('Escolha uma opcao: '))

        switch (opcao) {
            case 1:
                cadastrarAluno()
                break;
            case 2:
                verAlunos()
                break;
            case 3:
                editarAluno()
                break;
            case 4:
                deletarAluno()
                break;
            case 5:
                console.log('Saindo...')
                break;
            default:
                console.log('Opção inválida!')
        }
    }
}

let alunos: Array<Aluno> = []

main()















