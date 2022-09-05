const { app, BrowserWindow, ipcMain, Notification } = require("electron")
const path = require('path')

const isDev = !app.isPackaged

function createWindow() {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1440,
        height: 850,
        backgroundColor: "white",
        icon: path.join(__dirname, 'Logo-BT.ico'),
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
    //win.setResizable(false) //activa o desactiva el tamaño app
}

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}


ipcMain.on('notify', (_, message) => {
    new Notification({ title: 'Notification', body: message }).show()
})

app.whenReady().then(createWindow)