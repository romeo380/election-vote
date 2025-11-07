const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 650,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // To allow require in renderer if needed
      // If you want extra security, set contextIsolation:true and use preload.js
    },
    icon: path.join(__dirname, 'icon.ico') // Uses your app icon
  });

  win.setMenuBarVisibility(false); // Hide default menu bar for a clean app feel
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // Quit on all platforms except macOS
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  // macOS: re-create a window if all windows are closed and the dock icon is clicked
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
