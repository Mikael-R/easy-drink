import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Title = ({ children, ...props }: Props) => {
  return (
    <h1
      {...props}
      className='text-3xl lg:text-5xl text-indigo-900 font-bold mb-10 lg:leading-tight'
    >
      {children}
    </h1>
  )
}

export default Title
