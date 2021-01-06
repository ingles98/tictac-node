import TicTacBoard from './TicTacBoard';

export type CharEmpty = ' ';
export type CharCross = 'X';
export type CharCircle = 'O';
export type ValidChar = CharCross | CharCircle;
export type ValidCharOrEmpty = ValidChar | CharEmpty;

/**
 * All the valid characters in the game board.
 */
export const ValidCharacters = {
    Cross: 'X' as ValidChar,
    Circle: 'O' as ValidChar,
    Empty: ' ' as CharEmpty,
};

/**
 * UI to be used to play TicTac-Node
 */
export interface ITicTacUI {
    /**
     * Called by TicTacToe to run any required logic on the UI to update (visuals, data, etc.)
     * @param board The game board.
     */
    update(board: TicTacBoard): void;

    /**
     * Request player "@param char" to play their turn.
     * @param char The player.
     * @param board The game board.
     */
    promptGameRound(char: ValidChar, board: TicTacBoard): void;

    /**
     * Called on game over. Tells the UI which player has won and the current game data.
     * @param char The player that won.
     * @param board The game board.
     */
    onGameOver(char: ValidChar, board: TicTacBoard): void;
}

/**
 * Simple 2-dimensional point struct.
 *
 * *Might have just used a simple interface.*
 */
export class Point2D {
    constructor(public x: number, public y: number) {}
}
