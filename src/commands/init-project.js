import inquirer from 'inquirer'
import Listr from 'listr'
import execa from 'execa'

const handleCreateClientSide = async (projectName) =>
  await execa('pnpm', ['create', 'vite', projectName, '--template', 'react-ts'])

const handleCreateServerSide = async () => {
  // TODO: Handle child process. When you execute command below, it creates another process with prompts
  // const installPackage = await execa('pnpm', ['init', 'vite-plugin-ssr@latest']);
}

export const initProject = async () => {
  const { template } = await inquirer.prompt({
    type: 'list',
    name: 'template',
    message: 'Please select what template you want to setup',
    choices: [
      'Client side rendering (vite react-ts)',
      'Server side rendering (vite-plugin-ssr) (CURRENTLY NOT WORKING, LOOOL)',
      'I have already initialized project',
    ],
  })

  const { projectName } = await inquirer.prompt({
    type: 'input',
    name: 'projectName',
    message: 'Please type your project name',
    when: template.includes('Client side'),
  })

  const tasks = new Listr([
    {
      title: 'Installing client side project',
      task: () => handleCreateClientSide(projectName || 'awesome-project'),
    },
    {
      title: 'Installing server side project',
      task: async () => await handleCreateServerSide(),
    },
  ])

  await tasks.run()
}
