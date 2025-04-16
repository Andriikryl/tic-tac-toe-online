"use client";
import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { SubmitBotton } from "../ui/submit-button";
import { BottomLink } from "../ui/bottom-link";
import { ErrorMessage } from "../ui/error-message";
import { useActionState } from "@/shared/lib/react";
import { signUpAction, SignUpFormState } from "../actions/sign-up";

export function SignUpForm() {
  const [formState, action, isPending] = useActionState(
    signUpAction,
    {} as SignUpFormState
  );

  return (
    <AuthFormLayout
      title="sign-up"
      description="Enter your email and password to create your account"
      action={action}
      filds={<AuthFields
        {...formState}
        />}
      actions={<SubmitBotton isPending={isPending}>Sign up</SubmitBotton>}
      error={<ErrorMessage error={formState.errors?._errors}/>}
      link={
        <BottomLink
          text="Alredy have account?"
          url="/sign-in"
          linkText="sign in"
        />
      }
    />
  );
}
