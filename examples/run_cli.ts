import TicTacNode from '../src'

while (true) {
    console.clear()

    const game = new TicTacNode.Core.TicTacToe(new TicTacNode.UI.CLI())
    game.start( TicTacNode.UI.CLI.promptBoolean("Versus AI?", undefined) )

    if (!TicTacNode.UI.CLI.promptBoolean("Start a new game?"))
        break
}