import { PlayerEntity } from "../domain"
import { gameRepository } from "../repositories/game"
import cuid from "cuid"
export async function createGame (player: PlayerEntity) {

    const playersGams = await gameRepository.gamestList({
        players: {some :{ id: player.id}}
    })
    const isGameInIdleStatus = playersGams.some((game) => game.status === "idle" && game.creator.id === player.id)
     if(isGameInIdleStatus){
        return {
            type: "error",
            error: "can-ccreate-only-one-game"
        } as const;
     }

  const createdGame = await gameRepository.createGame({
    id: cuid(),
    creator: player,
    status: "idle"
})
  return createdGame
}