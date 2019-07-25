'use strict'

import { app, BrowserWindow, ipcMain, dialog } from 'electron'
import FileOperations from './FileOperations'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 720,
    useContentSize: true,
    width: 1024
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.commandLine.appendSwitch('force-color-profile', 'srgb')

ipcMain.on('open-file-dialog', (e, includeSubfolder) => {
  dialog.showOpenDialog({
    properties: ['openDirectory']
  }, (path) => {
    if (path) {
      const folder = path[0]

      const result = FileOperations.countFilesAndFolders(folder, includeSubfolder)

      e.sender.send('selected-folder', result)
    }
  })
})

ipcMain.on('files-dropped', (e, files) => {
  const result = FileOperations.countDraggedFiles(files.files, files.includeSubfolders)
  e.sender.send('selected-folder', result)
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
