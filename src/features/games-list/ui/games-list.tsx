import { getIdleGames } from "@/entities/game/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export async function GamesList() {
const games = await getIdleGames()

return (
    <div>
        {
            games.map((game) => {
                return (
        <Card key={game.id}>
            <CardHeader>
            <CardTitle>Game with: {game.creator.login}</CardTitle>
            </CardHeader>
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