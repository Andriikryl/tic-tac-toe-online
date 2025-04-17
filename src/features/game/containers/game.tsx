
import { GameLayout } from "../ui/layout";
import { GamePlayers } from "../ui/players";
import { GameStatus } from "../ui/status";
import { GameField } from "../ui/field";
import { GameDomain } from "@/entities/game";

export function Game({ gameId }: { gameId: string }) {
  const game: GameDomain.GameEntity = {
    id: "1",
    creator: {
      id: "1",
      login: "test soper",
      rating: 2000,
    },
    status: "idle",
    field: Array(9).fill(null)
  };
  return (
    <GameLayout
      players={<GamePlayers game={game} />}
      status={<GameStatus game={game} />}
      field={<GameField game={game} />}
    />
  );
}
