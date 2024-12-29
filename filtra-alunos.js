const alunos = [
    {nome: 'João', nota: 8.5},
    {nome: 'Maria', nota: 9.0},
    {nome: 'Pedro', nota: 5.0},
    {nome: 'Tomás', nota: 2.0},
    {nome: 'Ana', nota: 9.5},
    {nome: 'Lucas', nota: 7.5},
    {nome: 'Gian', nota: 8.5},
    {nome: 'Paula', nota: 6.5},
    {nome: 'Marina', nota: 8.0},
    {nome: 'Iago', nota: 6.0},
    {nome: 'Laís', nota: 5.5},
    {nome: 'Paulo', nota: 1.0}
];

function filtraAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

function filtraAlunosReprovados(alunos) {
    return alunos.filter(aluno => aluno.nota < 6);
}

const aprovados = filtraAlunosAprovados(alunos);
const reprovados = filtraAlunosReprovados(alunos);

console.log(aprovados);
console.log(aprovados.length);
console.log(reprovados);
console.log(reprovados.length);

const listaAprovados = aprovados.map(aluno => aluno.nome);
const listaReprovados = reprovados.map(aluno => aluno.nome)

console.log(`São ${reprovados.length} alunos reprovados, são eles: ${listaReprovados.join(', ')}`);
console.log(`São ${aprovados.length} alunos aprovados, são eles: ${listaAprovados.join(', ')}`);