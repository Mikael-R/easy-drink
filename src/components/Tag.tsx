import React from 'react'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

const Tag = ({ children, ...props }: Props) => {
  return (
    <p
      {...props}
      className='inline-block bg-indigo-200 text-indigo-400 font-bold p-2 rounded-md'
    >
      {children}
    </p>
  )
}

export default Tag
