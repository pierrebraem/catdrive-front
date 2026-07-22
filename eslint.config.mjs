import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default defineConfig(
    {
        files: ['**/*.{js,ts,vue}'],
        extends: [js.configs.recommended, tseslint.configs.recommended],
        languageOptions: {
            globals: {
                "fetch": false
            }
        }
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: ['.vue'],
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
    },
    {
        rules: {
            "no-duplicate-imports": "error",
            "no-self-compare": "error",
            "no-console": "error",
            "no-else-return": "error",
            "no-empty-function": "error",
            "no-unassigned-vars": "error",
            "no-var": "error",
            "no-script-url": "error",
            "no-eval": "error",
            "no-alert": "error",
            "func-names": "error",
            "init-declarations": "error",
            "no-implied-eval": "error",
            "no-loop-func": "error",
            "no-multi-assign": "error",
            "prefer-const": "error",
            "semi": ["error", "never"]
        }
    },

    pluginVue.configs["flat/recommended"],
    {
        rules: {
            "vue/multi-word-component-names": "off",
            "vue/block-order": [
                "error",
                {
                    "order": ["script", "template", "style"]
                }
            ],
            "vue/no-template-target-blank": "error",
            "vue/no-undef-components": "error",
            "vue/no-undef-properties": "error",
            "vue/no-unsupported-features": [
                "error",
                {
                    version: "^3.4.0"
                }
            ],
            "vue/no-unused-emit-declarations": "error",
            "vue/no-unused-properties": "error",
            "vue/no-unused-refs": "error",
            "vue/no-useless-mustaches": "error",
            "vue/no-useless-v-bind": "error",
            "vue/no-v-text": "error",
            "vue/no-parsing-error": [
                "error", 
                {
                    "invalid-first-character-of-tag-name": false
                }
            ]   
        }
    }
)