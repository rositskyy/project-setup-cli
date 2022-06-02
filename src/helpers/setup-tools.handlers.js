import execa from 'execa'
import { copyFiles } from './copy-files'

const handlePrettierSetup = async () => {
  await execa('pnpm', ['i', '--save-dev', 'prettier'])
  await copyFiles('prettier.config.js', `${process.cwd()}/prettier.config.js`)
  await execa('npm', ['set-script', 'prettier', 'npx prettier src --write --loglevel warn'])
}

const handleTypescriptSetup = async () => {
  await execa('pnpm', ['i', '--save-dev', 'typescript'])
  await copyFiles('tsconfig.json', `${process.cwd()}/tsconfig.json`)
}

const handleESLintSetup = async () => {
  await execa('pnpm', [
    'i',
    '--save-dev',
    'eslint',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-config-prettier',
    'eslint-plugin-import',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'eslint-plugin-jsx-a11y',
  ])
  await copyFiles('.eslintrc.json', `${process.cwd()}/.eslintrc.json`)
  await copyFiles('.eslintignore', `${process.cwd()}/.eslintignore`)
  await execa('npm', ['set-script', 'lint', 'npx eslint src --fix "./src/**/*.{ts,tsx}"'])
}

const handleHuskySetup = async () => {
  await execa('pnpm', ['dlx', 'husky-init', '&&', 'pnpm install'])
}

const handleCommitLintSetup = async () => {
  await execa('pnpm', ['i', '--save-dev', '@commitlint/cli', '@commitlint/config-conventional', '@commitlint/types'])
  await copyFiles('commitlint.config.ts', `${process.cwd()}/commitlint.config.ts`)
  await copyFiles('commit-msg', `${process.cwd()}/.husky/commit-msg`)
  await execa('chmod', ['a+x', '.husky/commit-msg'])
}

const handleFormikSetup = async () => {
  // TODO: Add packages
  console.log('in progress')
}

const handleTailwindSetup = async () => {
  // TODO: Add packages, init config
  console.log('in progress')
}

const handleXSTATESetup = async () => {
  // TODO: Add packages, init machines, selectors
  console.log('in progress')
}

const handleYupSetup = async () => {
  // TODO: Add packages, forms schema
  console.log('in progress')
}

const handleHttpServicesSetup = async () => {
  // TODO: Add packages (axios), init HttpService
  console.log('in progress')
}

export {
  handleHttpServicesSetup,
  handleCommitLintSetup,
  handleESLintSetup,
  handleFormikSetup,
  handleHuskySetup,
  handlePrettierSetup,
  handleTailwindSetup,
  handleTypescriptSetup,
  handleXSTATESetup,
  handleYupSetup,
}
