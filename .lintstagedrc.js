const { ESLint } = require('eslint')
const filterAsync = require('node-filter-async').default

const eslintCli = new ESLint()

const removeIgnoredFiles = async (files) => {
  const filteredFiles = await filterAsync(files, async (file) => {
    const isIgnored = await eslintCli.isPathIgnored(file)
    return !isIgnored
  })
  return filteredFiles.join(' ')
}

module.exports = {
    '*.{js,svelte,md,html,css,json,svx}': 'prettier --write',
  '**/*.{js,svelte}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [`eslint --max-warnings=0 ${filesToLint}`]
  },
}
