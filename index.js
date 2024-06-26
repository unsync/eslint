// eslint.config.js
import antfu from '@antfu/eslint-config'
import lodash from 'lodash'

const defaults = {
  rules: {
    'curly': ['error', 'all'],
    'style/max-statements-per-line': ['error', { max: 2 }],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'ts/consistent-type-definitions': ['error', 'interface'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Built-in imports (come from NodeJS native) go first
          'external', // <- External imports
          'internal', // <- Absolute imports
          ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
          'index', // <- index imports
          'unknown', // <- unknown
        ],
        alphabetize: {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          order: 'asc',
          /* ignore case. Options: [true, false] */
          caseInsensitive: true,
        },
      },
    ],
  },
  toml: {
    // this helps for cloudflare workers
    overrides: {
      'toml/inline-table-curly-spacing': 'off',
      'toml/array-bracket-newline': 'off',
      'toml/padding-line-between-pairs': 'off'
    }
  }
}

async function eslint(config) {
  return antfu(lodash.merge(defaults, config))
}

export default eslint
