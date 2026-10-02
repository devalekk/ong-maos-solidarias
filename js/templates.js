const projetos = [
    {
        badge: "Projeto ativo",
        classeBadge: "badge-azul",
        titulo: "Nossos projetos",
        descricao:
            "A ONG Mãos Solidárias realiza ações sociais para ajudar pessoas e comunidades em situação de vulnerabilidade."
    },

    {
        badge: "Doação",
        classeBadge: "badge-verde",
        titulo: "Campanha de doação",
        descricao:
            "Arrecadamos alimentos, roupas e outros itens para ajudar famílias que precisam de apoio."
    },

    {
        badge: "Voluntariado",
        classeBadge: "badge-roxo",
        titulo: "Trabalho voluntário",
        descricao:
            "Os voluntários podem participar das campanhas, eventos e ações promovidas pela ONG."
    }
];


function criarCardProjeto(projeto) {

    return `
        <section class="card-projeto">

            <span class="badge ${projeto.classeBadge}">
                ${projeto.badge}
            </span>

            <h2>
                ${projeto.titulo}
            </h2>

            <p>
                ${projeto.descricao}
            </p>

        </section>
    `;
}


export const templates = {

    inicio: `
        <section>

            <h2>Sobre a ONG</h2>

            <picture>

                <source
                    srcset="../imagens/ong.png"
                    type="image/png"
                >

                <img
                    src="../imagens/ong.jpg"
                    alt="Voluntários da ONG Mãos Solidárias participando de uma ação social"
                >

            </picture>

            <p>
                A ONG Mãos Solidárias desenvolve ações sociais
                para ajudar pessoas e comunidades que precisam
                de apoio.
            </p>

        </section>


        <section>

            <h2>Contato</h2>

            <p>
                Telefone: (99) 99999-9999
            </p>

            <p>
                E-mail: contato@exemplo.org
            </p>

            <p>
                Endereço: Rua Exemplo, 100 - Centro
            </p>

        </section>
    `,


    projetos: `

        ${projetos.map(criarCardProjeto).join("")}

        <section>

            <h2>Ajude nossa ONG</h2>

            <p>
                Conheça as formas de contribuir com nossas ações.
            </p>

            <a
                href="#modal-ajuda"
                class="botao-modal"
            >
                Saiba como ajudar
            </a>

        </section>


        <div
            id="modal-ajuda"
            class="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal"
        >

            <div class="modal-conteudo">

                <a
                    href="#projetos"
                    class="modal-fechar"
                    aria-label="Fechar modal"
                >
                    ×
                </a>

                <h2 id="titulo-modal">
                    Como ajudar a ONG
                </h2>

                <p>
                    Você pode colaborar realizando doações
                    ou participando como voluntário nas ações
                    da ONG Mãos Solidárias.
                </p>

                <a
                    href="#cadastro"
                    data-rota="cadastro"
                    class="botao-modal"
                >
                    Quero participar
                </a>

            </div>

        </div>
    `,


    cadastro: `
        <section>

            <h2>
                Cadastro de colaborador
            </h2>

            <p>
                Preencha o formulário abaixo para participar
                das ações da ONG Mãos Solidárias.
            </p>

            <div
                class="alerta alerta-info"
                role="alert"
            >
                Preencha todos os campos obrigatórios
                antes de enviar o cadastro.
            </div>


            <form
                id="form-cadastro"
                novalidate
            >

                <fieldset>

                    <legend>
                        Dados pessoais
                    </legend>


                    <label for="nome">
                        Nome:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                    >


                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        required
                    >


                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    >


                    <label for="nascimento">
                        Data de nascimento:
                    </label>

                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>
                        Contato e endereço
                    </legend>


                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(99) 99999-9999"
                        pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                        required
                    >


                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        required
                    >


                    <label for="endereco">
                        Endereço:
                    </label>

                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                    >


                    <label for="cidade">
                        Cidade:
                    </label>

                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                    >


                    <label for="estado">
                        Estado:
                    </label>

                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>
                        Participação
                    </legend>

                    <label for="participacao">
                        Como deseja participar?
                    </label>

                    <select
                        id="participacao"
                        name="participacao"
                        required
                    >

                        <option value="">
                            Selecione
                        </option>

                        <option value="voluntario">
                            Voluntário
                        </option>

                        <option value="doador">
                            Doador
                        </option>

                    </select>

                </fieldset>


                <button type="submit">
                    Enviar cadastro
                </button>

            </form>

        </section>
    `
};