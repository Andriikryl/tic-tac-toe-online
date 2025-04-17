import { GameDomain } from "@/entities/game";


export function GamePlayers({ game }: { game: GameDomain.GameEntity }) {
  const firstPlayer =
    game.status === "idle" ? game.creator : game.players[0]
  const secondPlayer =
    game.status === "idle" ? undefined : game.players[0]
  return (
    <div>
      <div>X - {firstPlayer.login} : {firstPlayer.rating}</div>
      <div>0 - {secondPlayer?.login ?? "...."} : {secondPlayer?.rating ?? "...."}</div>
    </div>
  );
}
