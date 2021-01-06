import readlineSync from 'readline-sync';
import TicTacBoard from '../../core/TicTacBoard';
import { ITicTacUI, Point2D, ValidChar } from '../../core/Types';

export default class CLI implements ITicTacUI {
    /**
     * Synchronously requests boolean user input.
     * @param query
     * @param options
     */
    public static promptBoolean(
        query: string,
        options?: readlineSync.BasicOptions | undefined,
        positiveChoices = ['y', 'yes'],
        negativeChoices = ['n', 'no'],
    ) {
        function isAffirmativeAnswer(answer: string, choices: string[]): boolean {
            return choices.includes(answer.toLowerCase());
        }
        function isNegativeAnswer(answer: string, choices: string[]): boolean {
            return choices.includes(answer.toLowerCase());
        }
        function isValidAnswer(answer: string, positiveChoices: string[], negativeChoices: string[]): boolean {
            return isAffirmativeAnswer(answer, positiveChoices) || isNegativeAnswer(answer, negativeChoices);
        }

        while (true) {
            var answer = readlineSync.question(`${query}\n> `, options);
            if (!isValidAnswer(answer, positiveChoices, negativeChoices)) {
                console.clear();
                console.error(`Invalid response: "${answer}" - Valid answers: Y/N`);
            } else {
                const isAffirmative = isAffirmativeAnswer(answer, positiveChoices);
                const isNegative = isNegativeAnswer(answer, negativeChoices);
                if ((isAffirmative && isAffirmative) || (!isAffirmative && !isNegative)) {
                    throw 'Invalid affirmative/negative choices!';
                } else {
                    return isAffirmative;
                }
            }
        }
    }

    /**
     * Synchronously requests user input for the target board position to place the character on.
     * @param query
     * @param options
     */
    public static promptPos(query: string, options?: readlineSync.BasicOptions | undefined) {
        while (true) {
            var valX = readlineSync.questionInt(`${query} - Which collumn?\n> `, options);
            if (valX < 1 || valX > 3) {
                console.error(`Invalid response: "${valX}" - It must be a number between 1-3 `);
                continue;
            }

            var valY = readlineSync.questionInt(`Which row?\n> `, options);
            if (valY < 1 || valY > 3) {
                console.error(`Invalid response: "${valY}" - It must be a number between 1-3 `);
                continue;
            }

            return new Point2D(valX - 1, valY - 1);
        }
    }

    /**
     * Clears the console.
     */
    private static clearConsole() {
        console.clear();
    }

    /**
     * Prints out the board to the console.
     * @param board
     */
    private static printBoard(board: TicTacBoard) {
        var str = '';

        function getRowPrint(y: number): string {
            var rowStr = '';
            board.boardArray[y].forEach((c) => {
                if (rowStr.length) {
                    rowStr += ` | ${c}`;
                } else {
                    rowStr += ` ${c}`;
                }
            });
            rowStr += ` `;
            return rowStr;
        }

        board.boardArray.forEach((yArr, index) => {
            if (index != 0) {
                str += '---+---+---\n';
            }
            str += `${getRowPrint(index)}\n`;
        });

        console.log(str);
    }

    /**
     * Initializes an instance for the Command Line User Interface.
     */
    constructor() {
        console.clear();
        console.log('\nUsing Command Line User Interface for TicTac-Node.\n\n');
    }

    public update(board: TicTacBoard): void {
        CLI.clearConsole();
        CLI.printBoard(board);
    }

    public promptGameRound(char: ValidChar, board: TicTacBoard): void {
        while (true) {
            var valid = false;
            const pos = CLI.promptPos(`Player ${char}`);
            if (board.getPos(pos) == ' ') {
                board.setPos(char, pos);
                valid = true;
            } else {
                this.update(board);
                console.error('Position is already taken!');
            }

            if (valid) break;
        }
    }

    public onGameOver(char: ValidChar, board: TicTacBoard): void {
        this.update(board);
        console.error(`Player ${char} has won!`);
    }
}
