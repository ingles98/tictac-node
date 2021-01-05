<% authorGithubUsername = authorGithubUsername ? authorGithubUsername : "ingles98" -%>
<% projectPrerequisites = projectPrerequisites && projectPrerequisites.length ? projectPrerequisites : [
  {name: "Node", value: "v15.2.1"},
  {name: "NPM", value: "v7.0.8"},
] -%>

<h1 align="center">
  🕹 TicTac-Node ❌ | ⭕️ |   
</h1>
<p>
<% if (isProjectOnNpm) { -%>
  <a href="https://www.npmjs.com/package/<%= projectName %>" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/<%= projectName %>.svg">
  </a>
<% } -%>
<% if (projectVersion && !isProjectOnNpm) { -%>
  <img alt="Version" src="https://img.shields.io/badge/version-<%= projectVersion %>-blue.svg?cacheSeconds=2592000" />
<% } -%>
<% if (projectPrerequisites) { -%>
<% projectPrerequisites.map(({ name, value }) => { -%>
  <img src="https://img.shields.io/badge/<%= name %>-<%= encodeURIComponent(value) %>-blue.svg" />
<% }) -%>
<% } -%>
<% if (projectDocumentationUrl) { -%>
  <a href="<%= projectDocumentationUrl %>" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
<% } -%>
<% if (isGithubRepos) { -%>
  <a href="<%= repositoryUrl %>/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
<% } -%>
<% if (licenseName) { -%>
  <a href="<%= licenseUrl ? licenseUrl : '#' %>" target="_blank">
    <img alt="License: <%= licenseName %>" src="https://img.shields.io/<%= isGithubRepos ? `github/license/${authorGithubUsername}/${projectName}` : `badge/License-${licenseName}-yellow.svg` %>" />
  </a>
<% } -%>
<% if (authorTwitterUsername) { -%>
  <a href="https://twitter.com/<%= authorTwitterUsername %>" target="_blank">
    <img alt="Twitter: <%= authorTwitterUsername %>" src="https://img.shields.io/twitter/follow/<%= authorTwitterUsername %>.svg?style=social" />
  </a>
<% } -%>
</p>

More than just a tic tac toe game.

This project is more of a demo for code quality, readability, documentation, modularity and so on...

It includes a UI implementation that lets you play the game using command line, but by implementing **ITicTacUI** you're able to use this package to make a tictactoe webserver, or anything else really.

I intend on implementing an example of a web UI using Vue+Express and maybe multiplayer as well.

Tic Tac Toe is simple but there's many things you can work on using it as a foundation to train yourself.

<% if (projectHomepage) { -%>

### 🏠 [Homepage](<%= projectHomepage %>)
<% } -%>
<% if (projectDemoUrl) { -%>

### ✨ [Demo](<%= projectDemoUrl %>)
<% } -%>
<% if (projectPrerequisites && projectPrerequisites.length) { -%>

## Prerequisites

<% projectPrerequisites.map(({ name, value }) => { -%>
- <%= name %> <%= value %>
<% }) -%>
<% } -%>

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

<% if (authorName || authorTwitterUsername || authorGithubUsername) { -%>

## Author
<% if (authorName) { %>
👤 **<%= authorName %>**
<% } %>
<% if (authorWebsite) { -%>
* Website: <%= authorWebsite %>
<% } -%>
<% if (authorTwitterUsername) { -%>
* Twitter: [@<%= authorTwitterUsername %>](https://twitter.com/<%= authorTwitterUsername %>)
<% } -%>
<% if (authorGithubUsername) { -%>
* GitHub: [@<%= authorGithubUsername %>](https://github.com/<%= authorGithubUsername %>)
<% } -%>
<% if (authorLinkedInUsername) { -%>
* LinkedIn: [@<%= authorLinkedInUsername %>](https://linkedin.com/in/<%= authorLinkedInUsername %>)
<% } -%>
<% } -%>
<% if (issuesUrl) { -%>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](<%= issuesUrl %>). <%= contributingUrl ? `You can also take a look at the [contributing guide](${contributingUrl}).` : '' %>
<% } -%>
