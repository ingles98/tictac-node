
<h1 align="center">
  🕹 TicTac-Node ❌ | ⭕️ |   
</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/Node-v15.2.1-blue.svg" />
  <img src="https://img.shields.io/badge/NPM-v7.0.8-blue.svg" />
  <a href="https://github.com/ingles98/tictac-node#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ingles98/tictac-node/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ingles98/tictac-node/blob/master/LICENSE" target="_blank">
    <img alt="License: TODO" src="https://img.shields.io/github/license/ingles98/tictac-node" />
  </a>
</p>

More than just a tic tac toe game.

This project is more of a demo for code quality, readability, documentation, modularity and so on...

It includes a UI implementation that lets you play the game using command line, but by implementing **ITicTacUI** you're able to use this package to make a tictactoe webserver, or anything else really.

I intend on implementing an example of a web UI using Vue+Express and maybe multiplayer as well.

Tic Tac Toe is simple but there's many things you can work on using it as a foundation to train yourself.


## Prerequisites

- Node v15.2.1
- NPM v7.0.8

## Install

`npm i git+https://github.com/ingles98/tictac-node`


## Usage

```typescript
//examples/run_cli.ts

import TicTacNode from 'tictac-node'

while (true) {
    console.clear()

    const game = new TicTacNode.Core.TicTacToe(new TicTacNode.UI.CLI())
    game.start( TicTacNode.UI.CLI.promptBoolean("Versus AI?", undefined) )

    if (!TicTacNode.UI.CLI.promptBoolean("Start a new game?"))
        break
}
```

## Run tests

(TODO: Actually implement tests)

Using JEST. I personally recommend using the vscode-jest extension on Visual Studio Code if you use it.

`npm run test`

## Documentation

Everything (mostly?) is documented and the documentation has been generated to the `docs` folder.


## Author

👤 **Filipe Reis**

* Website: http://filipereis.atwebpages.com/
* GitHub: [@ingles98](https://github.com/ingles98)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ingles98/tictac-node/issues). You can also take a look at the [contributing guide](https://github.com/ingles98/tictac-node/blob/master/CONTRIBUTING.md).
