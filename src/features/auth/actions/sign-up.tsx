"use server"
import { createUser, sessionService } from "@/entities/user/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const formDataSchema = z.object({
  login: z.string().min(3),
  password: z.string().min(3),
});

export type SignUpFormState = {
  formData?: FormData;
  errors?: {
    login?: string;
    password?: string;
    _errors?: string;
  };
};

export const signUpAction = async (state: SignUpFormState, formData: FormData): Promise<SignUpFormState> => {
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

  const createUserResult = await createUser(result.data);

  if(createUserResult.type === 'right'){
    await sessionService.addSession(createUserResult.value)

    redirect("/")
  }

  const errors = {
    "user-login-exists": "user whith this login allredy exist",
  }[createUserResult.error];

  return {
    formData,
    errors: {
      _errors: errors,
    },
  };
};
