"use client"
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/20/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Checkbox, Input, Link } from "@nextui-org/react"
import { passwordStrength } from "check-password-strength"
import React, { useEffect, useState } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import validator from "validator"
import { z } from "zod"
import PasswordStrength from "./PasswordStrength"
import { registerUser } from "@/lib/actions/authActions"
import { toast } from "react-toastify"

const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First Name should be at least 2 characters")
      .max(45, "Second Name should be 45 characters at max")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowed"),

    lastName: z
      .string()
      .min(2, "Last Name should be at least 2 characters")
      .max(45, "Last Name should be 45 characters at max")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowed"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .refine(validator.isMobilePhone, "Please enter valid phone number"),
    password: z
      .string()
      .min(6, "Password must have minimum 6 characters")
      .max(45, "Password must have less than 45 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must have minimum 6 characters")
      .max(45, "Password must have less than 45 characters"),
    accepted: z.literal(true, {
      errorMap: () => ({ message: "Please accept all the terms" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password do not match!",
    path: ["confirmPassword"],
  })

type InputType = z.infer<typeof FormSchema>

function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  })
  const [passStrength, setPassStrength] = useState(0)
  const [isVisiblePass, setIsVisiblePass] = useState(false)
  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev)

  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id)
  }, [watch().password])

  const saveUser: SubmitHandler<InputType> = async (data) => {
    const { accepted, confirmPassword, ...user } = data
    try {
      const response = await registerUser({
        firstname: user.firstName,
        lastname: user.lastName,
        password: user.password,
        email: user.email,
        phone: user.phone,
      })
      toast.success("The User is Registered Successfully!")
    } catch (error) {
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(saveUser)}
      className="grid grid-cols-2 gap-3 p-2 shadow border rounded-md"
    >
      <Input
        errorMessage={errors.firstName?.message}
        isInvalid={!!errors.firstName}
        {...register("firstName")}
        label="First Name"
        className="bg-gray-500 rounded-md"
        startContent={<UserIcon className="w-6"></UserIcon>}
      ></Input>
      <Input
        {...register("lastName")}
        errorMessage={errors.lastName?.message}
        label="Last Name"
        className="bg-gray-500 rounded-md"
        startContent={<UserIcon className="w-6"></UserIcon>}
      ></Input>
      <Input
        {...register("email")}
        errorMessage={errors.email?.message}
        label="Email"
        className="bg-gray-500 rounded-md col-span-2"
        startContent={<EnvelopeIcon className="w-6"></EnvelopeIcon>}
      ></Input>
      <Input
        {...register("phone")}
        errorMessage={errors.phone?.message}
        label="Phone"
        className="bg-gray-500 rounded-md col-span-2"
        startContent={<PhoneIcon className="w-6"></PhoneIcon>}
      ></Input>
      <Input
        {...register("password")}
        errorMessage={errors.password?.message}
        label="Password"
        type={isVisiblePass ? "text" : "password"}
        className="bg-gray-500 rounded-md col-span-2"
        startContent={<KeyIcon className="w-6"></KeyIcon>}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon
              className="w-6"
              onClick={toggleVisiblePass}
            ></EyeSlashIcon>
          ) : (
            <EyeIcon className="w-6" onClick={toggleVisiblePass}></EyeIcon>
          )
        }
      ></Input>
      <PasswordStrength passStrength={passStrength}></PasswordStrength>
      <Input
        label="Confirm Password"
        errorMessage={errors.confirmPassword?.message}
        {...register("confirmPassword")}
        type={isVisiblePass ? "text" : "password"}
        className="bg-gray-500 rounded-md col-span-2"
        startContent={<KeyIcon className="w-6"></KeyIcon>}
      ></Input>
      <Controller
        control={control}
        name="accepted"
        render={({ field }) => (
          <Checkbox
            onChange={field.onChange}
            onBlur={field.onBlur}
            className="col-span-2"
          >
            I Accept the{" "}
            <Link className="text-blue-900" href={"/terms"}>
              Terms
            </Link>
          </Checkbox>
        )}
      ></Controller>
      {!!errors.accepted && (
        <p className="text-tiny">{errors.accepted.message}</p>
      )}

      <div className="flex justify-center col-span-2">
        <Button className="bg-blue-900 w-48 rounded-md px-3 py-2" type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm
