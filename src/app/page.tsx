import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export default async function Home() {
  const games = await prisma.game.findMany();
  console.log(games);
  return (
    <div>
      <Button size="lg">Hellow</Button>
      {games.map((game) => {
        return (
          <Card key={game.id}>
            <CardHeader>
              <CardTitle>{game.naem}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
