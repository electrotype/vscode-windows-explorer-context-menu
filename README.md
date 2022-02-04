# VSCode - Windows Explorer Context Menu


Adds options to the context menus of VSCode to open the native Windows Explorer context menu (also called "*shell context menu*").  
You can use it for many things, one of them being to manage your projects using [TortoiseGit](https://tortoisegit.org/) or [TortoiseSVN](https://tortoisesvn.net/).

![](https://raw.githubusercontent.com/electrotype/vscode-windows-explorer-context-menu/master/images/cm.png) 


In the `Explorer` panel (and `Java Projects` panel, for those working with Java), two options are added to the context menu :

* *"☰ Context Menu - Selected"*  : Which opens the Windows Explorer context menu for the selected file or folder.
* *"☰ Context Menu - Root"*  : Which opens the Windows Explorer context menu for the *root* of the project.

Also, in the context menu of the `Editor` panel, a simple *"☰ Context Menu"* option is added for the file currently open.

Since version *`3.0.0`*, this extension also supports projects ran inside WSL2! The configuration `windowsExplorerContextMenu.wsl2DriveLetter` is required in that case. See below for more information.

Of course this extension only works on Windows.

## Configuration

### *windowsExplorerContextMenu.executable*

There are three executables that can be used to actually open the native context menu. They all have their
drawbacks and that's why we bundle all of them and let you choose which one to use.

- *`AutohotkeyContextMenu.exe`* - Is the default executable. The *"Properties"* option of the open menu doesn't seem to work.

- *`Context.exe`* - The *"Properties"* option of the open menu doesn't seem to work.

- *`WinContextMenu_x86.exe`* - The menu doesn't open where the cursor is but at the *top-left* corner of the screen. If you use
more than one monitor, it can even open on the wrong monitor.

### *windowsExplorerContextMenu.wsl2DriveLetter*

Required when using this extension on projects running inside WSL2. This would be the path to the drive letter on which
you mapped the WSL2 Linux distribution root.

For example, if you installed `Ubuntu-20.04` as the WSL2 Linux distribution, you could map "`\\wsl$\Ubuntu-20.04`" to the Windows "`X:`" drive letter. 
You would then have to set the *`windowsExplorerContextMenu.wsl2DriveLetter`* configuration to "`X:`".

----------------------

## AutohotkeyContextMenu.exe

Created using [Autohotkey](https://autohotkey.com) and [this script](https://autohotkey.com/board/topic/89281-ahk-l-shell-context-menu/).

The source is provided in file *`executables/AutohotkeyContextMenu.ahk`*.

----------------------

## Context.exe

[http://www.maddogsw.com/cmdutils/](http://www.maddogsw.com/cmdutils/)

(c) 1998-2000 Matt Ginzton, MaDdoG Software

----------------------

## WinContextMenu_x86.exe

[https://github.com/vkalviss/WinContextMenu/tree/master/bin](https://github.com/vkalviss/WinContextMenu/tree/master/bin)

(c) 2013 vkalviss

----------------------


