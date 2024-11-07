import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginJest from 'eslint-plugin-jest'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...pluginJest.environments.globals.globals,
        ...globals.node
      }
    },
    plugins: { jest: pluginJest },
    rules: {
      // 关闭 eslint 的如下功能
      'import/prefer-default-export': 0,
      'no-use-before-define': 0,
      'no-shadow': 0,
      'no-restricted-syntax': 0,
      'no-return-assign': 0,
      'no-param-reassign': 0,
      'no-sequences': 0,
      'no-loop-func': 0,
      'no-nested-ternary': 0
    }
  },
  pluginJs.configs.recommended
]
