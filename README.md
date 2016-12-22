# VSCode - Windows Explorer Context Menu


Adds options to the context menus of VSCode to open the native Windows Explorer context menu (also called "*shell context menu*").  
You can use it for many things, one of them being to manage your projects using [TortoiseGit](https://tortoisegit.org/) or [TortoiseSVN](https://tortoisesvn.net/).

![](https://raw.githubusercontent.com/electrotype/vscode-windows-explorer-context-menu/master/images/cm.png) 


In the `Explorer` panel, two options are added to the context menu :

* *"☰ Context Menu - Selected"*  : Which opens the Windows Explorer context menu for the selected file or folder.
* *"☰ Context Menu - Root"*  : Which opens the Windows Explorer context menu for the *root* of the project.

Finally, in the context menu of the `Editor` panel, a simple *"☰ Context Menu"* option is added for the file currently open.

Of course this extension only works on Windows.

## Configuration

There are three executables that can be used to actually open the native context menu. They all have their
drawbacks and that's why we bundle all of them and let you choose which one to use.

- *`AutohotkeyContextMenu.exe`* - Is the default executable. The *"Properties"* option of the open menu doesn't seem to work.

- *`Context.exe`* - The *"Properties"* option of the open menu doesn't seem to work.

- *`WinContextMenu_x86.exe`* - The menu doesn't open where the cursor is but at the *top-left* corner of the screen. If you use
more than one monitor, it can even open on the wrong monitor.

You can change the active executable using the "*`windowsExplorerContextMenu.executable`*" [user setting](https://code.visualstudio.com/Docs/customization/userandworkspace).  
The valid values for this configuration are currently "`AutohotkeyContextMenu.exe`" (the default), "`WinContextMenu_x86.exe`" or "`Context.exe`".

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


