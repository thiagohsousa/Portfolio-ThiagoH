'use strict';

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       DADOS PRINCIPAIS
    ======================================== */

    const NOME = "Thiago Henrique";

    let tituloProfissional =
        "Backend Developer";

    let minhaBio =
        "Sou estudante de Desenvolvimento de Sistemas com foco em desenvolvimento back-end, criando aplicações modernas, APIs REST e soluções voltadas para organização e processamento de dados. Tenho experiência prática com Python, JavaScript, FastAPI, SQL e integração com bancos de dados, sempre buscando escrever códigos limpos, organizados e escaláveis.";

    let anoIngresso = 2025;

    let anoFormatura = 2026;

    let anoAtual =
        new Date().getFullYear();

    let anosEstudo =
        anoAtual - anoIngresso;

    /* ========================================
       DARK / LIGHT MODE
    ======================================== */

    const botaoTema =
        document.getElementById(
            "modoEscuroClaro"
        );

    botaoTema.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );

            if (
                document.body.classList.contains(
                    "light-mode"
                )
            ) {

                botaoTema.innerHTML = "Light";

            } else {

                botaoTema.innerHTML = "Dark";
            }
        }
    );

    /* ========================================
       EXIBIR INFORMAÇÕES
    ======================================== */

    function exibirInformacoes() {

        document.getElementById(
            "meuNome"
        ).innerText = NOME;

        document.getElementById(
            "tituloProfissional"
        ).innerText = tituloProfissional;

        document.getElementById(
            "minhaBio"
        ).innerText = minhaBio;

        document.getElementById(
            "anoIngresso"
        ).innerHTML = `
            <p>
                📚 Estudando desenvolvimento há
                ${anosEstudo} ano(s)
            </p>
        `;

        document.getElementById(
            "tempoRestante"
        ).innerHTML = `
            <p>
                🎓 Formatura prevista:
                ${anoFormatura}
            </p>
        `;
    }

    /* ========================================
       HABILIDADES
    ======================================== */

    const habilidades = [

        {
            nome: "Python",
            icone: "devicon-python-plain"
        },

        {
            nome: "JavaScript",
            icone: "devicon-javascript-plain"
        },

        {
            nome: "FastAPI",
            icone: "devicon-fastapi-plain"
        },

        {
            nome: "HTML5",
            icone: "devicon-html5-plain"
        },

        {
            nome: "CSS3",
            icone: "devicon-css3-plain"
        },

        {
            nome: "Git",
            icone: "devicon-git-plain"
        },

        {
            nome: "SQL",
            icone: "devicon-mysql-plain"
        }
    ];

    function listarHabilidades() {

        let resultado = "";

        for (let habilidade of habilidades) {

            resultado += `

                <div class="skill-card">

                    <i class="${habilidade.icone}"></i>

                    <h3>
                        ${habilidade.nome}
                    </h3>

                </div>
            `;
        }

        return resultado;
    }

    function exibirHabilidades() {

        document.getElementById(
            "habilidades"
        ).innerHTML = listarHabilidades();
    }

    /* ========================================
       CERTIFICAÇÕES
    ======================================== */

  const certificacoes = [

    {
        titulo:"Introdução à Programação Orientada a Objetos (POO)",

        instituicao:"Fundação Bradesco",

        descricao:
        "Conceitos fundamentais de orientação a objetos, incluindo classes, objetos, encapsulamento e herança.",

        imagem:
        "https://tse3.mm.bing.net/th/id/OIP.CivRTg3HTixxeagr8YE8DwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        link:
        "https://drive.google.com/file/d/1yUCqwlWXrBxG-DlwyrSQwH4lG-MWBhWQ/view?usp=sharing"
    },

    {
        titulo:"Linguagem de Programação Python - Básico",

        instituicao:"Fundação Bradesco",

        descricao:
        "Fundamentos da linguagem Python, lógica de programação, estruturas condicionais e repetição.",

        imagem:
        "https://tse3.mm.bing.net/th/id/OIP.CivRTg3HTixxeagr8YE8DwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        link:
        "https://drive.google.com/file/d/1fQJxcQWABZ8WdpM37zL-2HWl776CHnsF/view?usp=sharing"
    },

    {
        titulo:"Desenvolvimento Orientado a Objetos Utilizando Python",

        instituicao:"Fundação Bradesco",

        descricao:
        "Aplicação prática de orientação a objetos utilizando Python e modularização de código.",

        imagem:
        "https://tse3.mm.bing.net/th/id/OIP.CivRTg3HTixxeagr8YE8DwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        link:
        "https://drive.google.com/file/d/1oFneiGsEhUvXkmzQ38Qi1R_p78oC4hNA/view"
    }

];
    let mostrandoTodosCertificados = false;

  function listarCertificacoes(){

    let resultado = "";

    let lista =
        mostrandoTodosCertificados
        ? certificacoes
        : certificacoes.slice(0,2);

    for(let cert of lista){

        resultado += `

            <a
                href="${cert.link}"
                target="_blank"
                class="cert-card"
            >

                <img
                    src="${cert.imagem}"
                    alt="${cert.instituicao}"
                    class="cert-logo"
                >

                <h3>
                    ${cert.titulo}
                </h3>

                <p>
                    ${cert.instituicao}
                </p>

                <span>
                    ${cert.descricao}
                </span>

            </a>
        `;
    }

    return resultado;
}

    function exibirCertificacoes() {

        document.getElementById(
            "certificacoes-grid"
        ).innerHTML = listarCertificacoes();
    }

    document.getElementById(
        "btnVerCertificados"
    ).addEventListener(
        "click",
        function () {

            mostrandoTodosCertificados =
                !mostrandoTodosCertificados;

            exibirCertificacoes();

            this.innerText =
                mostrandoTodosCertificados
                    ? "Ver Menos"
                    : "Ver Mais Certificações";
        }
    );

    /* ========================================
       PROJETOS
    ======================================== */

    const projetos = [

        {
            nome: "Sistema Financeiro",

            descricao:
                "Sistema para controle financeiro com receitas e despesas.",

            tecnologias:
                ["Python", "SQLite", "Tkinter"],

            imagem:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f",

            repo:
                "https://github.com/thiagohsousa/expense_Control"
        },

        {
            nome: "API de Clientes",

            descricao:
                "API REST para gerenciamento de clientes.",

            tecnologias:
                ["FastAPI", "SQLAlchemy", "SQLite"],

            imagem:
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c",

            repo:
                "https://github.com/thiagohsousa/AuthFlow-API"
        },

        {
            nome: "Sistema de Estacionamento",

            descricao:
                "Controle completo para redes de estacionamento",

            tecnologias:
                ["Python", "Tkinter", "SQLite", "Fpdf"],

            imagem:
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",

            repo:
                "https://github.com/thiagohsousa/divagas"
        },

        {
            nome: "Task-Manager",

            descricao:
                "Sistema de gerenciamento de tarefas do dia a dia.",

            tecnologias:
                ["HTML", "Python", "SQLite", "FastApi", "SQLAlchemy"],

            imagem:
                "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",

            repo:
                "https://github.com/thiagohsousa/task-manager"
        }
    ];

    let quantidadeProjetos = 2;

    function listarProjetos() {

        let resultado = "";

        for (let i = 0; i < quantidadeProjetos; i++) {

            const projeto = projetos[i];

            if (!projeto) continue;

            resultado += `

                <a 
                    class="projeto-card"
                    href="${projeto.repo}"
                    target="_blank"
                >

                    <img 
                        src="${projeto.imagem}" 
                        alt="${projeto.nome}"
                    >

                    <div class="projeto-info">

                        <h3>
                            ${projeto.nome}
                        </h3>

                        <p>
                            ${projeto.descricao}
                        </p>

                        <div class="techs">

                            ${projeto.tecnologias.join(" • ")}

                        </div>

                    </div>

                </a>
            `;
        }

        return resultado;
    }

    function exibirProjetos() {

        document.getElementById(
            "projetos"
        ).innerHTML = listarProjetos();
    }

    document.getElementById(
    "btnVerMais"
).addEventListener(
    "click",
    function(){

        if(
            quantidadeProjetos >= projetos.length
        ){

            quantidadeProjetos = 2;

            this.innerText =
            "Ver Mais Projetos";

        }else{

            quantidadeProjetos += 2;

            if(
                quantidadeProjetos >= projetos.length
            ){

                quantidadeProjetos =
                projetos.length;

                this.innerText =
                "Ver Menos";

            }
        }

        exibirProjetos();
    }
);

    /* ========================================
       ÁREA DEV
    ======================================== */

    const resultadoQuiz =
        document.getElementById(
            "resultado-quiz"
        );

    document.getElementById(
        "btn-api"
    ).addEventListener(
        "click",
        function () {

            resultadoQuiz.innerHTML = `

                <h3>
                    ⚙️ APIs & Backend
                </h3>

                <p>
                    Você gosta de lógica,
                    integração de sistemas
                    e desenvolvimento de APIs.
                </p>
            `;
        }
    );

    document.getElementById(
        "btn-banco"
    ).addEventListener(
        "click",
        function () {

            resultadoQuiz.innerHTML = `

                <h3>
                    🗄 Banco de Dados
                </h3>

                <p>
                    Você gosta de modelagem,
                    organização de dados
                    e consultas SQL.
                </p>
            `;
        }
    );

    document.getElementById(
        "btn-layout"
    ).addEventListener(
        "click",
        function () {

            resultadoQuiz.innerHTML = `

                <h3>
                    🎨 Front-End
                </h3>

                <p>
                    Você gosta de interfaces,
                    animações e experiência
                    do usuário.
                </p>
            `;
        }
    );

    /* ========================================
       FORMULÁRIO
    ======================================== */

    const formulario =
        document.getElementById(
            "formulario"
        );

    /* ========================================
       GITHUB API
    ======================================== */

    async function buscarGithub() {

        try {

            const resposta =
                await fetch(
                    "https://api.github.com/users/thiagohsousa"
                );

            const dados =
                await resposta.json();

            document.getElementById(
                "github-card"
            ).innerHTML = `

                <img
                    src="${dados.avatar_url}"
                    alt="GitHub"
                >

                <h3>
                    ${dados.name ?? "Thiago Henrique"}
                </h3>

                <p>
                    Seguidores:
                    <strong>
                        ${dados.followers}
                    </strong>
                </p>

                <p>
                    Repositórios:
                    <strong>
                        ${dados.public_repos}
                    </strong>
                </p>

                <a
                    href="${dados.html_url}"
                    target="_blank"
                    class="btn"
                >
                    Ver perfil
                </a>
            `;

        } catch (erro) {

            document.getElementById(
                "github-card"
            ).innerHTML = `
                <p>
                    Erro ao carregar GitHub
                </p>
            `;
        }
    }

    /* ========================================
       EMAILJS
    ======================================== */

    emailjs.init(
        "xbc8ufv16EA0Nux4k"
    );

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const nome =
                document.getElementById(
                    "nome"
                ).value;

            const email =
                document.getElementById(
                    "email"
                ).value;

            const mensagem =
                document.getElementById(
                    "mensagem"
                ).value;

            emailjs.send(
                "service_1afdh9r",
                "template_ywirwno",
                {
                    nome: nome,
                    email: email,
                    mensagem: mensagem
                }
            )

                .then(function () {

                    alert(
                        "Mensagem enviada com sucesso!"
                    );

                    formulario.reset();

                })

                .catch(function (error) {

                    alert(
                        "Erro ao enviar mensagem."
                    );

                    console.log(error);

                });

        }
    );

    /* ========================================
       INICIAR
    ======================================== */

    function iniciar() {

        exibirInformacoes();

        exibirHabilidades();

        exibirCertificacoes();

        exibirProjetos();

        buscarGithub();
    }

    iniciar();

});