import SignInForm from "@/app/components/SignInForm"
import Link from "next/link"
import React from "react"

function SignInPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <SignInForm></SignInForm>
      <Link className="mt-3" href={"/auth/forgotPass"}>
        Forgot Your Password?
      </Link>
    </div>
  )
}

export default SignInPage
