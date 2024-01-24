// eslint.config.js
import antfu from '@antfu/eslint-config'

const defaults = {
  rules: {
    'style/brace-style': ['error', '1tbs'],
  },
}

async function eslint(config) {
  return antfu({ ...defaults, ...config })
}

export default eslint
