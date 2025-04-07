import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useId } from "react";

export function AuthFields({
  login,
  password,
  onChangeLogin,
  onChangePassword,
}: {
  login: string;
  password: string;
  onChangeLogin: (login: string) => void;
  onChangePassword: (password: string) => void;
}) {
  const id1 = useId();
  const id2 = useId();
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor={id1}>Login</Label>
        <Input
          value={login}
          onChange={(e) => onChangeLogin(e.target.value)}
          id={id1}
          type="email"
          placeholder="m@example.com"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={id2}>Password</Label>
        <Input
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          id={id2}
          type="password"
          required
        />
      </div>
    </>
  );
}
