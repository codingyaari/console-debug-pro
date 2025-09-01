const fs = require('fs');
const path = require('path');
const os = require('os');

const snippetsSrc = path.join(__dirname, '../snippets/javascript.json');
const vscodeSnippetsDir = path.join(os.homedir(), '.config/Code/User/snippets'); // Linux/mac
// Windows path: %APPDATA%\Code\User\snippets

if (!fs.existsSync(vscodeSnippetsDir)) {
  console.log('VS Code snippets folder not found. Skipping snippet install.');
  process.exit(0);
}

fs.copyFileSync(snippetsSrc, path.join(vscodeSnippetsDir, 'javascript.json'));
console.log('✅ Debug snippets installed to VS Code');