import { Game } from "@/features/game/server";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
        <Game gameId={id}/>
    </div>
  );
}
