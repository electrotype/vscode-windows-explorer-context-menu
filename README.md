# Windows Explorer Context Menu

VSCode extension that opens the Windows Explorer Context Menu.
It is triggered by the *"Windows Explorer Context Menu"* option in the 
context menu of files and folders from the *Explorer* pane.

Of course it only works on Windows.

## Installation

Clone the repository or download and extract the [.zip file](https://github.com/electrotype/vscode-windows-explorer-context-menu/archive/master.zip) in your
*"%USERPROFILE%\.vscode\extensions"* folder. Restart VSCode.

I may publish this extension in the [VSCode Marketplace](https://marketplace.visualstudio.com/VSCode),
one day, but I first want to use it for a while. Please feel free to report any problem.

By default `WinContextMenu_x86.exe` is used as the executable to open the context menu. It seems to be
the most reliable open source utility to do this. The drawback is that it always open the context menu near the *top-left*
of the screen. The `Context.exe` utility opens the menu near the cursor, which is great, but some options on the open menu 
seem to be problematic, such as "Properties".

You can switch from `WinContextMenu_x86.exe` to `Context.exe` by renaming one of them to `open.exe`, which is the executable 
actually called in the code.

## Context.exe

[http://www.maddogsw.com/cmdutils/](http://www.maddogsw.com/cmdutils/)

(c) 1998-2000 Matt Ginzton, MaDdoG Software

----------------------

## WinContextMenu_x86.exe

[https://github.com/vkalviss/WinContextMenu/tree/master/bin](https://github.com/vkalviss/WinContextMenu/tree/master/bin)

(c) 2013 vkalviss

----------------------


![](https://github.com/electrotype/vscode-windows-explorer-context-menu/blob/master/images/cm1.png)

==>

![](https://github.com/electrotype/vscode-windows-explorer-context-menu/blob/master/images/cm2.png)


