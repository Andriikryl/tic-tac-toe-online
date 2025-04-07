import { Button } from "@/shared/ui/button";

export function SubmitBotton({children}: { children: React.ReactNode }) {
  return (
    <Button className="w-full" type="submit">
      {children}
    </Button>
  );
}
