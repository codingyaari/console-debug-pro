


 <p align="center">
 <img src="/assets/github.png" width="500px">
<h1 align="center">Console Debug Pro  🚀 </h1>


<p align="center">
  An advanced debugging utility that transforms your <code>console.log</code> into clickable file links directly in your terminal.<br/>
  Stop wasting time searching for your code — just click and go straight to the line in VS Code.
  <br/>
  <br/>
  <a href="https://www.npmjs.com/package/console-debug-pro">NPM</a>
  ·
  <a href="#">Documentation</a>
  ·
  <a href="#">Demo</a>
</p>
</p>

[![NPM Version](https://img.shields.io/npm/v/console-debug-pro?style=for-the-badge)](https://www.npmjs.com/package/console-debug-pro)
[![NPM Downloads](https://img.shields.io/npm/dt/console-debug-pro?style=for-the-badge)](https://www.npmjs.com/package/console-debug-pro)
[![License](https://img.shields.io/npm/l/console-debug-pro?style=for-the-badge)](LICENSE)

---

## 🚀 About
Console Debug Pro automates the process of finding the origin of your <code>console.log</code> statements by adding file names and line numbers as clickable links right in your terminal. This makes your debugging workflow up to **10x faster**.

## 📸 Demo
Click on the line number in the terminal → the file opens directly in VS Code!

![Demo](./assets/demo.gif)

## ✨ Features
- **Clickable Logs** — Open files and line numbers from your terminal directly in VS Code.
- **Short Path Mode** — Shows only the last folder and file name.
- **Auto Snippet Installation** — Insert a `console.log` with file & line number by typing `cs`.
- **Colored Output** — Path in yellow, line number in blue.
- **Command Shortcuts:**
  - `cd` → Inserts `console.log('DeBug--- line 181:', )` with line number.
  - `cf` → Inserts `debug.logn()` that also opens file & line number instantly.
- **Universal Compatibility** — Works with Node.js, React, Vue, Angular, Next.js, Express, etc.
- **Ultra-Lightweight** — No performance overhead.
- **Customizable** — Change the log prefix to fit your style.
- **Error-Safe** — Falls back to native console.log if something goes wrong.

## 💻 Supported Frameworks
**Frontend:** React, Vue, Angular, Svelte, Next.js, Nuxt.js, Remix  
**Backend:** Node.js, Express, NestJS, Fastify, Koa, AdonisJS  
**Full-Stack:** Meteor, Blitz.js, Redwood.js

[![My Skills](https://skillicons.dev/icons?i=js,html,css,wasm)](https://skillicons.dev)

## 📦 Installation
```bash
npm install console-debug-pro --save-dev
```

## 🛠️ Usage
**1. Import it into your project**
```javascript
import debug from 'console-debug-pro';
// Or for CommonJS
const debug = require('console-debug-pro');
```

**2. Use it like console.log**
```javascript
debug.log('This is my message.');
// Output: DeBug---> controllers/postController.js --> 174:1 This is my message.

console.log('DeBug--- line 181:', 'This is my message.');
// Output: DeBug--->174:1 This is my message.

const user = { id: 1, name: 'John' };
debug.log('User object:', user);
// Output: DeBug---> controllers/postController.js --> 174:1 User object: { id: 1, name: 'John' }
```

**3. Use Auto-Snippet in VS Code**
- Type `cs` and press **Tab** — inserts: `debug('DeBug--- line X:', );`
- Shortcuts table:
```
Shortcut    Description
cd          Inserts console.log with line number
cf          Inserts debug.logn() that opens file in VS Code
```

## 🗺️ Roadmap
- Support for additional themes and color options.
- Snippet support for WebStorm.
- Add support for log levels (info, debug, trace).


## 🔗 Links
[![instagram](https://img.shields.io/badge/instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/codingyaari)
[![x](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/codingyaari)
[![facebook](https://img.shields.io/badge/facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=61579800007414)
[![youtube](https://img.shields.io/badge/youtube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@codingyaari)
[![stackoverflow](https://img.shields.io/badge/stackoverflow-F58025?style=for-the-badge&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/31368342/codingyaari)
[![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/~codingyaari)


 ## 🤝 Contributing
 Contributions are always welcome!
 - If you'd like to make improvements, please create a Pull Request. For any bugs or feature requests, please create an Issue.
 
- **GitHub:** [Samyy-decod](https://github.com/Samyy-decod)
 _______________________________________________________________________________________
 ## 🧑‍💻 Author
- **GitHub:** [codingyaari](https://github.com/codingyaari)
