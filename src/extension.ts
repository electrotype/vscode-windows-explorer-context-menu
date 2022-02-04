import * as vscode from "vscode";
import {
    getAbsolutePathFromJavaProjectExplorerInfoParam,
    getProjectRootPath,
} from "./utils";
import * as path from "path";
const execFile = require("child_process").execFile;

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

    const config = vscode.workspace.getConfiguration(
        "windowsExplorerContextMenu"
    );

    let exePath = path.normalize(__dirname + "/../executables/" + config.executable);

    // WSL2?
    if (filePath.startsWith("/")) {
        let wsl2DriveLetter: string = config.wsl2DriveLetter;
        if (!wsl2DriveLetter) {
            vscode.window.showErrorMessage('The configuration "windowsExplorerContextMenu.wsl2DriveLetter" is required when using WSL2.');
            return;
        }
        if (!wsl2DriveLetter.endsWith(":")) {
            wsl2DriveLetter = wsl2DriveLetter + ":";
        }

        filePath = filePath.replace(/\//g, "\\");
        filePath = wsl2DriveLetter + filePath;
    } else {
        filePath = filePath.replace(/\//g, "\\");
    }

    execFile(exePath, [filePath], (error, stdout, stderr) => { });
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context) {
    // Open context menu on the current file
    let disposable = vscode.commands.registerCommand(
        "extension.windowsExplorerContextMenuCurrent",
        function (fileUri) {
            openContextMenu(fileUri ? fileUri.fsPath : null, false);
        }
    );
    context.subscriptions.push(disposable, false);

    // Open context menu on the selected file/folder
    disposable = vscode.commands.registerCommand(
        "extension.windowsExplorerContextMenu",
        function (fileUri) {
            openContextMenu(fileUri ? fileUri.fsPath : null, false);
        }
    );
    context.subscriptions.push(disposable);

    // Open context menu on the root folder
    disposable = vscode.commands.registerCommand(
        "extension.windowsExplorerContextMenuRoot",
        function (fileUri) {
            openContextMenu(fileUri ? fileUri.fsPath : null, true);
        }
    );
    context.subscriptions.push(disposable);

    // Open context menu on the current file - "Java Projets" section
    disposable = vscode.commands.registerCommand(
        "extension.windowsExplorerContextMenuCurrentJavaProjectExplorer",
        function (info) {
            let path = getAbsolutePathFromJavaProjectExplorerInfoParam(info);
            openContextMenu(path, false);
        }
    );

    // Open context menu on the root folder - "Java Projets" section
    disposable = vscode.commands.registerCommand(
        "extension.windowsExplorerContextMenuRootJavaProjectExplorer",
        function (info) {
            let path = getAbsolutePathFromJavaProjectExplorerInfoParam(info);
            openContextMenu(path, true);
        }
    );

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
    // nothing required
}
