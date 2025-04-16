"use client"
import { AuthFormLayout } from "../ui/auth-form-layout"
import { AuthFields } from "../ui/fields"
import { SubmitBotton } from "../ui/submit-button"
import { BottomLink } from "../ui/bottom-link"
import { ErrorMessage } from "../ui/error-message"
import { signInAction, SignInFormState } from "../actions/sign-in"
import { useActionState } from "@/shared/lib/react"

export function SignInForm() {
    const [formState, action, isPending] = useActionState(
        signInAction,
        {} as SignInFormState
      );
    return (
        <AuthFormLayout 
            title="sign-In" 
            description="Welckom beck" 
            action={action}
            filds={<AuthFields
            {...formState}
            />}
            actions={<SubmitBotton isPending={isPending}>Sign in</SubmitBotton>}
            error={<ErrorMessage error={formState.errors?._errors}/>}
            link={<BottomLink text="Alredy have account?" url="/sign-in" linkText="sign in"/>}
        />
    )
}

