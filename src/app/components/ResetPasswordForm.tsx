"use client"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "@nextui-org/react"
import { passwordStrength } from "check-password-strength"
import React, { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import PasswordStrength from "./PasswordStrength"
import { resetPassword } from "@/lib/actions/authActions"
import { toast } from "react-toastify"

interface Props {
  jwtUserId: string
}

const FormSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be atleast 6 characters")
      .max(52, "Password needs to be less than 52 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be atleast 6 characters")
      .max(52, "Confirm password needs to be less than 52 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match!",
    path: ["confirmPassword"],
  })

type InputType = z.infer<typeof FormSchema>

function ResetPasswordForm({ jwtUserId }: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const [passStrength, setPassStrength] = useState(0)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  })

  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id)
  }, [watch().password])

  const resetPass: SubmitHandler<InputType> = async (data) => {
    try {
      const result = await resetPassword(jwtUserId, data.password)
      if (result === "success") {
        toast.success("Your password was reset successfully!")
      }
    } catch (e) {
      toast.error(`Something went wrong!:${e}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(resetPass)}
      className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow"
    >
      <div className="text-center p-2">Reset Your Password</div>
      <Input
        label="Password"
        className="bg-gray-500"
        {...register("password")}
        type={isVisible ? "text" : "password"}
        errorMessage={errors.password?.message}
        endContent={
          isVisible ? (
            <EyeSlashIcon
              onClick={() => {
                setIsVisible(!isVisible)
              }}
              className="w-4"
            ></EyeSlashIcon>
          ) : (
            <EyeIcon
              onClick={() => {
                setIsVisible(!isVisible)
              }}
              className="w-4"
            ></EyeIcon>
          )
        }
      ></Input>
      <PasswordStrength passStrength={passStrength}></PasswordStrength>
      <Input
        label="Confirm Password"
        className="bg-gray-500"
        type={isVisible ? "text" : "password"}
        {...register("confirmPassword")}
        errorMessage={errors.confirmPassword?.message}
      ></Input>
      <div className="flex justify-center">
        <Button
          className="bg-blue-500 px-4 py-2 rounded-md"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Resetting..." : "Reset"}
        </Button>
      </div>
    </form>
  )
}

export default ResetPasswordForm
