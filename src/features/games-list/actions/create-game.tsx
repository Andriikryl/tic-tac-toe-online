"use server"
import { createGame } from "@/entities/game/server"
import { prisma } from "@/shared/lib/db"

export const reateGameAction = async () => {
    const user = await prisma.user.findFirst()
    if(!user){
        return {
            type: "error",
            error: "user-not-founde"
        } as const
    }
   const gameResult =  await createGame(user)
   return gameResult
}