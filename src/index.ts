import { Estudante } from "./Estudante";
import { Professor } from "./Professor";

const joao = new Estudante("João", 30, "Typescript");
const jeff = new Professor("Jefferson", 29, "Typescript");

console.log(joao.apresentar());
console.log(joao.editarCurso()); //false
console.log(jeff.apresentar());
console.log(jeff.editarCurso()); //true
