import fs from 'fs'
import { promisify } from 'util'

const access = promisify(fs.access)

const checkFsAccess = async (templateDir) => {
  try {
    await access(templateDir, fs.constants.R_OK)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

export { checkFsAccess }
