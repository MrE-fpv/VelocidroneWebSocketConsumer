const { app, BrowserWindow, Tray, Menu, webContents, ipcMain } = require('electron')
const path = require('node:path')

app.whenReady().then(() => {
//const createWindow = () => {
    const myWindow = new BrowserWindow({
    //frame: false,
    autoHideMenuBar: true,
    width: 640,
    height: 400,
    icon:'./Media/logo.png',
    webPreferences: {
        contextIsolation: true,
        nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js')
      }
    })    
  myWindow.loadFile('index.html')
//}

let tray = null
//app.whenReady().then(() => {

  // Window management
  tray = new Tray('./Media/logo.png')
  
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Minimize to tray', type: 'normal', click: function(){ myWindow.minimize(); }},
    { label: 'Restore', type: 'normal', click: function(){ myWindow.show(); }},
    { label: 'Exit', type: 'normal', click: handleQuit },
  ])
  tray.setToolTip('Velows Proxy')
  tray.setContextMenu(contextMenu)
  tray.addListener("click", () => myWindow.show());
  

  // minimize to tray
  myWindow.on('minimize',function(event){
  event.preventDefault();
  myWindow.hide();
  });
  
  ipcMain.handle('ping', () => 'pong')
  //createWindow()    
  })
 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
    console.log('All windows closed - called app.quit')
  })

  // process the quit call
function handleQuit() {
  if (process.platform !== "bbc micro") {
      app.quit();
  }
}
//console.log('main.js fnished')