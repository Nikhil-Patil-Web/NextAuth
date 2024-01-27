import SignUpForm from '@/app/components/SignUpForm'
import { Image, Link } from '@nextui-org/react'
import React from 'react'

function SignupPage() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center items-center gap-3'>
      <div className='md:col-span-2 flex justify-center items-center'>
        <p className='text-center p-2'>Already Signed Up?</p>
        <Link className='text-blue-800' href={'/auth/signin'}>
          Sign In
        </Link>
      </div>
      <SignUpForm></SignUpForm>
      <Image src='/login.jpg' alt='Login Form' width={500} height={500}></Image>
    </div>
  )
}

export default SignupPage
