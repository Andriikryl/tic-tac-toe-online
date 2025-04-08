"use client"
import { AuthFormLayout } from "../ui/auth-form-layout"
import { AuthFields } from "../ui/fields"
import { SubmitBotton } from "../ui/submit-button"
import { right } from "@/shared/lib/either"
import { BottomLink } from "../ui/bottom-link"
import { ErrorMessage } from "../ui/error-message"

export function SignInForm() {
    const handelSubmit = () => {}
    return (
        <AuthFormLayout 
            title="sign-In" 
            description="Welckom beck" 
            onSubmit={handelSubmit}
            filds={<AuthFields
            />}
            actions={<SubmitBotton>Sign up</SubmitBotton>}
            error={<ErrorMessage error={right(null)}/>}
            link={<BottomLink text="Alredy have account?" url="/sign-in" linkText="sign in"/>}
        />
    )
}

