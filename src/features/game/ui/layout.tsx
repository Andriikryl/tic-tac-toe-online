import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import React from "react";

export function GameLayout({
  status,
  field,
  players,
}: {
  players?: React.ReactNode;
  status?: React.ReactNode;
  field?: React.ReactNode;
  
}) {
  return (
    <div>
      <Card>
        <CardHeader>Tic-Tac-Toe</CardHeader>
        <CardContent>
            {players}
          Staus: {status}
          <div className="flex items-center justify-center">{field}</div>
        </CardContent>
        <CardFooter>footer</CardFooter>
      </Card>
    </div>
  );
}
