import { prisma } from "@/shared/lib/db";
import {  GameEntity, GameIdleEntity, GameInProgressEntity, GameOverDrawEntity, GameOverEntity } from "../domain";
import { Game, User } from "@prisma/client";
import {z} from "zod"

async function gamestList():Promise<GameEntity[]> {
        const games = await prisma.game.findMany({
          include: {
              winner: true,
              players: true,
          }
        })

        return games.map(dbGameToEntity)
}

const fieldSchema = z.array(z.union([z.string(), z.null()]))

function dbGameToEntity(game: Game & {
    players: User[];
    winner?: User | null
}):GameEntity{
    switch(game.status){
        case "idle": {
            return {
                id: game.id,
                players: game.players,
                status: game.status
            } satisfies GameIdleEntity
        }
        case "inProgress": {
            return {
                id: game.id,
                players: game.players,
                status: game.status,
                field: fieldSchema.parse(game.field)
            } satisfies GameInProgressEntity
        }
        case "gameOver": {
            if(!game.winner){
                throw new Error("winner should be in the game over")
            }
            return {
                id: game.id,
                players: game.players,
                status: game.status,
                field: fieldSchema.parse(game.field),
                winner: game.winner
            } satisfies GameOverEntity
        }
        case "gameOverDraw": {
            return {
                id: game.id,
                players: game.players,
                status: game.status,
                field: fieldSchema.parse(game.field)
            } satisfies GameOverDrawEntity
        }
    }
}

export const gameRepository = {gamestList}