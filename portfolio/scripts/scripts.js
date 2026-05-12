'use strict';
const NOME = "Thiago Henrique";
let tituloProfissional = "Desenvolvedor Backend";
let minhaBio = "Estudante de Desenvolvimento de Sistemas com foco em back-end, desenvolvendo habilidades em Python, Javascript e banco de dados. Comprometido com a resolução de problemas e a criação de soluções eficientes através da prática constante.studante de desenvolvimento de sistemas, com foco em backend, muito esforçado e dedicado.";



let indefinido;
let nulo = null;
let curso = {
    nome: "Desenvolvimento de Sistemas",
        semestre: 3,
            disciplinaAtual: "Linguagem de Programação"
            };

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












if (meses <= 0 && dias <= 0 && anos <= 0) {
    document.getElementById("tempoRestante").innerText = 'Curso já concluído';
}
if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestante").innerText = '-';
} else if (anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestante").innerText = `Tempo restante: ${anoFormatura - anoAtual} ano`;
} else {
    document.getElementById("tempoRestante").innerText = `Tempo restante: ${anoFormatura - anoAtual} anos`;
}



document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
document.write(`<p> Ano de Ingresso: ${anoIngresso}</p>`);


let diaSemana = hoje.getDay() + 1;

let diaescrito;

switch (diaSemana) {
    case 1: diaescrito = "Segunda-feira"; break;
    case 2: diaescrito = "Terça-feira"; break; 
    case 3: diaescrito = "Quarta-feira"; break;
    case 4: diaescrito = "Quinta-feira"; break;
    case 5: diaescrito = "Sexta-feira"; break;
    case 6: diaescrito = "Sábado"; break;
    case 7: diaescrito = "Domingo"; break;
    default: diaescrito = "Dia inválido"; 

}


document.write(`<p> Hoje é ${diaescrito} </p>`);

// ─── QUIZ DE PERFIL ───────────────────────────────────────────
const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#9bf3c7";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});


let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}

const btnAnimacao = document.getElementById("btn-animacao");
const btnApi      = document.getElementById("btn-api");
const btnLayout   = document.getElementById("btn-layout");
const btnBanco    = document.getElementById("btn-banco");

// Eventos das novas perguntas
btnAnimacao.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnApi.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

btnLayout.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnBanco.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});


/*for (let i = 0; i <=20; i++) {
  let pares = i % 2 === 0 ? "par" : "ímpar";
  console.log(`${i} é ${pares}`);
}*/


/*let alunos = ["thiago","Gustavo", "Blackn444", "Bradock"];
for (let contem of alunos) {
  if (contem === "thiago") {
    document.write(`<p>${contem} - presente</p>`);
  } else {
    document.write(`<p>${contem} - ausente</p>`);
  }
}*/


let habilidades = ["Python", "JavaScript", "SQL", "Git", "Css","FastAPI","Html", "Proatividade", "Resolução de Problemas", "Trabalho em Equipe", "Comunicação Eficaz", "Pensamento Crítico"];

for (let habilidade of habilidades) {

  if (habilidade === "Python" || habilidade === "JavaScript" || habilidade === "SQL" || habilidade === "Git" || habilidade === "Css" || habilidade === "FastAPI" || habilidade === "Html") {
    document.write(`<p>${habilidade} - Hard Skills </p>`);
  } else {
    document.write(`<p>${habilidade} - Soft Skills </p>`);
  }

}

let projetos = [
  {
    nome: "Aplicação de gerenciamento de estacionamento",
    tecnologias: ["python", "Tkinter", "SQLite", "Git"],
    descricao: "Desenvolvi uma aplicação de gerenciamento de estacionamento..."
  },

  {
    nome: "Sistema de controle de gastos pessoais",
    tecnologias: ["python", "Sqlite", "Tkinter", "Git"],
    descricao: "Criei um sistema de controle de gastos pessoais..."
  },

  {
    nome: "API de gerenciamento de clientes",
    tecnologias: ["python", "FastAPI", "SQLAlchemy", "Git"],
    descricao: "Desenvolvi uma API de gerenciamento de clientes..."
  },

  {
    nome: "Sistema de Task Manager",
    tecnologias: ["python", "FastAPI", "SQLAlchemy", "Git", "html", "css", "javascript"],
    descricao: "Sistema para gerenciamento de tarefas."
  }
];

let container = document.body;

projetos.forEach(projeto => {

  let titulo = document.createElement("h2");
  titulo.textContent = projeto.nome;

  let descricao = document.createElement("p");
  descricao.textContent = projeto.descricao;

  let tecnologias = document.createElement("p");
  tecnologias.textContent =
    "Tecnologias utilizadas: " + projeto.tecnologias.join(", ");

  container.appendChild(titulo);
  container.appendChild(descricao);
  container.appendChild(tecnologias);

});

