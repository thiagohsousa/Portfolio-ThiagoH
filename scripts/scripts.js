'use strict'; 
// Ativa o modo estrito do JavaScript.
// Ajuda a evitar erros e más práticas no código.

document.addEventListener("DOMContentLoaded", function () {
// Espera o HTML carregar completamente antes de executar o JS.

    /* ========================================
       DADOS PRINCIPAIS
    ======================================== */

    const NOME = "Thiago Henrique";
    // Nome que será exibido no portfólio.

    let tituloProfissional =
        "Backend Developer";
    // Cargo/profissão exibida no site.

    let minhaBio =
        "Sou estudante de Desenvolvimento de Sistemas com foco em desenvolvimento back-end, criando aplicações modernas, APIs REST e soluções voltadas para organização e processamento de dados. Tenho experiência prática com Python, JavaScript, FastAPI, SQL e integração com bancos de dados, sempre buscando escrever códigos limpos, organizados e escaláveis.";
    // Texto da biografia/apresentação.

    let anoIngresso = 2025;
    // Ano em que começou os estudos.

    let anoFormatura = 2026;
    // Ano previsto de formatura.

    let anoAtual =
        new Date().getFullYear();
    // Obtém automaticamente o ano atual do sistema.

    let anosEstudo =
        anoAtual - anoIngresso;
    // Calcula quantos anos de estudo já se passaram.

    /* ========================================
       DARK / LIGHT MODE
    ======================================== */

    const botaoTema =
        document.getElementById(
            "modoEscuroClaro"
        );
    // Seleciona o botão responsável pela troca de tema.

    botaoTema.addEventListener(
        "click",
        () => {
        // Evento executado ao clicar no botão.

            document.body.classList.toggle(
                "light-mode"
            );
            // Adiciona ou remove a classe "light-mode".

            if (
                document.body.classList.contains(
                    "light-mode"
                )
            ) {
            // Verifica se o body possui a classe "light-mode".

                botaoTema.innerHTML = "Light";
                // Muda o texto do botão para "Light".

            } else {

                botaoTema.innerHTML = "Dark";
                // Muda o texto do botão para "Dark".
            }
        }
    );

    /* ========================================
       EXIBIR INFORMAÇÕES
    ======================================== */

    function exibirInformacoes() {
    // Função responsável por mostrar informações pessoais na página.

        document.getElementById(
            "meuNome"
        ).innerText = NOME;
        // Insere o nome no elemento HTML.

        document.getElementById(
            "tituloProfissional"
        ).innerText = tituloProfissional;
        // Insere o título profissional.

        document.getElementById(
            "minhaBio"
        ).innerText = minhaBio;
        // Insere a biografia.

        document.getElementById(
            "anoIngresso"
        ).innerHTML = `
            <p>
                📚 Estudando desenvolvimento há
                ${anosEstudo} ano(s)
            </p>
        `;
        // Mostra quantos anos de estudo já possui.

        document.getElementById(
            "tempoRestante"
        ).innerHTML = `
            <p>
                🎓 Formatura prevista:
                ${anoFormatura}
            </p>
        `;
        // Mostra a previsão de formatura.
    }

    /* ========================================
       HABILIDADES
    ======================================== */

    const habilidades = [
    // Array contendo as habilidades e seus ícones.

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
    // Cria dinamicamente os cards das habilidades.

        let resultado = "";
        // Variável que armazenará o HTML.

        for (let habilidade of habilidades) {
        // Percorre todas as habilidades do array.

            resultado += `

                <div class="skill-card">

                    <i class="${habilidade.icone}"></i>

                    <h3>
                        ${habilidade.nome}
                    </h3>

                </div>
            `;
            // Adiciona um card de habilidade ao HTML.
        }

        return resultado;
        // Retorna todo o HTML criado.
    }

    function exibirHabilidades() {
    // Exibe as habilidades na tela.

        document.getElementById(
            "habilidades"
        ).innerHTML = listarHabilidades();
        // Insere os cards dentro do elemento HTML.
    }

    /* ========================================
       CERTIFICAÇÕES
    ======================================== */

  const certificacoes = [
  // Array contendo as certificações.

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
    // Controla se todos os certificados serão exibidos.

  function listarCertificacoes(){
  // Gera os cards das certificações.

    let resultado = "";

    let lista =
        mostrandoTodosCertificados
        ? certificacoes
        : certificacoes.slice(0,2);
    // Se true mostra todos.
    // Se false mostra apenas os 2 primeiros.

    for(let cert of lista){
    // Percorre a lista de certificados.

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
        // Cria o HTML do certificado.
    }

    return resultado;
    // Retorna o HTML final.
}

    function exibirCertificacoes() {
    // Exibe as certificações na tela.

        document.getElementById(
            "certificacoes-grid"
        ).innerHTML = listarCertificacoes();
    }

    document.getElementById(
        "btnVerCertificados"
    ).addEventListener(
        "click",
        function () {
        // Evento do botão "Ver Mais".

            mostrandoTodosCertificados =
                !mostrandoTodosCertificados;
            // Alterna entre true e false.

            exibirCertificacoes();
            // Atualiza os certificados exibidos.

            this.innerText =
                mostrandoTodosCertificados
                    ? "Ver Menos"
                    : "Ver Mais Certificações";
            // Altera o texto do botão.
        }
    );

    /* ========================================
       PROJETOS
    ======================================== */

    const projetos = [
    // Array contendo os projetos do portfólio.

        {
            nome: "YouResum-IA",

            descricao:
                "Resumidor inteligente de vídeos do YouTube com IA (Groq/Llama 3), extração de transcrições e fallback de resiliência.",

            tecnologias:
                ["Python", "Flask", "Groq API", "yt-dlp"],

            imagem:
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",

            repo:
                "https://github.com/thiagohsousa/YouResum-IA"
        },

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
    // Quantidade inicial de projetos exibidos.

    function listarProjetos() {
    // Gera os cards dos projetos.

        let resultado = "";

        for (let i = 0; i < quantidadeProjetos; i++) {
        // Percorre os projetos até o limite definido.

            const projeto = projetos[i];

            if (!projeto) continue;
            // Evita erro caso o projeto não exista.

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
            // Cria o HTML do projeto.
        }

        return resultado;
    }

    function exibirProjetos() {
    // Exibe os projetos na tela.

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
        // Se todos os projetos já estiverem aparecendo.

            quantidadeProjetos = 2;
            // Volta para mostrar apenas 2.

            this.innerText =
            "Ver Mais Projetos";

        }else{

            quantidadeProjetos += 2;
            // Mostra mais 2 projetos.

            if(
                quantidadeProjetos >= projetos.length
            ){

                quantidadeProjetos =
                projetos.length;
                // Limita ao máximo de projetos.

                this.innerText =
                "Ver Menos";
                // Altera o texto do botão.

            }
        }

        exibirProjetos();
        // Atualiza os projetos exibidos.
    }
);

    /* ========================================
       ÁREA DEV
    ======================================== */

    const resultadoQuiz =
        document.getElementById(
            "resultado-quiz"
        );
    // Elemento onde o resultado do quiz será exibido.

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
            // Mostra resultado relacionado a backend.
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
            // Mostra resultado relacionado a banco de dados.
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
            // Mostra resultado relacionado a front-end.
        }
    );

    /* ========================================
       FORMULÁRIO
    ======================================== */

    const formulario =
        document.getElementById(
            "formulario"
        );
    // Seleciona o formulário de contato.

    /* ========================================
       GITHUB API
    ======================================== */

    async function buscarGithub() {
    // Função assíncrona para buscar dados do GitHub.

        try {

            const resposta =
                await fetch(
                    "https://api.github.com/users/thiagohsousa"
                );
            // Faz requisição para API do GitHub.

            const dados =
                await resposta.json();
            // Converte resposta em JSON.

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
            // Exibe os dados do GitHub no card.

        } catch (erro) {
        // Captura possíveis erros da API.

            document.getElementById(
                "github-card"
            ).innerHTML = `
                <p>
                    Erro ao carregar GitHub
                </p>
            `;
            // Mostra mensagem de erro.
        }
    }

    /* ========================================
       EMAILJS
    ======================================== */

    emailjs.init(
        "xbc8ufv16EA0Nux4k"
    );
    // Inicializa o EmailJS com a chave pública.

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();
            // Impede o recarregamento da página.

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
            // Captura os valores digitados no formulário.

            emailjs.send(
                "service_1afdh9r",
                "template_ywirwno",
                {
                    nome: nome,
                    email: email,
                    mensagem: mensagem
                }
            )
            // Envia os dados usando EmailJS.

                .then(function () {

                    alert(
                        "Mensagem enviada com sucesso!"
                    );
                    // Mensagem de sucesso.

                    formulario.reset();
                    // Limpa o formulário.

                })

                .catch(function (error) {

                    alert(
                        "Erro ao enviar mensagem."
                    );
                    // Mensagem de erro.

                    console.log(error);
                    // Mostra erro no console.

                });

        }
    );

    /* ========================================
       INICIAR
    ======================================== */

    function iniciar() {
    // Função principal do sistema.

        exibirInformacoes();
        // Exibe informações pessoais.

        exibirHabilidades();
        // Exibe habilidades.

        exibirCertificacoes();
        // Exibe certificações.

        exibirProjetos();
        // Exibe projetos.

        buscarGithub();
        // Busca informações do GitHub.
    }

    iniciar();
    // Inicia todas as funções do sistema.
});