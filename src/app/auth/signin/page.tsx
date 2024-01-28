import SignInForm from "@/app/components/SignInForm"
import Link from "next/link"
import React from "react"

interface Props {
  searchParams: {
    callBackUrl?: string
  }
}

function SignInPage({ searchParams }: Props) {
  console.log(searchParams)
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <SignInForm callbackUrl={searchParams.callBackUrl}></SignInForm>
      <Link className="mt-3" href={"/auth/forgotPass"}>
        Forgot Your Password?
      </Link>
    </div>
  )
}

export default SignInPage
