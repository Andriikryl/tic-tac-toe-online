"use server"

import { ferifyUserPassword, sessionService } from "@/entities/user/server";
import { left, mapLeft } from "@/shared/lib/either";
import { redirect } from "next/navigation";
import { z } from "zod";

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
});

export const signInAction = async (state: unknown, formData: FormData) => {
  console.log(formData.get("login"), formData.get("password"));

  const data = Object.fromEntries(formData.entries());

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    return left(`errror validation: ${result.error.message}`);
  }

  const verifyUserResult = await ferifyUserPassword(result.data);

  if(verifyUserResult.type === 'right'){
    await sessionService.addSession(verifyUserResult.value)

    redirect("/")
  }

  return mapLeft(verifyUserResult, (error) => {
    return {
      "wrong-login-or-password": "Do not correct password or login",
    }[error];
  });
};
