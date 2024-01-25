# eslint

> Shared eslint for my projects

## Install

```sh
npm install --save-dev @unsync/eslint eslint
```

```js
// eslint.config.js
import eslint from '@unsync/eslint'

// possibility to override rules
export default eslint({
  rules: {
    'style/brace-style': 'off',
  }
})
```
