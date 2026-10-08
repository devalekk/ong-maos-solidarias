import {
    templates
} from "./templates.js";


import {
    configurarValidacaoFormulario
} from "./validacao.js";


import {
    restaurarPreferenciaParticipacao
} from "./storage.js";


import {
    mostrarDataAtualizacao
} from "./data.js";


import {
    configurarAltoContraste
} from "./contraste.js";


const app =
    document.querySelector("#app");


const rotas = [
    "inicio",
    "projetos",
    "cadastro"
];


/* ========================================
   CARREGAMENTO DA SPA
   ======================================== */

function carregarPagina(rota) {

    if (!rotas.includes(rota)) {
        rota = "inicio";
    }


    app.innerHTML =
        templates[rota];


    if (rota === "projetos") {

        app.className =
            "projetos-grid";

    } else if (rota === "cadastro") {

        app.className =
            "cadastro-grid";

    } else {

        app.className =
            "inicio-grid";
    }


    if (rota === "cadastro") {

        restaurarPreferenciaParticipacao();
    }


    atualizarRotaAtiva(rota);
}


/* ========================================
   ROTA ATIVA E ACESSIBILIDADE
   ======================================== */

function atualizarRotaAtiva(rota) {

    const links =
        document.querySelectorAll(
            "[data-rota]"
        );


    links.forEach(function (link) {

        if (
            link.dataset.rota === rota
        ) {

            link.setAttribute(
                "aria-current",
                "page"
            );

        } else {

            link.removeAttribute(
                "aria-current"
            );
        }
    });
}


/* ========================================
   MENU HAMBÚRGUER
   ======================================== */

const botaoMenu =
    document.querySelector("#botao-menu");


const menuLista =
    document.querySelector("#menu-lista");


if (botaoMenu && menuLista) {

    botaoMenu.addEventListener(
        "click",
        function () {

            const aberto =
                menuLista.classList.toggle(
                    "aberto"
                );


            botaoMenu.setAttribute(
                "aria-expanded",
                String(aberto)
            );


            if (aberto) {

                botaoMenu.setAttribute(
                    "aria-label",
                    "Fechar menu de navegação"
                );

            } else {

                botaoMenu.setAttribute(
                    "aria-label",
                    "Abrir menu de navegação"
                );
            }
        }
    );
}


/* Fecha menu com ESC */

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape" &&
            menuLista &&
            menuLista.classList.contains(
                "aberto"
            )
        ) {

            menuLista.classList.remove(
                "aberto"
            );


            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );


            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );


            botaoMenu.focus();
        }
    }
);


/* ========================================
   NAVEGAÇÃO SPA
   ======================================== */

document.addEventListener(
    "click",
    function (evento) {

        const link =
            evento.target.closest(
                "[data-rota]"
            );


        if (!link) {
            return;
        }


        evento.preventDefault();


        const rota =
            link.dataset.rota;


        if (
            window.location.hash ===
            "#" + rota
        ) {

            carregarPagina(rota);

            app.focus();

        } else {

            window.location.hash =
                rota;
        }


        if (menuLista) {

            menuLista.classList.remove(
                "aberto"
            );
        }


        if (botaoMenu) {

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );


            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );
        }
    }
);


/* ========================================
   HISTÓRICO
   ======================================== */

window.addEventListener(
    "hashchange",
    function () {

        const rota =
            window.location.hash.replace(
                "#",
                ""
            );


        if (rotas.includes(rota)) {

            carregarPagina(rota);

            app.focus();
        }
    }
);


/* ========================================
   ROTA INICIAL
   ======================================== */

const rotaInicial =
    window.location.hash.replace(
        "#",
        ""
    );


if (rotas.includes(rotaInicial)) {

    carregarPagina(rotaInicial);

} else {

    carregarPagina("inicio");
}


/* ========================================
   FUNCIONALIDADES
   ======================================== */

configurarValidacaoFormulario();

mostrarDataAtualizacao();

configurarAltoContraste();