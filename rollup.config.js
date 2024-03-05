import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import license from "rollup-plugin-license";

const banner = `
@preserve
Validador de CPF v<%= pkg.version %>
https://github.com/ganes369/validador-cpf
Copyright (c) 2024-present JS
Released under the MIT license
`;

export default {
  type: "esnext", // Adiciona type: 'module' aqui
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.es.js",
      format: "es",
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
    },

    {
      file: "dist/index.js", // Substitua com o nome do arquivo de saída desejado
      format: "umd", // ou 'es' se preferir suportar apenas ES modules
      name: "cpf", // Substitua com o nome global da sua biblioteca
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // resolve dependências de node_modules
    commonjs({
      include: "node_modules/**",
    }), // converte módulos CommonJS para ES6
    babel({
      // Configuração do Babel
      babelHelpers: "bundled", // Tipo de helper do Babel
      exclude: "node_modules/**", // Exclui arquivos dentro de node_modules
      presets: [
        [
          "@babel/preset-env",
          {
            // Preset do Babel para compatibilidade
            targets: "> 0.25%, not dead", // Configuração de compatibilidade
          },
        ],
      ],
    }),
    license({
      banner,
    }),
    typescript({
      // Configurações do plugin TypeScript
      include: ["src/**/*.ts"], // Inclui todos os arquivos TypeScript do diretório src
      declaration: true, // Gera arquivos de definição de tipos (.d.ts)
      declarationDir: "dist", // Diretório onde os arquivos de definição de tipos serão gerados
      // forceConsistentCasingInFileNames: true, // Opcional: Força a consistência de maiúsculas e minúsculas nos nomes dos arquivos de definição de tipos
    }), // Use o plugin para processar arquivos TypeScript
  ],
};
