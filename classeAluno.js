"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, nacionalidade, classeMagica) {
        this.casa = null;
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.classeMagica = classeMagica;
    }
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Aluno.prototype.getIdade = function () {
        return this.idade;
    };
    Aluno.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Aluno.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Aluno.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    Aluno.prototype.getCasa = function () {
        return this.casa;
    };
    Aluno.prototype.setCasa = function (casa) {
        this.casa = casa;
    };
    Aluno.prototype.getClasseMagica = function () {
        return this.classeMagica;
    };
    Aluno.prototype.setClasseMagica = function (classeMagica) {
        this.classeMagica = classeMagica;
    };
    Aluno.prototype.sortearCasa = function () {
        var casas = ['grifinória', 'sonserina', 'lufa-lufa', 'corvinal'];
        var casaSorteada = casas[Math.floor(Math.random() * casas.length)];
        this.casa = casaSorteada;
    };
    Aluno.prototype.exibirInformacoes = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("Idade: ".concat(this.idade));
        console.log("Nacionalidade: ".concat(this.nacionalidade));
        console.log("Casa: ".concat(this.casa || 'Não atribuída'));
        console.log("Classe M\u00E1gica: ".concat(this.classeMagica));
    };
    return Aluno;
}());
exports.Aluno = Aluno;
