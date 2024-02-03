# vue-capacitor-iframe-android

Example project that reproduces [github issue 6377](https://github.com/ionic-team/capacitor/issues/6377)

## Issue description

In Android, setting the iframe src with a URL.createObjectURL will result on

![Web behavior](https://raw.githubusercontent.com/psantos9/vue-capacitor-iframe-android/main/public/web-behavior.png)

![Android behavior](https://raw.githubusercontent.com/psantos9/vue-capacitor-iframe-android/main/public/android-behavior.png)

![Empty android iframe](https://raw.githubusercontent.com/psantos9/vue-capacitor-iframe-android/main/public/empty-android-iframe.png)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
