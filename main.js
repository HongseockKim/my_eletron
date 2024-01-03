const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
    // win.loadURL('https://www.naver.com/')
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