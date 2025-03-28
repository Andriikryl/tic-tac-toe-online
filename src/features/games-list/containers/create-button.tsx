"use client";

import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { useActionState } from "@/shared/lib/react";
import { matchEither, right } from "@/shared/lib/either";

export function CreateButton() {
  const [data, dispatch, isPending] = useActionState(createGameAction, right(undefined));
  return(
    <div>
      <Button disabled={isPending} onClick={createGameAction}>craete game</Button>;
      {matchEither(data, {
        right: () => null,
        left: (e) => ({
          ["can-ccreate-only-one-game"]: "you can create only one game",
          ["user not found!"]: "user do not found! Sory"
        })[e]
      }}
    </div>
  )
}
