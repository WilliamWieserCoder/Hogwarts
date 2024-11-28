export class Aluno {
    private nome: string
    private idade: number
    private nacionalidade: string
    private casa: string | null = null
    private classeMagica: string

    constructor(nome: string, idade: number, nacionalidade: string, classeMagica: string) {
        this.nome = nome
        this.idade = idade
        this.nacionalidade = nacionalidade
        this.classeMagica = classeMagica
    }

    getNome(): string {
        return this.nome
    }

    setNome(nome: string): void {
        this.nome = nome
    }

    getIdade(): number{
        return this.idade
    }

    setIdade(idade: number): void {
        this.idade = idade
    }

    getNacionalidade(): string {
        return this.nacionalidade
    }

    setNacionalidade(nacionalidade: string): void {
        this.nacionalidade = nacionalidade
    }

    getCasa(): string | null {
        return this.casa
    }

    setCasa(casa: string): void {
        this.casa = casa
    }

    getClasseMagica(): string{
        return this.classeMagica
    }

    setClasseMagica(classeMagica: string): void {
        this.classeMagica = classeMagica
    }

    sortearCasa(): void {
        const casas = ['grifinória', 'sonserina','lufa-lufa','corvinal']
        const casaSorteada = casas[Math.floor(Math.random() * casas.length)]
        this.casa = casaSorteada
    }

    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log(`Nacionalidade: ${this.nacionalidade}`)
        console.log(`Casa: ${this.casa || 'Não atribuída'}`)
        console.log(`Classe Mágica: ${this.classeMagica}`)
    }

}