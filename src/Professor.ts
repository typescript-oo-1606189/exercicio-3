export class Professor {
  nome: string;
  idade: number;
  materia: string;

  constructor(nome: string, idade: number, materia: string) {
    this.nome = nome;
    this.idade = idade;
    this.materia = materia;
  }

  apresentar(): string {
    return `O meu nome é ${this.nome}, minha idade é ${this.idade} e a matéria que vou lecionar é ${this.materia}`;
  }

  editarCurso(): boolean {
    return true;
  }
}
