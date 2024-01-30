"use client"
import { forgotPassword } from "@/lib/actions/authActions"
import { EnvelopeIcon } from "@heroicons/react/20/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Image, Input } from "@nextui-org/react"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { z } from "zod"

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type InputType = z.infer<typeof FormSchema>

function ForgotPassPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  })

  const submitRequest: SubmitHandler<InputType> = async (data) => {
    try {
      const response = await forgotPassword(data.email)
      if (response!) {
        toast.success(
          `Reset Password mail has been sent to you at ${data.email}`
        )
        reset()
      }
    } catch (e) {
      console.log(e)
      toast.error(`Something went wrong: ${e}`)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center">
      <form
        className="flex flex-col gap-2 p-2 border rounded-md shadow"
        onSubmit={handleSubmit(submitRequest)}
      >
        <div className="text-center p-2">Enter your email</div>
        <Input
          label="Email"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4"></EnvelopeIcon>}
          className="bg-gray-500 rounded-md"
          errorMessage={errors.email?.message}
        ></Input>
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          className="bg-blue-500 rounded-full px-4 py-2"
        >
          {isSubmitting ? "Please Wait....." : "Submit"}
        </Button>
      </form>
      <Image
        src={"/forgot.png"}
        width={500}
        height={500}
        className="col-span-2 place-self-center"
        alt="forgot"
      ></Image>
    </div>
  )
}

export default ForgotPassPage
