import { GamesList } from "@/features/games-list/server";
import { Button } from "@/shared/ui/button";


export default async function Home() {


  return (
    <div>
      <Button size="lg">Hellow</Button>
      <GamesList/>
    </div>
  );
}
