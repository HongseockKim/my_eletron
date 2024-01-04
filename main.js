const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    ipcMain.on('set-title', (event, title) => {
        win.setTitle(title)
    })
    // 일렉트론 에서 devTool 활성화
    win.webContents.openDevTools()
    // win.loadFile(path.join(__dirname,'./view/public/index.html'))
    win.loadURL('http://localhost:9095')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    // 앱 종료시 실행 구간
    console.log("=>(main.js:29) process.platform", process.platform);
    if (process.platform !== 'darwin') {
        app.quit()
    }
})