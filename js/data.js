export function mostrarDataAtualizacao() {

    const elementoData =
        document.querySelector("#data-atualizacao");

    if (!elementoData) {
        return;
    }

    if (typeof window.dayjs !== "function") {

        console.error(
            "A biblioteca Day.js não foi carregada."
        );

        elementoData.textContent =
            "Data de atualização indisponível.";

        return;
    }

    const dataAtual =
        window.dayjs().format(
            "DD/MM/YYYY HH:mm"
        );

    elementoData.textContent =
        "Última atualização: " + dataAtual;
}