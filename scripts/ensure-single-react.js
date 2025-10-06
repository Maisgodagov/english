const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const workspaceRoot = path.join(repoRoot, 'apps', 'mobile');
const nodeModules = path.join(workspaceRoot, 'node_modules');

const ensureSymlink = (pkg) => {
  const workspacePath = path.join(nodeModules, pkg);
  const rootPath = path.join(repoRoot, 'node_modules', pkg);

  if (!fs.existsSync(rootPath)) {
    throw new Error(`Cannot find root installation for ${pkg} at ${rootPath}`);
  }

  if (fs.existsSync(workspacePath)) {
    const stats = fs.lstatSync(workspacePath);
    const alreadyLinked = stats.isSymbolicLink() && fs.realpathSync(workspacePath) === rootPath;
    if (alreadyLinked) {
      return;
    }

    fs.rmSync(workspacePath, { recursive: true, force: true });
  }

  fs.mkdirSync(path.dirname(workspacePath), { recursive: true });

  // Use junction on Windows for compatibility with directories
  fs.symlinkSync(rootPath, workspacePath, 'junction');
};

const main = () => {
  if (!fs.existsSync(workspaceRoot)) {
    return;
  }

  ensureSymlink('react');
  ensureSymlink('react-dom');
};

main();
