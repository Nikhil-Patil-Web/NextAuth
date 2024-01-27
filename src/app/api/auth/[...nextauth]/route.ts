import prisma from '@/lib/prisma'
import nextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import * as bcrypt from 'bcrypt'
import NextAuth from 'next-auth/next'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Your Username',
        },
        password: {
          label: 'Password',
          type: 'password',
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
          throw new Error('Please provide a password')
        }
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!isPasswordCorrect) {
          throw new Error('Incorrect Password')
        }

        const { password, ...userWithoutPass } = user
        return userWithoutPass
      },
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
