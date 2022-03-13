import React from 'react'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = ({ children, ...props }: Props) => {
  return (
    <a
      {...props}
      className='text-indigo-400 hover:text-indigo-600 transition-colors'
    >
      {children}
    </a>
  )
}

export default Link
