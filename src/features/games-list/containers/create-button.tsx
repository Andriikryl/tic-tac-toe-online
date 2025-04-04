"use client";

import { Button } from "@/shared/ui/button";
import { createGameAction } from "../actions/create-game";
import { useActionState } from "@/shared/lib/react";
import { mapLeft, right } from "@/shared/lib/either";
import { startTransition } from "react";

export function CreateButton() {
  const [state, dispatch, isPending] = useActionState(createGameAction, right(undefined));
  return(
    <div>
      <Button disabled={isPending} onClick={() => startTransition(dispatch)} error={mapLeft(state,
       (e) => ({
          ["can-ccreate-only-one-game"]: "you can create only one game",
          ["user not found!"]: "user do not found! Sory"
        })[e]
      )}>craete game</Button>
    </div>
  )
}
