const fs = require('node:fs')

const rootPath = require.main.paths[0].split('node_modules')[0]

// add npm script
const packageJsonPath = `${rootPath}package.json`
if (fs.existsSync(packageJsonPath)) {
  console.info('postinstall: add package.json scripts')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath))

  packageJson.scripts.lint = 'eslint .'
  packageJson.scripts['lint:fix'] = 'eslint . --fix'

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
}

// add eslint.config.js
const eslintConfigPath = `${rootPath}eslint.config.js`
if (!fs.existsSync(eslintConfigPath)) {
  const content = '// eslint.config.js\n'
    + 'import eslint from \'@unsync/eslint\'\n'
    + '\n'
    + 'export default eslint()\n'
  console.info('postinstall: create eslint.config.js')
  fs.writeFileSync(eslintConfigPath, content)
}
