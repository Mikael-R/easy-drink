import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <h1 className='text-3xl lg:text-5xl text-indigo-900 font-bold leading-snug'>
      {children}
    </h1>
  )
}

export default Title
