'use client'
import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/20/solid'
import { Button, Checkbox, Input, Link } from '@nextui-org/react'
import React, { useState } from 'react'

function SignUpForm() {
  const [isVisiblePass, setIsVisiblePass] = useState(false)
  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev)

  return (
    <form className='grid grid-cols-2 gap-3 p-2 shadow border rounded-md'>
      <Input
        label='First Name'
        className='bg-gray-500 rounded-md'
        startContent={<UserIcon className='w-6'></UserIcon>}
      ></Input>
      <Input
        label='Last Name'
        className='bg-gray-500 rounded-md'
        startContent={<UserIcon className='w-6'></UserIcon>}
      ></Input>
      <Input
        label='Email'
        className='bg-gray-500 rounded-md col-span-2'
        startContent={<EnvelopeIcon className='w-6'></EnvelopeIcon>}
      ></Input>
      <Input
        label='Phone'
        className='bg-gray-500 rounded-md col-span-2'
        startContent={<PhoneIcon className='w-6'></PhoneIcon>}
      ></Input>
      <Input
        label='Password'
        type={isVisiblePass ? 'text' : 'password'}
        className='bg-gray-500 rounded-md col-span-2'
        startContent={<KeyIcon className='w-6'></KeyIcon>}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon
              className='w-6'
              onClick={toggleVisiblePass}
            ></EyeSlashIcon>
          ) : (
            <EyeIcon className='w-6' onClick={toggleVisiblePass}></EyeIcon>
          )
        }
      ></Input>
      <Input
        label='Confirm Password'
        type={isVisiblePass ? 'text' : 'password'}
        className='bg-gray-500 rounded-md col-span-2'
        startContent={<KeyIcon className='w-6'></KeyIcon>}
      ></Input>
      <Checkbox className='col-span-2'>
        I Accept the{' '}
        <Link className='text-blue-900' href={'/terms'}>
          Terms
        </Link>
      </Checkbox>
      <div className='flex justify-center col-span-2'>
        <Button className='bg-blue-900 w-48 rounded-md px-3 py-2' type='submit'>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default SignUpForm
