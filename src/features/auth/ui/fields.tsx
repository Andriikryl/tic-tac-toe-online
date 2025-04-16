import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useId } from "react";

export function AuthFields({errors, formData} : {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
  }
}) {
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
          defaultValue={formData?.get("login")?.toString()}
        />
      </div>
      {errors?.login && <div>{errors.login}</div>}
      <div className="space-y-2">
        <Label htmlFor={id2}>Password</Label>
        <Input
          id={id2}
          name="password"
          type="password"
          required
          defaultValue={formData?.get("password")?.toString()}
        />
      </div>
      {errors?.login && <div>{errors.password}</div>}
    </>
  );
}
