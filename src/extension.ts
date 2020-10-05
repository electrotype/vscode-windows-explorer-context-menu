import * as vscode from "vscode";
import { getProjectRootPath, getAbsolutePathFromJavaProjectExplorerInfoParam } from "./utils";

async function openContextMenu(pathFromEvent, useRoot) {
    let filePath: string;
    if (!pathFromEvent) {
        if (!useRoot) {
            return;
        }
        filePath = getProjectRootPath(null);

    } else if (useRoot) {
        filePath = getProjectRootPath(pathFromEvent);

    } else {
        filePath = pathFromEvent;
    }
    filePath = filePath.replace(/\//g, '\\');

    const config = vscode.workspace.getConfiguration('windowsExplorerContextMenu');
    let exeName = config.executable;
    if (!exeName) {
        exeName = "AutohotkeyContextMenu.exe";
    }

    const execFile = require('child_process').execFile;
    const bat = execFile(__dirname + '\\..\\executables\\' + exeName,
        [filePath], (error, stdout, stderr) => { });
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context) {
    // Open context menu on the current file
    let disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenuCurrent', function (fileUri) {
        openContextMenu(fileUri ? fileUri.fsPath : null, false);
    });
    context.subscriptions.push(disposable, false);

    // Open context menu on the selected file/folder
    disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenu', function (fileUri) {
        openContextMenu(fileUri ? fileUri.fsPath : null, false);
    });
    context.subscriptions.push(disposable);

    // Open context menu on the root folder
    disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenuRoot', function (fileUri) {
        openContextMenu(fileUri ? fileUri.fsPath : null, true);
    });
    context.subscriptions.push(disposable);

    // Open context menu on the current file - "Java Projets" section
    disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenuCurrentJavaProjectExplorer', function (info) {
        let path = getAbsolutePathFromJavaProjectExplorerInfoParam(info);
        openContextMenu(path, false);
    });

    // Open context menu on the root folder - "Java Projets" section
    disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenuRootJavaProjectExplorer', function (info) {
        let path = getAbsolutePathFromJavaProjectExplorerInfoParam(info);
        openContextMenu(path, true);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
    // nothing required
}