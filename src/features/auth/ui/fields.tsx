import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useId } from "react";

export function AuthFields() {
  const id1 = useId();
  const id2 = useId();
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={id1}>Login</Label>
        <Input
          id={id1}
          name="login"
          type="login"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={id2}>Password</Label>
        <Input
          id={id2}
          name="password"
          type="password"
          required
        />
      </div>
    </>
  );
}
