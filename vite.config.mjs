import { defineConfig } from "vite";
import { minify } from "html-minifier-terser";


function minificarHtml() {

    return {

        name: "minificar-html",

        enforce: "post",


        async generateBundle(_, bundle) {

            for (
                const arquivo of Object.values(bundle)
            ) {

                if (
                    arquivo.type === "asset" &&
                    arquivo.fileName.endsWith(".html")
                ) {

                    arquivo.source =
                        await minify(
                            String(arquivo.source),
                            {
                                collapseWhitespace: true,
                                removeComments: true,
                                removeRedundantAttributes: true,
                                removeEmptyAttributes: true,
                                minifyCSS: true,
                                minifyJS: true
                            }
                        );
                }
            }
        }
    };
}


export default defineConfig({

    /*
       O index.html está dentro da pasta html.
    */
    root: "html",


    /*
       Permite que os caminhos funcionem
       corretamente depois do deploy.
    */
    base: "./",


    plugins: [
        minificarHtml()
    ],


    build: {

        /*
           A versão final será criada
           na pasta dist.
        */
        outDir: "../dist",

        /*
           Limpa a build antiga antes
           de gerar uma nova.
        */
        emptyOutDir: true,

        /*
           Minifica JavaScript.
        */
        minify: true,

        /*
           Minifica CSS.
        */
        cssMinify: true,

        /*
           Mantém os assets organizados.
        */
        assetsDir: "assets"
    }
});