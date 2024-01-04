window.addEventListener('DOMContentLoaded', () => {
    // window 객체에 ipcRenderer 이벤트 등록
    window.ipcRenderer = require('electron').ipcRenderer;
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})