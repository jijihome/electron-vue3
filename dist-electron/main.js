"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
let mainWindow;
function createWindow() {
  if (mainWindow) {
    console.log("Window already exists, focusing...");
    mainWindow.focus();
    return;
  }
  console.log("Creating new window...");
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  });
  const startUrl = process.env.VITE_DEV_SERVER_URL || url.format({
    pathname: path.join(__dirname, "../dist/index.html"),
    protocol: "file:",
    slashes: true
  });
  console.log("Loading URL:", startUrl);
  mainWindow.loadURL(startUrl);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}
app.whenReady().then(() => {
  console.log("App is ready, creating window...");
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on("window-all-closed", () => {
  console.log("All windows closed");
  if (process.platform !== "darwin") {
    app.quit();
  }
});
