const { app, BrowserWindow } = require('electron')
//const bootstrap = require('bootstrap')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1400,
        height: 750
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})