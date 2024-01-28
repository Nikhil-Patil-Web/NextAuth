"use client"
import { Button } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"

function SignInButton() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className="flex items-center gap-2 ">
      {session && session.user ? (
        <>
          <p>
            {session.user.firstname} {session.user.lastname}
          </p>
          <Link
            className="text-sky-500 hover:text-sky-600 transition-colors"
            href="/api/auth/signout"
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Button
            as={Link}
            color="primary"
            className="bg-blue-900 px-5 py-2 rounded-full mt-4 mb-4 text-sm "
            href="/auth/signup"
            variant="flat"
          >
            Sign Up
          </Button>
          <Button
            className="bg-gray-500 px-5 py-2 rounded-full mt-4 mb-4 text-sm"
            as={Link}
            href="/api/auth/signin"
          >
            Sign In
          </Button>
        </>
      )}
    </div>
  )
}

export default SignInButton
