"use client"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "@nextui-org/react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

interface Props {
  callbackUrl?: string
}

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string({
    required_error: "Please enter a password!",
  }),
})

type InputType = z.infer<typeof FormSchema>

function SignInForm(props: Props) {
  const [visiblePass, setVisiblePass] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password,
    })
    if (!result?.ok) {
      toast.error(`Something went wrong!:${result?.error} `)
      return
    }
    toast.success("Welcome!")
    router.push(props.callbackUrl ? props.callbackUrl : "/")
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 border rounded-md shadow overflow-hidden w-96 ml-16 mr-16 mt-12"
    >
      <div className=" text-center bg-gradient-to-b from-white to-slate-200 dark:from-slate-700 dark:to-slate-900 p-2">
        Sign In Form
      </div>
      <div className="p-2 flex flex-col gap-3">
        <Input
          label="Email"
          className="bg-gray-500"
          {...register("email")}
          errorMessage={errors.email?.message}
        ></Input>
        <Input
          label="Password"
          type={visiblePass ? "text" : "password"}
          className="bg-gray-500"
          {...register("password")}
          errorMessage={errors.password?.message}
          endContent={
            <button
              type="button"
              onClick={() => {
                setVisiblePass((prev) => !prev)
              }}
            >
              {visiblePass ? (
                <EyeSlashIcon className="w-4"></EyeSlashIcon>
              ) : (
                <EyeIcon className="w-4"></EyeIcon>
              )}
            </button>
          }
        ></Input>
        <div className="flex items-center justify-center gap-3">
          <Button
            type="submit"
            className="bg-blue-500 px-5 py-2 rounded-full mt-4 mb-4 text-sm"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Signing In...." : "Sign In"}
          </Button>
          <Button
            href="/auth/signup"
            className="bg-gray-500 px-5 py-2 rounded-full mt-4 mb-4 text-sm"
            as={Link}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SignInForm
