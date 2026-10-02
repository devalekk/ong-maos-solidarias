import {
    mostrarDataAtualizacao
} from "./data.js";
import {
    templates
} from "./templates.js";


import {
    configurarValidacaoFormulario
} from "./validacao.js";


import {
    restaurarPreferenciaParticipacao
} from "./storage.js";


const app =
    document.querySelector("#app");


const rotas = [
    "inicio",
    "projetos",
    "cadastro"
];


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
}


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

        } else {

            window.location.hash =
                rota;
        }


        const menuToggle =
            document.querySelector(
                "#menu-toggle"
            );


        if (menuToggle) {

            menuToggle.checked =
                false;
        }
    }
);


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
        }
    }
);


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


/* Ativa a validação do formulário */
configurarValidacaoFormulario();

mostrarDataAtualizacao();