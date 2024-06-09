import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up'/>
    </div>
  )
}

export default SignUp