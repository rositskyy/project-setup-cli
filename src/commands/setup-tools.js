import inquirer from 'inquirer'
import Listr from 'listr'
import {
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
} from '../helpers/setup-tools.handlers'

export const setupTools = async () => {
  const toolsList = {
    Typescript: handleTypescriptSetup,
    Prettier: handlePrettierSetup,
    'ESLint (Typescript & Prettier installed required)': handleESLintSetup,
    Husky: handleHuskySetup,
    CommitLint: handleCommitLintSetup,
    Tailwind: handleTailwindSetup,
    Formik: handleFormikSetup,
    Yup: handleYupSetup,
    XSTATE: handleXSTATESetup,
    'Http service for API calls': handleHttpServicesSetup,
  }

  const { tools } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'tools',
      choices: Object.keys(toolsList),
    },
  ])

  const mapAnswersToListrOptions = tools.map((tool) => ({
    title: `Installing ${tool}`,
    task: () => toolsList[tool](),
  }))

  const tasks = new Listr(mapAnswersToListrOptions)

  await tasks.run()
}
