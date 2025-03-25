import { getIdleGames } from "@/entities/game/server";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";

export async function GamesList() {
const games = await getIdleGames()

return (
    <div>
        {
            games.map((game) => {
                return (
        <Card key={game.id}>
            <CardTitle>Organizetor: {game.creator.login}</CardTitle>
            <CardContent>
               <p>Raiteng: {game.creator.rating}</p>
            </CardContent>
        </Card>

                )
            })
        }
    </div>
)
} 