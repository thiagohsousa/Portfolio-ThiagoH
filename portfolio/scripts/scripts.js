'use strict';

document.addEventListener("DOMContentLoaded", function () {

const NOME = "Thiago Henrique";

let tituloProfissional = "Desenvolvedor Backend";

const botaoTema = document.getElementById("modoEscuroClaro");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});

let minhaBio =
    "Estudante de Desenvolvimento de Sistemas com foco em back-end, desenvolvendo habilidades em Python, JavaScript e banco de dados.";

let curso = {
    nome: "Desenvolvimento de Sistemas",
    semestre: 3,
    disciplinaAtual: "Linguagem de Programação"
};

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

let anoIngresso = 2025;

let hoje = new Date();

let mesAtual = hoje.getMonth() + 1;
let anoAtual = hoje.getFullYear();
let diaAtual = hoje.getDate();

let anos = anoFormatura - anoAtual;
let meses = mesFormatura - mesAtual;
let dias = diaFormatura - diaAtual;

function exibirTempoRestante() {

    if (meses <= 0 && dias <= 0 && anos <= 0) {
        document.getElementById("tempoRestante").innerText = "Curso já concluído";
    }

    if (anoFormatura - anoAtual <= 0) {

        document.getElementById("tempoRestante").innerText = "-";

    } else if (anoFormatura - anoAtual === 1) {

        document.getElementById("tempoRestante").innerText =
            `Tempo restante: ${anoFormatura - anoAtual} ano`;

    } else {

        document.getElementById("tempoRestante").innerText =
            `Tempo restante: ${anoFormatura - anoAtual} anos`;
    }
}

function exibirInformacoes() {

    document.getElementById("meuNome").innerText = NOME;

    document.getElementById("tituloProfissional").innerText = tituloProfissional;

    document.getElementById("minhaBio").innerText = minhaBio;

    document.getElementById("anoFormatura").innerText =
        `Ano de formatura: ${anoFormatura}`;

    document.getElementById("anoIngresso").innerHTML =
        `<p>Ano de ingresso: ${anoIngresso}</p>`;
}

let diaSemana = hoje.getDay();

let diaEscrito;

function obterDiaSemana() {

    switch (diaSemana) {

        case 0:
            diaEscrito = "Domingo";
            break;

        case 1:
            diaEscrito = "Segunda-feira";
            break;

        case 2:
            diaEscrito = "Terça-feira";
            break;

        case 3:
            diaEscrito = "Quarta-feira";
            break;

        case 4:
            diaEscrito = "Quinta-feira";
            break;

        case 5:
            diaEscrito = "Sexta-feira";
            break;

        case 6:
            diaEscrito = "Sábado";
            break;

        default:
            diaEscrito = "Dia inválido";
    }
}

function exibirDiaSemana() {

    document.getElementById("diaSemana").innerHTML =
        `<p>Hoje é ${diaEscrito}</p>`;
}

const resultadoQuiz = document.getElementById("resultado-quiz");

let pontosFront = 0;
let pontosBack = 0;

function estilizarResultado(cor) {

    resultadoQuiz.style.backgroundColor = cor;

    resultadoQuiz.style.padding = "12px";

    resultadoQuiz.style.borderRadius = "8px";
}

function exibirPerfil() {

    if (pontosFront > pontosBack) {

        resultadoQuiz.innerHTML = `
            <strong>🎨 Perfil Front-End!</strong><br>
            Você gosta de interfaces e experiência do usuário.
        `;

        estilizarResultado("#dbeafe");

    } else if (pontosBack > pontosFront) {

        resultadoQuiz.innerHTML = `
            <strong>⚙️ Perfil Back-End!</strong><br>
            Você gosta de lógica e dados.
        `;

        estilizarResultado("#bbf7d0");

    } else {

        resultadoQuiz.innerHTML = `
            <strong>🔄 Perfil Full Stack!</strong><br>
            Você gosta das duas áreas.
        `;

        estilizarResultado("#fde68a");
    }
}

function responderQuiz(tipo) {

    if (tipo === "front") {
        pontosFront++;
    } else {
        pontosBack++;
    }

    exibirPerfil();
}

document.getElementById("btn-visual")
.addEventListener("click", function () {
    responderQuiz("front");
});

document.getElementById("btn-logica")
.addEventListener("click", function () {
    responderQuiz("back");
});

document.getElementById("btn-animacao")
.addEventListener("click", function () {
    responderQuiz("front");
});

document.getElementById("btn-api")
.addEventListener("click", function () {
    responderQuiz("back");
});

document.getElementById("btn-layout")
.addEventListener("click", function () {
    responderQuiz("front");
});

document.getElementById("btn-banco")
.addEventListener("click", function () {
    responderQuiz("back");
});

let habilidades = [
    "Python",
    "JavaScript",
    "SQL",
    "Git",
    "CSS",
    "FastAPI",
    "HTML",
    "Proatividade",
    "Trabalho em equipe",
    "Comunicação"
];

function listarHabilidades() {

    let resultado = "";

    for (let habilidade of habilidades) {

        if (
            habilidade === "Python" ||
            habilidade === "JavaScript" ||
            habilidade === "SQL" ||
            habilidade === "Git" ||
            habilidade === "CSS" ||
            habilidade === "FastAPI" ||
            habilidade === "HTML"
        ) {

            resultado += `
                <p>${habilidade} - Hard Skill</p>
            `;

        } else {

            resultado += `
                <p>${habilidade} - Soft Skill</p>
            `;
        }
    }

    return resultado;
}

function exibirHabilidades() {

    document.getElementById("habilidades").innerHTML =
        listarHabilidades();
}

/* MANIPULAÇÃO DE DADOS */

const inputHabilidade =
    document.getElementById("novaHabilidade");

const btnAdicionarHabilidade =
    document.getElementById("btnAdicionarHabilidade");

const mensagemHabilidade =
    document.getElementById("mensagemHabilidade");

btnAdicionarHabilidade.addEventListener("click", function () {

    let habilidadeDigitada =
        inputHabilidade.value.trim();

    if (habilidadeDigitada === "") {

        mensagemHabilidade.innerText =
            "Digite uma habilidade válida.";

        mensagemHabilidade.style.color = "red";

        return;
    }

    if (habilidades.includes(habilidadeDigitada)) {

        mensagemHabilidade.innerText =
            "Essa habilidade já existe.";

        mensagemHabilidade.style.color = "orange";

        return;
    }

    habilidades.push(habilidadeDigitada);

    habilidades.sort();

    exibirHabilidades();

    mensagemHabilidade.innerText =
        "Habilidade adicionada com sucesso!";

    mensagemHabilidade.style.color = "#22c55e";

    inputHabilidade.value = "";
});


let projetos = [

    {
        nome: "Sistema de estacionamento",

        tecnologias: [
            "Python",
            "SQLite",
            "Tkinter"
        ],

        descricao:
            "Aplicação para gerenciamento de estacionamento."
    },

    {
        nome: "Controle de gastos",

        tecnologias: [
            "Python",
            "SQLite"
        ],

        descricao:
            "Sistema de controle financeiro."
    },

    {
        nome: "API de clientes",

        tecnologias: [
            "FastAPI",
            "SQLAlchemy"
        ],

        descricao:
            "API para gerenciamento de clientes."
    }
];

function listarProjetos() {

    let resultado = "";

    for (let projeto of projetos) {

        resultado += `
            <h2>${projeto.nome}</h2>

            <p>${projeto.descricao}</p>

            <p>
                Tecnologias:
                ${projeto.tecnologias.join(", ")}
            </p>
        `;
    }

    return resultado;
}

function exibirProjetos() {

    document.getElementById("projetos").innerHTML =
        listarProjetos();
}

function iniciar() {

    exibirTempoRestante();

    exibirInformacoes();

    obterDiaSemana();

    exibirDiaSemana();

    exibirHabilidades();

    exibirProjetos();
}

iniciar();

});