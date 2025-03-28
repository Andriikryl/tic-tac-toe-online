import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
export function GameCard({ login, rating }: { login: string; rating: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Game with: {login}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Raiteng: {rating}</p>
      </CardContent>
    </Card>
  );
}
