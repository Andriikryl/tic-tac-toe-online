import { GameIdleEntity } from "../domain"
import { gameRepository } from "../repositories/game"

export async function getIdleGames (): Promise<GameIdleEntity[]> {
  const games = await gameRepository.gamestList({
    status: "idle"
})
  return games as GameIdleEntity[];
}