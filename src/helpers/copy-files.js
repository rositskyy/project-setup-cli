import ncp from 'ncp'
import path from 'path'
import { promisify } from 'util'
import { checkFsAccess } from './fs-access'

const copy = promisify(ncp)

const copyFiles = async (fileName, targetDirectory, fileDirectory) => {
  const parsedFileDirectory = `../../files${fileDirectory ? fileDirectory : ''}`
  const currentFileUrl = import.meta.url
  const filesDir = path.resolve(new URL(currentFileUrl).pathname, parsedFileDirectory, fileName)
  await checkFsAccess(filesDir)

  return copy(filesDir, targetDirectory, {
    clobber: false,
  })
}

export { copyFiles }
