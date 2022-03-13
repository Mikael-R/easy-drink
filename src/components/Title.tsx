import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  center?: boolean
}

const Title = ({ children, center }: Props) => {
  return (
    <h1
      className={`
        ${center && 'text-center'}
        text-3xl lg:text-5xl text-indigo-900 font-bold mb-10
    `}
    >
      {children}
    </h1>
  )
}

export default Title
