import { AuthFormLayout } from "../ui/auth-form-layout"
import { AuthFields } from "../ui/fields"
import { SubmitBotton } from "../ui/submit-button"
import { right } from "@/shared/lib/either"
import { BottomLink } from "../ui/bottom-link"
import { ErrorMessage } from "../ui/error-message"

export default function SignUp() {
    const handelSubmit = () => {}
    return (
        <AuthFormLayout 
            title="sign-up" 
            description="Enter your email and password to create your account" 
            onSubmit={handelSubmit}
            filds={<AuthFields
             login={login}
             password={password}
             onChangeLogin={setEmail}
             onChangePassword={setPassword}
            />}
            actions={<SubmitBotton>Sign up</SubmitBotton>}
            error={<ErrorMessage error={right(null)}/>}
            link={<BottomLink text="Alredy have account?" url="/sign-in" linkText="sign in"/>}
        />
    )
}

