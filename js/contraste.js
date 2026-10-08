import {
    salvarPreferenciaContraste,
    carregarPreferenciaContraste
} from "./storage.js";


export function configurarAltoContraste() {

    const botao =
        document.querySelector("#botao-contraste");

    if (!botao) {
        return;
    }


    const preferenciaSalva =
        carregarPreferenciaContraste();


    aplicarContraste(
        preferenciaSalva === true
    );


    botao.addEventListener(
        "click",
        function () {

            const ativo =
                !document.body.classList.contains(
                    "alto-contraste"
                );


            aplicarContraste(ativo);


            salvarPreferenciaContraste(
                ativo
            );
        }
    );


    function aplicarContraste(ativo) {

        document.body.classList.toggle(
            "alto-contraste",
            ativo
        );


        botao.setAttribute(
            "aria-pressed",
            String(ativo)
        );


        if (ativo) {

            botao.textContent =
                "Desativar alto contraste";

        } else {

            botao.textContent =
                "Ativar alto contraste";
        }
    }
}