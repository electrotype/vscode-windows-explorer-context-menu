# VSCode - Windows Explorer Context Menu

Visual Studio Code extension that opens the Windows Explorer context menu. You can use it for many things, one of them being 
to manage your projects using [TortoiseGit](https://tortoisegit.org/) or [TortoiseSVN](https://tortoisesvn.net/).

The extension adds some options to VSCode's context menu. In the `Explorer` panel, two options are added :

* *"☰ Context Menu - Selected"*  : Which opens the Windows Explorer context menu for the selected file or folder.
* *"☰ Context Menu - Root"*  : Which opens the Windows Explorer context menu for the *root* of the project.

Finally, in the context menu of the `Editor` panel, a simple *"☰ Context Menu"* option is added for the file currently open.

## Installation

Clone the repository or download and extract the [.zip file](https://github.com/electrotype/vscode-windows-explorer-context-menu/archive/master.zip) to your
*"%USERPROFILE%\.vscode\extensions"* folder. Restart VSCode.

By default `WinContextMenu_x86.exe` is used as the executable to open the context menu. It seems to be
the most reliable open source utility to do this. The drawback is that it always open the context menu near the *top-left*
of the screen. The `Context.exe` utility opens the menu near the cursor, which is great, but some options on the open menu 
seem to be problematic, such as "Properties".

You can change the active executable using the "*`windowsExplorerContextMenu.executable`*" [user setting](https://code.visualstudio.com/Docs/customization/userandworkspace). 
The valid values for this configuration are currently "`WinContextMenu_x86.exe`" (the default) or "`Context.exe`".

Of course this extension only works on Windows.

I may publish it to the [VSCode Marketplace](https://marketplace.visualstudio.com/VSCode)
one day, but I first want to test it for a while. Please feel free to report any problem.

----------------------

## Context.exe

[http://www.maddogsw.com/cmdutils/](http://www.maddogsw.com/cmdutils/)

(c) 1998-2000 Matt Ginzton, MaDdoG Software

----------------------

## WinContextMenu_x86.exe

[https://github.com/vkalviss/WinContextMenu/tree/master/bin](https://github.com/vkalviss/WinContextMenu/tree/master/bin)

(c) 2013 vkalviss

----------------------


![](https://github.com/electrotype/vscode-windows-explorer-context-menu/blob/master/images/cm1.png)

#==>

![](https://github.com/electrotype/vscode-windows-explorer-context-menu/blob/master/images/cm2.png)


