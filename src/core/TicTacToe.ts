import TicTacBoard from './TicTacBoard';
import { ValidCharOrEmpty, ValidChar, ValidCharacters, ITicTacUI, Point2D } from './Types';

export default class TicTacToe {
    private _useAI: boolean = false;
    private _isPlaying: boolean = false;

    private static player1 = ValidCharacters.Cross;
    private static player2 = ValidCharacters.Circle;
    private board: TicTacBoard;
    private UI: ITicTacUI;

    /**
     * Whether this game is currently active or not.
     */
    public get isActive() {
        return this._isPlaying;
    }

    /**
     * Initializes a new tic-tac-toe game.
     * @param ui The user interface to be used.
     */
    constructor(ui: ITicTacUI) {
        this.board = new TicTacBoard();
        this.UI = ui;
    }

    /**
     * Starts the initialized game.
     * @param useAI Whether to use AI or player versus player. *(Default: false - PvP)*
     */
    public start(useAI: boolean = false) {
        this._useAI = useAI;
        this._isPlaying = true;
        this.loop();
    }

    // Internal win condition checks
    // TODO: I am not really feeling like leaveing these here but I'm unsure if placing them on a different class or a closure would be healthy.

    /**
     * Checks if the specified collumn is currently under a win condition.
     * @param col
     */
    private checkWinColumn(col: number): ValidCharOrEmpty {
        var lastChar: ValidCharOrEmpty | '' = '';
        for (let index = 0; index < 3; index++) {
            var char = this.board.getPos(new Point2D(col, index));
            if (char == ValidCharacters.Empty) {
                return char;
            } else if (!lastChar && (char as ValidChar)) {
                lastChar = char;
                continue;
            } else if (char != lastChar) {
                return ValidCharacters.Empty;
            }
        }
        if (!lastChar) lastChar = ValidCharacters.Empty;
        return lastChar;
    }

    /**
     * Checks if the specified row is currently under a win condition.
     * @param row
     */
    private checkWinRow(row: number): ValidCharOrEmpty {
        var lastChar: ValidCharOrEmpty | '' = '';
        for (let index = 0; index < 3; index++) {
            var char = this.board.getPos(new Point2D(index, row));
            if (char == ValidCharacters.Empty) {
                return char;
            } else if (!lastChar && (char as ValidChar)) {
                lastChar = char;
                continue;
            } else if (char != lastChar) {
                return ValidCharacters.Empty;
            }
        }
        if (!lastChar) lastChar = ValidCharacters.Empty;
        return lastChar;
    }

    /**
     * Checks if the specified diagonal is currently under a win condition.
     * @param inverted Whether to check the decreasing diagonal (false) or the increasing one (true)
     *
     * *(TODO: Inverted is perhaps not the best name for this.)*
     */
    private checkWinDiagonal(inverted: boolean = false): ValidCharOrEmpty {
        var lastChar: ValidCharOrEmpty | '' = '';
        for (let index = 0; index < 3; index++) {
            var char = this.board.getPos(new Point2D(inverted ? 2 - index : index, index));
            if (char == ValidCharacters.Empty) {
                return char;
            } else if (!lastChar && (char as ValidChar)) {
                lastChar = char;
                continue;
            } else if (char != lastChar) {
                return ValidCharacters.Empty;
            }
        }
        if (!lastChar) lastChar = ValidCharacters.Empty;
        return lastChar;
    }

    // END Internal win condition checks

    /**
     * Checks whether the game is over AND processes the game logic for the win.
     */
    private checkWinCondition(): boolean {
        var won: ValidCharOrEmpty = ValidCharacters.Empty;

        for (let index = 0; index < 3; index++) {
            var resultCol = this.checkWinColumn(index);
            if (resultCol != ValidCharacters.Empty) {
                won = resultCol;
                continue;
            }
            var resultRow = this.checkWinRow(index);
            if (resultRow != ValidCharacters.Empty) {
                won = resultRow;
                continue;
            }
        }

        if (won == ValidCharacters.Empty) {
            var resultDiag = this.checkWinDiagonal(true);
            if (resultDiag as ValidChar) {
                won = resultDiag;
            }
            var resultDiagInv = this.checkWinDiagonal(false);
            if (resultDiagInv as ValidChar) {
                won = resultDiagInv;
            }
        }

        if (won != ValidCharacters.Empty) {
            this.UI.onGameOver(won, this.board);
            this._isPlaying = false;
            return true;
        }
        return false;
    }

    /**
     * Notifies the UI that the game has been updated.
     */
    private updateRenderer() {
        this.UI.update(this.board);
    }

    /**
     * Returns true if player has won.
     * @param playerChar
     */
    private promptPlayer(playerChar: ValidChar): boolean {
        if (playerChar == TicTacToe.player2 && this._useAI) {
            // AI - Just random placement.

            var emptyPositions: Point2D[] = [];
            this.board.boardArray.forEach((rowArray, y) => {
                rowArray.forEach((char, x) => {
                    if (char == ValidCharacters.Empty) emptyPositions.push(new Point2D(x, y));
                });
            });
            const randomEmptySpace = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];

            this.board.setPos(TicTacToe.player2, randomEmptySpace);
            this.checkWinCondition();
        } else {
            this.UI.promptGameRound(playerChar, this.board);
        }
        return this.checkWinCondition();
    }

    /**
     * The game's loop.
     */
    private loop() {
        while (this._isPlaying) {
            this.updateRenderer();

            if (this.promptPlayer(TicTacToe.player1)) break;

            this.updateRenderer();

            if (this.promptPlayer(TicTacToe.player2)) break;

            this.updateRenderer();
        }
    }
}
