import prisma from "@/lib/prisma"
import nextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import * as bcrypt from "bcrypt"
import NextAuth from "next-auth/next"
import { User } from "@prisma/client"

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_URL,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your Username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        })
        if (!user) {
          throw new Error("Username doesn't exist")
        }

        if (!credentials?.password) {
          throw new Error("Please provide a password")
        }
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!isPasswordCorrect) {
          throw new Error("Incorrect Password")
        }

        const { password, ...userWithoutPass } = user
        return userWithoutPass
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as User
      }
      return token
    },

    async session({ token, session }) {
      session.user = token.user
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
