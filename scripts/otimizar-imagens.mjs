import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const pastaImagens = "./imagens";

const entrada = `${pastaImagens}/ong.png`;

const saida = `${pastaImagens}/ong.webp`;


await mkdir(
    pastaImagens,
    {
        recursive: true
    }
);


try {

    const informacoes =
        await sharp(entrada).metadata();


    console.log(
        `Imagem original: ${informacoes.width}x${informacoes.height}`
    );


    await sharp(entrada)

        .resize({
            width: 1200,
            withoutEnlargement: true
        })

        .webp({
            quality: 80
        })

        .toFile(saida);


    console.log(
        "Imagem otimizada criada com sucesso:"
    );

    console.log(saida);


} catch (erro) {

    console.error(
        "Erro ao otimizar a imagem:",
        erro
    );

    process.exit(1);
}