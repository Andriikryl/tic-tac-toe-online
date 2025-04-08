import { Button } from "@/shared/ui/button";

export function SubmitBotton({children, isPending}: { children: React.ReactNode, isPending?: boolean }) {
  return (
    <Button disabled={isPending} className="w-full" type="submit">
      {children}
    </Button>
  );
}
