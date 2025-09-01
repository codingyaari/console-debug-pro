const { exec } = require('child_process');
const path = require('path');

function findUserFrame() {
  const stack = new Error().stack || '';
  const lines = stack.split('\n').slice(2);
  for (const line of lines) {
    const m = line.match(/\(?([^\s()]+):(\d+):(\d+)\)?$/);
    if (!m) continue;
    let filePath = m[1];
    const lineStr = m[2];
    const colStr = m[3];

    if (filePath.startsWith('file://')) {
      filePath = filePath.replace('file://', '');
    }

    const lower = filePath.toLowerCase();
    if (lower.includes('node_modules') || lower.startsWith('internal')) {
      continue;
    }

    return {
      filePath: path.resolve(filePath),
      line: parseInt(lineStr, 10),
      col: parseInt(colStr, 10),
    };
  }
  return null;
}

function formatShortPath(filePath) {
  const parts = filePath.split(path.sep);
  // Sirf last ke 2 parts rakho (folder aur file name)
  return parts.slice(-2).join('/');
}

function log(...args) {
  const frame = findUserFrame();
  if (frame) {
    const shortPath = formatShortPath(frame.filePath);

    const yellow = "\x1b[33m";
    const blue = "\x1b[34m";
    const reset = "\x1b[0m";

    console.log(
      `🚀DeBug---> ${yellow}${shortPath}${reset} --> ${blue}${frame.line}:${frame.col}${reset}`,
      ...args
    );
  } else {
    console.log('DeBug--->', ...args);
  }
}

function openInEditor(frame) {
  if (!frame) return;
  exec(`code -g "${frame.filePath}:${frame.line}:${frame.col}"`);
}

function logAndMaybeOpen(...args) {
  const frame = findUserFrame();
  if (frame) {
    const shortPath = formatShortPath(frame.filePath);

    const yellow = "\x1b[33m";
    const blue = "\x1b[34m";
    const reset = "\x1b[0m";

    console.log(
      `🚀DeBug---> ${yellow}${shortPath}${reset} --> ${blue}${frame.line}:${frame.col}${reset}`,
      ...args
    );

    if (process.env.DEBUG_OPEN === 'true') {
      openInEditor(frame);
    }
  } else {
    console.log('🚀DeBug---', ...args);
  }
}

if (typeof global.debug === 'undefined') {
  global.debug = { log, logAndMaybeOpen, openInEditor };
}

module.exports = { log, logAndMaybeOpen, openInEditor };
