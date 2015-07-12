"use strict";

if(Meteor.isClient) {
  Meteor.startup(function() {
    var remote = require('remote');
    var Menu = remote.require('menu');

    var commandOrCtrl = function() {
      return (process.platform === 'darwin') ? 'Command' : 'Ctrl';
    };

    var template = [
      {
        label: 'ElectronMeteor',
        submenu: [
          {
            label: 'About ElectronMeteor',
            selector: 'orderFrontStandardAboutPanel:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Services',
            submenu: []
          },
          {
            type: 'separator'
          },
          {
            label: 'Hide ElectronMeteor',
            accelerator: commandOrCtrl() + '+H',
            selector: 'hide:'
          },
          {
            label: 'Hide Others',
            accelerator: commandOrCtrl() + '+Shift+H',
            selector: 'hideOtherApplications:'
          },
          {
            label: 'Show All',
            selector: 'unhideAllApplications:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Quit',
            accelerator: commandOrCtrl() + '+Q',
            selector: 'terminate:'
          },
        ]
      },
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: commandOrCtrl() + '+Z',
            selector: 'undo:'
          },
          {
            label: 'Redo',
            accelerator: 'Shift+' + commandOrCtrl() + '+Z',
            selector: 'redo:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Cut',
            accelerator: commandOrCtrl() + '+X',
            selector: 'cut:'
          },
          {
            label: 'Copy',
            accelerator: commandOrCtrl() + '+C',
            selector: 'copy:'
          },
          {
            label: 'Paste',
            accelerator: commandOrCtrl() + '+V',
            selector: 'paste:'
          },
          {
            label: 'Select All',
            accelerator: commandOrCtrl() + '+A',
            selector: 'selectAll:'
          }
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: commandOrCtrl() + '+R',
            click: function() { remote.getCurrentWindow().reload(); }
          },
          {
            label: 'Toggle DevTools',
            accelerator: 'Alt+' + commandOrCtrl() + '+I',
            click: function() { remote.getCurrentWindow().toggleDevTools(); }
          },
        ]
      },
      {
        label: 'Window',
        submenu: [
          {
            label: 'Minimize',
            accelerator: commandOrCtrl() + '+M',
            selector: 'performMiniaturize:'
          },
          {
            label: 'Close',
            accelerator: commandOrCtrl() + '+W',
            selector: 'performClose:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Bring All to Front',
            selector: 'arrangeInFront:'
          }
        ]
      },
      {
        label: 'Help',
        submenu: []
      }
    ];

    var menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);
  });
}
