import * as vscode from "vscode";

async function openContextMenu(fileUri, useRoot) {

    let filePath;
    if (!fileUri) {

        if (!useRoot) {
            return;
        }

        if (!vscode.workspace || vscode.workspace.workspaceFolders === undefined || vscode.workspace.workspaceFolders === null) {
            if (!vscode.workspace.rootPath) {
                return;
            }
            filePath = vscode.workspace.rootPath;
        } else {

            if (vscode.workspace.workspaceFolders.length < 1) {
                return;
            }
            filePath = vscode.workspace.workspaceFolders[vscode.workspace.workspaceFolders.length - 1].uri.fsPath;
        }

    } else if (useRoot) {

        // Old VSCode version (no multi-root workspace)?
        if (!vscode.workspace || !vscode.workspace.workspaceFolders) {
            filePath = vscode.workspace.rootPath;
        } else {

            // Find the parent root path
            filePath = fileUri.fsPath.replace(/\\/g, "/");
            let rootPath;
            for (let workspaceFolder of vscode.workspace.workspaceFolders) {
                let rootPathTemp = workspaceFolder.uri.fsPath.replace(/\\/g, "/");
                if (filePath === rootPathTemp || filePath.startsWith(rootPathTemp + "/")) {
                    rootPath = workspaceFolder.uri.fsPath;
                    break;
                }
            }
            if (!rootPath) {
                return;
            }
            filePath = rootPath;

        }
    } else {
        filePath = fileUri.fsPath;
    }

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

    // Open context menu on current file
    let disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenuCurrent', function (fileUri) {
        openContextMenu(fileUri, false);
    });
    context.subscriptions.push(disposable, false);

    // Open context menu on selected file/folder
    disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenu', function (fileUri) {
        openContextMenu(fileUri, false);
    });
    context.subscriptions.push(disposable);

    // Open context menu on root folder
    disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenuRoot', function (fileUri) {
        openContextMenu(fileUri, true);
    });
    context.subscriptions.push(disposable);

}

// this method is called when your extension is deactivated
export function deactivate() {
}