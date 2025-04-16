"use server";
import { ferifyUserPassword, sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
});

export type SignInFormState = {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
    _errors?: string;
  };
};

export const signInAction = async (
  state: SignInFormState,
  formData: FormData
): Promise<SignInFormState> => {
  console.log(formData.get("login"), formData.get("password"));

  const data = Object.fromEntries(formData.entries());

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    const formatedErrors = result.error.format();

    return {
      formData,
      errors: {
        login: formatedErrors.login?._errors.join(", "),
        password: formatedErrors.password?._errors.join(", "),
        _errors: formatedErrors.login?._errors.join(", "),
      },
    };
  }

  const verifyUserResult = await ferifyUserPassword(result.data);

  if (verifyUserResult.type === "right") {
    await sessionService.addSession(verifyUserResult.value);

    redirect("/");
  }

  const errors = {
    "wrong-login-or-password": "Do not correct password or login",
  }[verifyUserResult.error];

  return {
    formData,
    errors: {
      _errors: errors,
    },
  };
};
