"use client"
import { GameDomain } from "@/entities/game";

export function GameField({
  game,
  onCellClick,
}: {
  game: GameDomain.GameEntity;
  onCellClick?: (index: number) => void;
}) {
  return (
    <div className=" grid grid-cols-3">
      {game.field?.map((symbol, i) => {
        return (
          <button
            onClick={() => onCellClick?.(i)}
            key={i}
            className=" border w-10 h-10 flex justify-center items-center"
          >
            {symbol ?? ""}
          </button>
        );
      })}
    </div>
  );
}
