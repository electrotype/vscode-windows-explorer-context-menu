// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

function openContextMenu(filePath) {

        if(!filePath) {
            return;
        }
        filePath = filePath + "";

        if(filePath.startsWith("file:///")) {
            filePath = filePath.substring("file:///".length);
        }
        filePath = filePath.replace(/%3A/g, ':');
        filePath = filePath.replace(/\//g, '\\');
        //filePath = '"' + filePath + '"';
        //vscode.window.showErrorMessage(filePath);

        var config = vscode.workspace.getConfiguration('windowsExplorerContextMenu');
        var exeName = config.executable;
        if(!exeName) {
            exeName = "AutohotkeyContextMenu.exe";
        }

        const execFile = require('child_process').execFile;
        const bat = execFile(__dirname + '\\executables\\' + exeName,
            [filePath], (error, stdout, stderr) => {}); 
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Open context menu on current file
	var disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenuCurrent', function (filePath) {
        openContextMenu(filePath);
	});
	context.subscriptions.push(disposable);

    // Open context menu on selected file/folder
	disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenu', function (filePath) {

        if(!filePath) {
            return;
        }

        openContextMenu(filePath);
	});
	context.subscriptions.push(disposable);

    // Open context menu on root folder
	disposable = vscode.commands.registerCommand('extension.windowsExplorerContextMenuRoot', function (filePath) {
        openContextMenu(vscode.workspace.rootPath);
	});
	context.subscriptions.push(disposable); 

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;