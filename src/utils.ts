import * as vscode from "vscode";

/**
 * Return the absolute path to the project root or
 * `null` if it can't be found.
 */
export function getProjectRootPath(referenceFile) {

  // Old VSCode version (no multi-root workspace)?
  if (!vscode.workspace || !vscode.workspace.workspaceFolders) {
    if (!vscode.workspace.rootPath) {
      return null;
    }
    return vscode.workspace.rootPath;
  }

  // From the specified file as there may be multiple projects
  // open.
  if (referenceFile) {
    // Find the parent project root path
    let filePath = referenceFile.replace(/\\/g, "/").toLowerCase();
    let rootPath = null;
    for (let workspaceFolder of vscode.workspace.workspaceFolders) {
      let rootPathTemp = workspaceFolder.uri.fsPath.replace(/\\/g, "/").toLowerCase();
      if (filePath === rootPathTemp || filePath.startsWith(rootPathTemp + "/")) {
        rootPath = workspaceFolder.uri.fsPath;
        break;
      }
    }
    return rootPath;

  } else {
    if (vscode.workspace.workspaceFolders.length < 1) {
      if (!vscode.workspace.rootPath) {
        return null;
      }
      return vscode.workspace.rootPath;
    }
    return vscode.workspace.workspaceFolders[vscode.workspace.workspaceFolders.length - 1].uri.fsPath;
  }
}

/**
 * Return the path of the file/folder speficied in the parameter
 * passed to a "Java Projects" menu event handler.
 */
export function getAbsolutePathFromJavaProjectExplorerInfoParam(info) {
  let path: string = null;
  if (info && info.uri) {
    path = info.uri;
    if (path.startsWith('file://')) {
      path = path.substring('file://'.length);
    } else if (path.startsWith('file:')) {
      path = path.substring('file:'.length);
    }

    // Windows
    if (path.match(/\/[a-zA-Z]:\//)) {
      path = path.substring(1);
    }
  }

  return path;
}
