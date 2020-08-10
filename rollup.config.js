import { createRollupConfigs } from "./scripts/base.config.js"
import autoPreprocess from "svelte-preprocess"
import typescript from "@rollup/plugin-typescript"

const production = !process.env.ROLLUP_WATCH

export const config = {
  staticDir: "static",
  distDir: "dist",
  buildDir: `dist/build`,
  serve: !production,
  production,
  plugins: [typescript({ sourceMap: !production })],
  rollupWrapper: (rollup) => rollup,
  svelteWrapper: (svelte) => {
    svelte.preprocess = [
      autoPreprocess({
        postcss: true,
        typescript: true,
        defaults: { style: "postcss" },
      }),
    ]
  },
  swWrapper: (worker) => worker,
}

const configs = createRollupConfigs(config)

export default configs

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/
