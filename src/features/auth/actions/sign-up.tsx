"use server"

import { createUser, sessionService } from "@/entities/user/server";
import { left, mapLeft } from "@/shared/lib/either";
import { redirect } from "next/navigation";
import { z } from "zod";

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
});

export const signUpAction = async (state: unknown, formData: FormData) => {
  console.log(formData.get("login"), formData.get("password"));

  const data = Object.fromEntries(formData.entries());

  const result = formDataSchema.safeParse(data);

  if (!result.success) {
    return left(`errror validation: ${result.error.message}`);
  }

  const createUserResult = await createUser(result.data);

  if(createUserResult.type === 'right'){
    await sessionService.addSession(createUserResult.value)

    redirect("/")
  }

  return mapLeft(createUserResult, (error) => {
    return {
      "user-login-exists": "user whith this login allredy exist",
    }[error];
  });
};
