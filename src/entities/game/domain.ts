export type Game = GameIdle | GameInProgress | GameOver | GameOverDrow

export type GameIdle = {
    id: string,
    creator: Player,
    type: "idle"
}
export type GameInProgress = {
    id: string,
    players: Player[],
    field: Field[],
    type: "in-progress"
}
export type GameOver = {
    id: string,
    players: Player[],
    field: Field[],
    type: "game-over"
    winner: Player
}

export type GameOverDrow = {
    id: string,
    players: Player[],
    field: Field[],
    type: "game-over-drow"

}

export type Player = {
    id: string,
    login: string,
    rating: number,
}

export type Field = Cell[]

export type Cell = GameSymbol | null
export type GameSymbol = string