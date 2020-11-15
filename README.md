# Heroes Angular Serverless

TypeScript Node/Express 👉TypeScript Serverless ➕ Angular

This project was created to help represent a fundamental app written with Node Express APIs and TypeScript that can be shifted to Serverless Functions with TypeScript.

The client app is Angular, however it could just as easily be Vue or React. The heroes and villains theme is used throughout the app.

by [John Papa](http://twitter.com/john_papa)

Comparative client apps written with Vue and React can be found at at [github.com/johnpapa/heroes-vue](https://github.com/johnpapa/heroes-vue) and [github.com/johnpapa/heroes-react](https://github.com/johnpapa/heroes-react)

## Why

I love Node and Express for creating APIs! These require a server and paying for that server in the cloud. Shifting to serverless alleviates the cost, the server upkeep, helps scale up and down easily, and reduces the surface area of the middleware required for a robust Express app. Is it perfect? No, of course not! But this is a solid option if these factors affect you.

## Prerequisites

Make a copy of the `env.example` file named `.env`, in the root of the project. It should contain the following code.

`.env`

```
NODE_ENV=development
PORT=7070
WWW=./
```

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/johnpapa/express-to-functions.git
   cd express-to-functions
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

## Build and Serve Dev

1. Build the Node Express and the Angular code

   ```bash
   npm run full-stack:build
   ```

1. Run the app

   ```bash
   npm run full-stack:dev
   ```

## Build and Serve Production

1. Build the Node Express and the Angular code

   ```bash
   npm run full-stack:build
   ```

1. Run the app

   ```bash
   npm run node:start
   ```

## Debug Node Express and Angular

1. Open `proxy.conf.json` and change the port to `7070`

1. Open the VS Code Command Palette `F1`

1. Type `View: Show Debug` and press `ENTER`

1. Select `Debug Express and Angular`

1. Press `F5`

1. Open the browser to <http://localhost:7070>

You may now set break points in the Express and Angular code.

## Debug Functions and Angular

1. Open `proxy.conf.json` and change the port to `7071`

1. Open the VS Code Command Palette `F1`

1. Type `View: Show Debug` and press `ENTER`

1. Select `Debug Functions and Angular`

1. Press `F5`

1. Open the browser to <http://localhost:7071>

You may now set break points in the Functions and Angular code.

## Problems or Suggestions

[Open an issue here](/issues)

## Resources

- [Azure Free Trial](https://azure.microsoft.com/free/?WT.mc_id=javascript-0000-jopapa)
- [VS Code](https://code.visualstudio.com/?WT.mc_id=javascript-0000-jopapa)
- [VS Code Extension for Node on Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=javascript-0000-jopapa)
- [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode?WT.mc_id=javascript-0000-jopapa)
- [VS Code - macOS keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf?WT.mc_id=javascript-0000-jopapa)
- [VS Code - Windows keys](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf?WT.mc_id=javascript-0000-jopapa)
- Azure Functions [local.settings.json](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=javascript-0000-jopapa#local-settings-file?WT.mc_id=expresstofunctions-github-jopapa) file
- Tutorial to [Deploy to Azure Using Azure Functions](https://code.visualstudio.com/tutorials/functions-extension/getting-started?WT.mc_id=javascript-0000-jopapa)

### Debugging Resources

- [Debugging Angular in VS Code](https://code.visualstudio.com/docs/nodejs/angular-tutorial?WT.mc_id=javascript-0000-jopapa)
- [Debugging React in VS Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial?WT.mc_id=javascript-0000-jopapa)
- [Debugging Vue in VS Code](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial?WT.mc_id=javascript-0000-jopapa)
- [Tasks in VS Code](https://code.visualstudio.com/Docs/editor/tasks?WT.mc_id=javascript-0000-jopapa)
