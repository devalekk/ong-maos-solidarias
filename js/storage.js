export function salvarPreferenciaParticipacao(valor) {

    const dados = {
        participacao: valor
    };

    localStorage.setItem(
        "preferenciaONG",
        JSON.stringify(dados)
    );
}


export function carregarPreferenciaParticipacao() {

    const dadosSalvos =
        localStorage.getItem("preferenciaONG");

    if (!dadosSalvos) {
        return null;
    }

    try {

        return JSON.parse(dadosSalvos);

    } catch (erro) {

        console.error(
            "Erro ao recuperar dados do localStorage:",
            erro
        );

        return null;
    }
}


export function restaurarPreferenciaParticipacao() {

    const dados =
        carregarPreferenciaParticipacao();

    const select =
        document.querySelector("#participacao");

    if (
        select &&
        dados &&
        dados.participacao
    ) {

        select.value =
            dados.participacao;
    }
}


/* ========================================
   ALTO CONTRASTE
   ======================================== */

export function salvarPreferenciaContraste(ativo) {

    localStorage.setItem(
        "altoContraste",
        JSON.stringify(ativo)
    );
}


export function carregarPreferenciaContraste() {

    const preferencia =
        localStorage.getItem("altoContraste");

    if (preferencia === null) {
        return false;
    }

    try {

        return JSON.parse(preferencia);

    } catch (erro) {

        console.error(
            "Erro ao recuperar preferência de contraste:",
            erro
        );

        return false;
    }
}