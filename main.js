const { app, BrowserWindow } = require("electron");

let win;

function openWindow() {
  win = new BrowserWindow({
    height: 800,
    width: 900,
  });

  win.loadURL(`file://${__dirname}/dist/plastock/index.html`);

  win.webContents.openDevTools();
}

app.on("ready", openWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
