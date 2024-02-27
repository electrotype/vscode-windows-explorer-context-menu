# _NOTE: Project no longer supported_

Unfortunately, I don't use Windows anymore to code and I won't support this extension anymore.

# VSCode - Windows Explorer Context Menu

## Marketplace link

[Windows Explorer Context Menu](https://marketplace.visualstudio.com/items?itemName=electrotype.windows-explorer-context-menu)

## Description

Adds options to the context menus of VSCode to open the native Windows Explorer context menu (also called "_shell context menu_").  
You can use it for many things, one of them being to manage your projects using [TortoiseGit](https://tortoisegit.org/) or [TortoiseSVN](https://tortoisesvn.net/).

![](https://raw.githubusercontent.com/electrotype/vscode-windows-explorer-context-menu/master/images/cm.png)

In the `Explorer` panel (and `Java Projects` panel, for those working with Java), two options are added to the context menu :

- _"☰ Context Menu - Selected"_ : Which opens the Windows Explorer context menu for the selected file or folder.
- _"☰ Context Menu - Root"_ : Which opens the Windows Explorer context menu for the _root_ of the project.

Also, in the context menu of the `Editor` panel, a simple _"☰ Context Menu"_ option is added for the file currently open.

Since version _`3.0.0`_, this extension also supports projects ran inside WSL2! The configuration `windowsExplorerContextMenu.wsl2DriveLetter` is required in that case. See below for more information.

Of course this extension only works on Windows.

## Configuration

### _windowsExplorerContextMenu.executable_

There are three executables that can be used to actually open the native context menu. They all have their
drawbacks and that's why we bundle all of them and let you choose which one to use.

- _`AutohotkeyContextMenu.exe`_ - Is the default executable. The _"Properties"_ option of the open menu doesn't seem to work.

- _`Context.exe`_ - The _"Properties"_ option of the open menu doesn't seem to work.

- _`WinContextMenu_x86.exe`_ - The menu doesn't open where the cursor is but at the _top-left_ corner of the screen. If you use
  more than one monitor, it can even open on the wrong monitor.

### _windowsExplorerContextMenu.wsl2DriveLetter_

Required when using this extension on projects running inside WSL2. This would be the path to the drive letter on which
you mapped the WSL2 Linux distribution root.

For example, if you installed `Ubuntu-20.04` as the WSL2 Linux distribution, you could map "`\\wsl$\Ubuntu-20.04`" to the Windows "`X:`" drive letter.
You would then have to set the _`windowsExplorerContextMenu.wsl2DriveLetter`_ configuration to "`X:`".

---

## AutohotkeyContextMenu.exe

Created using [Autohotkey](https://autohotkey.com) and [this script](https://autohotkey.com/board/topic/89281-ahk-l-shell-context-menu/).

The source is provided in file _`executables/AutohotkeyContextMenu.ahk`_.

---

## Context.exe

[http://www.maddogsw.com/cmdutils/](http://www.maddogsw.com/cmdutils/)

(c) 1998-2000 Matt Ginzton, MaDdoG Software

---

## WinContextMenu_x86.exe

[https://github.com/vkalviss/WinContextMenu/tree/master/bin](https://github.com/vkalviss/WinContextMenu/tree/master/bin)

(c) 2013 vkalviss

---
