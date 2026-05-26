'use strict';
// Ativa o modo estrito do JavaScript.
// Isso ajuda a evitar erros comuns e torna o código mais seguro.

document.addEventListener("DOMContentLoaded", function () {
// Espera todo o HTML carregar antes de executar o JavaScript.

    /* ========================================
       DADOS PRINCIPAIS
    ======================================== */

    const NOME = "Thiago Henrique";
    // Define o nome principal do portfólio.

    let tituloProfissional =
        "Backend Developer";
    // Define o cargo/profissão exibido no site.

    let minhaBio =
        "Sou estudante de Desenvolvimento de Sistemas com foco em desenvolvimento back-end, criando aplicações modernas, APIs REST e soluções voltadas para organização e processamento de dados. Tenho experiência prática com Python, JavaScript, FastAPI, SQL e integração com bancos de dados, sempre buscando escrever códigos limpos, organizados e escaláveis.";
    // Texto da biografia do usuário.

    let anoIngresso = 2025;
    // Ano em que começou os estudos.

    let anoFormatura = 2026;
    // Ano previsto de formatura.

    let anoAtual =
        new Date().getFullYear();
    // Pega automaticamente o ano atual do sistema.

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
    // Seleciona o botão responsável por trocar o tema.

    botaoTema.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light-mode"
            );
            // Adiciona ou remove a classe "light-mode" do body.

            if (
                document.body.classList.contains(
                    "light-mode"
                )
            ) {

                botaoTema.innerHTML = "Light";
                // Se estiver no modo claro, altera o texto do botão.

            } else {

                botaoTema.innerHTML = "Dark";
                // Se estiver no modo escuro, altera o texto do botão.
            }
        }
    );

    /* ========================================
       EXIBIR INFORMAÇÕES
    ======================================== */

    function exibirInformacoes() {
    // Função responsável por exibir as informações pessoais na tela.

        document.getElementById(
            "meuNome"
        ).innerText = NOME;
        // Insere o nome no HTML.

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
        // Mostra quantos anos de estudo o usuário possui.

        document.getElementById(
            "tempoRestante"
        ).innerHTML = `
            <p>
                🎓 Formatura prevista:
                ${anoFormatura}
            </p>
        `;
        // Mostra o ano previsto de formatura.
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
    // Cria o HTML das habilidades.

        let resultado = "";

        for (let habilidade of habilidades) {
        // Percorre todas as habilidades.

            resultado += `

                <div class="skill-card">

                    <i class="${habilidade.icone}"></i>

                    <h3>
                        ${habilidade.nome}
                    </h3>

                </div>
            `;
            // Monta cada card de habilidade.
        }

        return resultado;
        // Retorna todo o HTML criado.
    }

    function exibirHabilidades() {
    // Exibe as habilidades no site.

        document.getElementById(
            "habilidades"
        ).innerHTML = listarHabilidades();
    }

    /* ========================================
       CERTIFICAÇÕES
    ======================================== */

    const certificacoes = [
    // Lista de certificações.

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

        // Outros certificados...
    ];

    let mostrandoTodosCertificados = false;
    // Controla se todos os certificados serão exibidos ou não.

    function listarCertificacoes(){
    // Gera o HTML das certificações.

        let resultado = "";

        let lista =
            mostrandoTodosCertificados
            ? certificacoes
            : certificacoes.slice(0,2);
        // Se for true mostra todos.
        // Se for false mostra apenas os 2 primeiros.

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
            // Cria o card do certificado.
        }

        return resultado;
    }

    function exibirCertificacoes() {
    // Exibe as certificações no HTML.

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
            // Inverte true/false.

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
    // Lista de projetos do portfólio.

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
        }

        // Outros projetos...
    ];

    let quantidadeProjetos = 2;
    // Quantidade inicial de projetos exibidos.

    function listarProjetos() {
    // Cria os cards dos projetos.

        let resultado = "";

        for (let i = 0; i < quantidadeProjetos; i++) {

            const projeto = projetos[i];

            if (!projeto) continue;
            // Evita erro caso não exista projeto.

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

                quantidadeProjetos = 2;
                // Volta para apenas 2 projetos.

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

                    this.innerText =
                    "Ver Menos";
                }
            }

            exibirProjetos();
            // Atualiza a lista de projetos.
        }
    );

    /* ========================================
       ÁREA DEV
    ======================================== */

    const resultadoQuiz =
        document.getElementById(
            "resultado-quiz"
        );
    // Elemento onde será exibido o resultado do quiz.

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
            // Exibe resultado relacionado a Backend.
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
    // Busca informações do GitHub usando API.

        try {

            const resposta =
                await fetch(
                    "https://api.github.com/users/thiagohsousa"
                );
            // Faz requisição para API do GitHub.

            const dados =
                await resposta.json();
            // Converte resposta para JSON.

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
            // Exibe informações do GitHub no site.

        } catch (erro) {

            document.getElementById(
                "github-card"
            ).innerHTML = `
                <p>
                    Erro ao carregar GitHub
                </p>
            `;
            // Exibe erro caso a API falhe.
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
            // Impede o formulário de recarregar a página.

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
            // Captura os valores digitados.

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
                // Mostra o erro no console.

            });

        }
    );

    /* ========================================
       INICIAR
    ======================================== */

    function iniciar() {
    // Função principal que inicia tudo.

        exibirInformacoes();

        exibirHabilidades();

        exibirCertificacoes();

        exibirProjetos();

        buscarGithub();
    }

    iniciar();
    // Executa todas as funções iniciais.

});