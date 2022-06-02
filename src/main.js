import { program } from 'commander'
import { setupTools } from './commands/setup-tools'
import { initProject } from './commands/init-project'
import { createComponents } from './commands/create-components'

export const start = async () => {
  program
    .name('Project setup cli')
    .description('Interactive CLI to initialize and configure new/existing project')
    .version('0.1.0')

  program
    .command('init-project')
    .description('Initialize project with react-ts vite, client side or server side rendering')
    .action(async () => {
      await initProject()
    })

  program
    .command('setup-tools')
    .description('Install and setup ts, prettier, eslint, husky, commit lint')
    .action(async () => {
      await setupTools()
    })

  program
    .command('create-components')
    .description('Select and install basic react components')
    .action(async () => {
      await createComponents()
    })

  program.parse()
}
