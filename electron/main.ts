import { app, BrowserWindow } from 'electron'
import * as electron from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

let mainWindow: Electron.BrowserWindow | null
let appTray = null;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
function createWindow() {
  const Menu = electron.Menu

  const Tray = electron.Tray;
  // Menu.setApplicationMenu(null);
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 700,
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, '../static/favicon.ico'),
  })
  //系统托盘右键菜单
  let trayMenuTemplate = [
    {
      label: '设置',
      click: function () { } //打开相应页面
    },
    {
      label: '帮助',
      click: function () { }
    },
    {
      label: '关于',
      click: function () { }
    },
    {
      label: '退出',
      click: function () {
        app.quit();
        app.quit();//因为程序设定关闭为最小化，所以调用两次关闭，防止最大化时一次不能关闭的情况
      }
    }
  ];

  //系统托盘图标目录
  appTray = new Tray(path.join(__dirname, '../static/favicon.ico'));
  //图标的上下文菜单
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
  //设置此托盘图标的悬停提示内容
  appTray.setToolTip('我的托盘图标');

  //设置此图标的上下文菜单
  appTray.setContextMenu(contextMenu);
  //单击右下角小图标显示应用
  // appTray.on('click', function () {
  //   mainWindow.show();
  // })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }
  mainWindow.setIcon('./static/favicon.ico')
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
    }
  })
require('electron').app.setName("哈哈哈")
app.allowRendererProcessReuse = true
