const alunos = [
  { nome: 'Aluno 1', nota: 9 },
  { nome: 'Aluno 2', nota: 6 },
  { nome: 'Aluno 3', nota: 10 },
  { nome: 'Aluno 4', nota: 7 },
  { nome: 'Aluno 5', nota: 5 },
  { nome: 'Aluno 6', nota: 8 },
  { nome: 'Aluno 7', nota: 7 }
]

const filtraAlunosAprovados = (alunos) => alunos.nota >= 7;

const alunosAprovados = alunos.filter(filtraAlunosAprovados);

alunosAprovados.forEach(function(nomeDoAluno){
  console.log(`O ${nomeDoAluno.nome} foi aprovado com a nota igual ou maior que 7`);
});