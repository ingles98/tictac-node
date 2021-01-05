import { Point2D, ValidCharOrEmpty } from "./Types"

/**
 * The representation of the game's board.
 * 
 * Also contains the logic for setting player's position.
 */
export default class TicTacBoard {
    /**
     * The 2-dimensional array that represents the actual game board's data.
     */
    private array: (ValidCharOrEmpty)[][]

    /**
     * Returns the game board's raw data as an array.
     */
    public get boardArray() {
        return this.array
    }

    constructor() {
        this.array = []
        for (let y = 0; y < 3; y++) {
            var yArray: (ValidCharOrEmpty)[] = []
            for (let x = 0; x < 3; x++) {
                yArray.push(" ")
            }
            this.array.push(yArray)
        }
    }

    /**
     * Sets the specified player's character on the given position.
     * @param char The player's character.
     * @param pos Target position.
     */
    public setPos(char: ValidCharOrEmpty, pos: Point2D) {
        const posY = this.array[pos.y]
        if (pos.x >= 0 && pos.x < posY.length) {
            posY[pos.x] = char
        } else {
            throw "Invalid position"
        }
    }

    /**
     * Clears the specified position
     * 
     * *TODO: This has absolutely no use.*
     * @param pos Target position.
     */
    public clearPos(pos: Point2D) {
        this.setPos(" ", pos)
    }

    /**
     * Gets the character on the specified position.
     * @param pos Target position.
     */
    public getPos(pos: Point2D): ValidCharOrEmpty {
        const posY = this.array[pos.y]
        if (pos.x >= 0 && pos.x < posY.length) {
            return posY[pos.x]
        } else {
            throw "Invalid position"
        }
    }
}