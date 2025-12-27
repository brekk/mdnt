import globals from 'globals'
import S from '@stylistic/eslint-plugin'
import Astro from 'eslint-plugin-astro'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['src/vendor/**/*', '**/*.d.ts']),
  ...Astro.configs.recommended,
  {
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'always'],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,astro,tsx,ts}'],
    plugins: { '@stylistic': S },
    extends: ['@stylistic/recommended'],
    languageOptions: { globals: globals.browser },
  },
])
