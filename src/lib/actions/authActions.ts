"use server"

import { User } from "@prisma/client"
import prisma from "../prisma"
import * as bcrypt from "bcrypt"
import { compileTemplate, sendMail } from "../mail"
import { signJwt, verifyJwt } from "../jwt"
import { verify } from "jsonwebtoken"
import { activationTemplate } from "../emailTemplates/activation"
import { forgotPasswordTemplate } from "../emailTemplates/forgotPassword"

type UserType = {
  password: string
  email: string
  phone: string
  firstName: string
  lastName: string
}

export async function registerUser(
  user: Omit<User, "id" | "emailVerified" | "image">
) {
  const result = await prisma.user.create({
    data: {
      ...user,
      password: await bcrypt.hash(user.password, 10),
    },
  })
  const jwtUserId = signJwt({ id: result.id })
  const activationUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`

  const body = compileTemplate(
    user.firstname,
    activationUrl,
    activationTemplate
  )

  await sendMail({
    to: user.email,
    subject: "Activation Link",
    body: body,
  })
  return result
}

type ActivateUserFunc = (
  jwtUserId: string
) => Promise<"userNotExist" | "alreadyActivated" | "success">

export const activateUser: ActivateUserFunc = async (jwtUserId) => {
  const secretKey = process.env.USER_ID_SECRET
  const payload = verify(jwtUserId, secretKey!)
  const userId = payload?.id
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return "userNotExist"
  }
  if (user.emailVerified) {
    return "alreadyActivated"
  }
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      emailVerified: new Date(),
    },
  })
  return "success"
}

export const forgotPassword = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (!user) {
    throw new Error("User doesn't exist with this email")
  }
  const secretKey = process.env.USER_ID_SECRET!
  const jwtUserId = signJwt({ id: user.id })
  const resetPasswordUrl = `${process.env.NEXTAUTH_URL}/auth/resetPass/${jwtUserId}`
  const body = compileTemplate(
    user.firstname,
    resetPasswordUrl,
    forgotPasswordTemplate
  )
  const result = await sendMail({
    to: user.email,
    subject: "Reset Password Link",
    body: body,
  })
  return result
}

type ResetPasswordFunc = (
  jwtUserId: string,
  passw: string
) => Promise<"userNotExist" | "success">

export const resetPassword: ResetPasswordFunc = async (jwtUserId, passw) => {
  const payload = verifyJwt(jwtUserId)
  if (!payload) {
    return "userNotExist"
  }
  const userId = payload.id!
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  if (!user) {
    return "userNotExist"
  }
  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: await bcrypt.hash(passw, 10),
    },
  })
  if (result) {
    return "success"
  } else {
    throw new Error("Something went wrong!")
  }
}
