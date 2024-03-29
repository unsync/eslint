// eslint.config.js
import antfu from '@antfu/eslint-config'

const defaults = {
  rules: {
    'style/brace-style': ['error', '1tbs'],
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
}

async function eslint(config) {
  return antfu({ ...defaults, ...config })
}

export default eslint
