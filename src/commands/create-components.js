import inquirer from 'inquirer'
import Listr from 'listr'
import { copyFiles } from '../helpers/copy-files'

const handleCreateComponent = async (componentName) =>
  await copyFiles(
    `${componentName.toLowerCase()}`,
    `${process.cwd()}/src/components/${componentName.toLowerCase()}`,
    '/components'
  )

export const createComponents = async () => {
  const componentsList = ['Button', 'Input', 'Label', 'Preloader', 'Modal', 'Checkbox', 'Action-Modal']

  const { components } = await inquirer.prompt({
    type: 'checkbox',
    name: 'components',
    message: 'Please select components you want to create',
    choices: componentsList,
  })

  const mapAnswersToListrOptions = components.map((comp) => ({
    title: `Creating ${comp} component`,
    task: () => handleCreateComponent(comp),
  }))

  const tasks = new Listr(mapAnswersToListrOptions)

  await tasks.run()
}
