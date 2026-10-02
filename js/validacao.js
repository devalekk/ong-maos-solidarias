import {
    salvarPreferenciaParticipacao
} from "./storage.js";


export function configurarValidacaoFormulario() {

    document.addEventListener(
        "input",
        function (evento) {

            const campo =
                evento.target;

            if (
                !campo.closest("#form-cadastro")
            ) {
                return;
            }

            validarCampo(campo);
        }
    );


    document.addEventListener(
        "submit",
        function (evento) {

            const formulario =
                evento.target;

            if (
                formulario.id !==
                "form-cadastro"
            ) {
                return;
            }


            evento.preventDefault();


            const campos =
                formulario.querySelectorAll(
                    "input, select"
                );


            let formularioValido =
                true;


            campos.forEach(
                function (campo) {

                    const valido =
                        validarCampo(campo);

                    if (!valido) {
                        formularioValido =
                            false;
                    }
                }
            );


            if (!formularioValido) {

                mostrarMensagemGeral(
                    formulario,
                    "Corrija os campos destacados antes de enviar.",
                    "erro"
                );

                return;
            }


            const participacao =
                formulario.querySelector(
                    "#participacao"
                ).value;


            salvarPreferenciaParticipacao(
                participacao
            );


            mostrarMensagemGeral(
                formulario,
                "Dados validados e preferência salva com sucesso!",
                "sucesso"
            );
        }
    );
}


function validarCampo(campo) {

    removerErroCampo(campo);


    if (!campo.checkValidity()) {

        campo.classList.remove(
            "campo-valido"
        );

        campo.classList.add(
            "campo-invalido"
        );

        campo.setAttribute(
            "aria-invalid",
            "true"
        );


        const mensagem =
            document.createElement(
                "small"
            );

        mensagem.className =
            "mensagem-erro-campo";

        mensagem.textContent =
            "Preencha este campo corretamente.";


        campo.insertAdjacentElement(
            "afterend",
            mensagem
        );


        return false;
    }


    campo.classList.remove(
        "campo-invalido"
    );

    campo.classList.add(
        "campo-valido"
    );

    campo.setAttribute(
        "aria-invalid",
        "false"
    );


    return true;
}


function removerErroCampo(campo) {

    const proximoElemento =
        campo.nextElementSibling;


    if (
        proximoElemento &&
        proximoElemento.classList.contains(
            "mensagem-erro-campo"
        )
    ) {

        proximoElemento.remove();
    }
}


function mostrarMensagemGeral(
    formulario,
    mensagem,
    tipo
) {

    const mensagemAnterior =
        document.querySelector(
            "#mensagem-formulario"
        );


    if (mensagemAnterior) {

        mensagemAnterior.remove();
    }


    const aviso =
        document.createElement(
            "div"
        );


    aviso.id =
        "mensagem-formulario";


    aviso.setAttribute(
        "role",
        "status"
    );


    aviso.textContent =
        mensagem;


    if (tipo === "erro") {

        aviso.className =
            "toast toast-erro";

    } else {

        aviso.className =
            "toast toast-sucesso";
    }


    formulario.insertAdjacentElement(
        "afterend",
        aviso
    );
}