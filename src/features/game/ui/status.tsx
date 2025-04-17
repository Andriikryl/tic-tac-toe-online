import { GameDomain } from "@/entities/game";

export function GameStatus({ game }: { game: GameDomain.GameEntity }) {
  switch (game.status) {
    case "idle":
      return (
        <div>
          <p>Waiting player</p>
        </div>
      );
    case "inProgress":{
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      // const nextSymbol = GameDomain.getNextSymbol(currentSymbol)
      return (
        <div>
          <p>Hod : {currentSymbol}</p>
        </div>
      );
    }
    case "gameOver":{
      const currentSymbol = GameDomain.getGameCurrentStep(game);
      // const nextSymbol = GameDomain.getNextSymbol(currentSymbol)
      return (
        <div>
          <p>Winner : {currentSymbol}</p>
        </div>
      );
    }
    case "gameOverDraw":{
        return (
          <div>
            <p>No payers win</p>
          </div>
        );
    }
  }
}
