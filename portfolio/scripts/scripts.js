const NOME = "Thiago Henrique";
let tituloProfissional = "Desenvolvimento de sistemas";
let minhaBio = "Estudante de desenvolvimento de sistemas, com foco em backend, muito esforçado e dedicado.";
let anoFormatura = 2026;
let anoIngresso = 2025;
let indefinido;
let nulo = null;
let curso = {
    nome: "Desenvolvimento de Sistemas",
    semestre: 3,
    disciplinaAtual: "Linguagem de Programação"
};


console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;