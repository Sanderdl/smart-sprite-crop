
import fs from 'fs'
import pathfs from 'path'

const fileFilter = ['.jpg', '.png', '.bmp']

function getFiles(path, fileList, folderCount, subfolders) {
  fileList = fileList || []
  var files = fs.readdirSync(path)
  for (var i in files) {
    if (!files.hasOwnProperty(i)) continue
    var name = path + '/' + files[i]
    if (fs.statSync(name).isDirectory() && subfolders === true) {
      folderCount++
      getFiles(name, fileList, folderCount, subfolders)
    } else if (fileFilter.includes(pathfs.extname(name))) {
      fileList.push(name)
    }
  }
  return {path, fileList, folderCount}
}

const countFilesAndFolders = (path, includeSubfolders) => {
  return getFiles(path, [], 1, includeSubfolders)
}

export default { countFilesAndFolders }
