
import fs from 'fs'
import pathfs from 'path'

const fileFilter = ['.jpg', '.png', '.bmp']

function getFiles(path, fileList, folderCount, subfolders) {
  fileList = fileList || []
  var files = fs.readdirSync(path)
  for (let i in files) {
    if (!files.hasOwnProperty(i)) continue
    const name = path + '/' + files[i]
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

const countDraggedFiles = (files, includeSubfolders) => {
  let folderCount = 0
  let allFiles = []
  const path = pathfs.dirname(files[0])

  files.forEach(file => {
    if (fs.statSync(file).isDirectory()) {
      if (includeSubfolders) {
        const stats = getFiles(file, files, folderCount, includeSubfolders)
        folderCount += stats.folderCount
        allFiles = allFiles.concat(stats.fileList)
      } else {
        folderCount++
      }
    } else if (!fs.statSync(file).isDirectory()) {
      allFiles.push(file)
    }
  })

  allFiles = allFiles.filter(f => { return fileFilter.includes(pathfs.extname(f)) })
  allFiles = [...new Set(allFiles)]

  return {path: path, fileList: allFiles, folderCount}
}

export default { countFilesAndFolders, countDraggedFiles }
