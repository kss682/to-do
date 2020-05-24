const {app, BrowserWindow} = require("electron")

function createwindow(){
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            sandbox: false,
            nodeIntegration: true
        }
    })
    win.loadFile("app/index.html")
}

app.whenReady().then(createwindow)
