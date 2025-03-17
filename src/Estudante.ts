export class Estudante {
  nome: string;
  idade: number;
  curso: string;

  constructor(nome: string, idade: number, curso: string) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
  }

  apresentar(): string {
    return `O meu nome é ${this.nome}, minha idade é ${this.idade} e o curso é ${this.curso}`;
  }

  editarCurso(): boolean {
    return false;
  }
}
