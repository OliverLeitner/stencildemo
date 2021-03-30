import { Config } from '@stencil/core';
// below is whats needed for a tailwind implementation
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";
import replace from "postcss-replace";
// using less with stenciljs
// import { less } from '@stencil/less';

const purge = purgecss({
  content: ["./src/**/*.tsx", "./src/index.html"],
  safelist: [':host'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'democomponent',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
  plugins: [
      postcss({
          plugins: [
              tailwindcss("./tailwind.config.js"),
              autoprefixer(),
              replace({ pattern: 'html', data: { replaceAll: ':host' } }),
              ...(!process.argv.includes("--dev")
                  ? [ purge, cssnano() ]
                  : [])
          ]
      })
      // less()
  ],
  devServer: {
      reloadStrategy: 'pageReload',
      openBrowser: false,
      address: 0.0.0.0,
      port: 8080
  }
};
