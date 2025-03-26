import { prisma } from "@/shared/lib/db";
import {  GameEntity, GameIdleEntity, GameOverEntity } from "../domain";
import { Game, Prisma, User } from "@prisma/client";
import {z} from "zod"
import { removePassword } from "@/shared/lib/password";


async function gamestList(where: Prisma.GameWhereInput):Promise<GameEntity[]> {
        const games = await prisma.game.findMany({
            where,
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
    const players = game.players.map(removePassword)
    switch(game.status){
        case "idle": {
            const [creator] = players
            if(!creator){
                throw new Error("creator should be in the game idle")
            }
            return {
                id: game.id,
                creator: creator, 
                status: game.status
            } satisfies GameIdleEntity
        }
        case "inProgress": 
        case "gameOverDraw": {
            return {
                id: game.id,
                players: game.players,
                status: game.status,
                field: fieldSchema.parse(game.field)
            } 
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
    }
}

export const gameRepository = {gamestList}