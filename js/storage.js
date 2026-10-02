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