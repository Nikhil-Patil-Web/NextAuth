"use server"

import { User } from "@prisma/client"
import prisma from "../prisma"
import * as bcrypt from "bcrypt"
import { compileActivationTemplate, sendMail } from "../mail"
import { signJwt } from "../jwt"
import { verify } from "jsonwebtoken"

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

  const body = compileActivationTemplate(user.firstname, activationUrl)

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
