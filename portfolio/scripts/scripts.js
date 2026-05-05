const NOME = "Thiago Henrique";
let tituloProfissional = "Desenvolvedor Backend";
let minhaBio = "Estudante de Desenvolvimento de Sistemas com foco em back-end, desenvolvendo habilidades em Python, Javascript e banco de dados. Comprometido com a resolução de problemas e a criação de soluções eficientes através da prática constante.studante de desenvolvimento de sistemas, com foco em backend, muito esforçado e dedicado.";

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;



let hoje = new Date(); //dia atual
let mesAtual = hoje.getMonth() + 1; // mes atual (0-11 por isso o +1)
let anoAtual = hoje.getFullYear(); //ano atual
let diaAtual = hoje.getDate();  //dia atual




let numeroMesFormatura = 12;
let anos = anoFormatura - anoAtual;
let meses = mesFormatura - mesAtual;
let dias = diaFormatura - diaAtual;

let ajusteDias = (dias < 0) * 1;
dias = dias + (30 * ajusteDias);
meses = meses - ajusteDias;


let ajusteMeses = (meses < 0) * 1;
meses = meses + (12 * ajusteMeses);
anos = anos - ajusteMeses;







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
document.getElementById("tempoRestante").innerText =
`Faltam ${anos} anos, ${meses} meses e ${dias} dias para sua formatura.`;