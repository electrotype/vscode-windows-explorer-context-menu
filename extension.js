// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	var disposable = vscode.commands.registerCommand('extension.windowsContextMenu', function (filePath) {

        if(!filePath) {
            filePath = vscode.workspace.rootPath;
        }

        filePath = filePath + "";
        if(filePath.startsWith("file:///")) {
            filePath = filePath.substring("file:///".length);
        }
        filePath = filePath.replace(/%3A/g, ':');
        //vscode.window.showErrorMessage(filePath);

        const execFile = require('child_process').execFile;
        const bat = execFile(__dirname + '\\Context.exe',
            [filePath], (error, stdout, stderr) => {});
	});
	
	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;