import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tag: 'h1' | 'h2'
  customClass?: string
}

const Title = ({ tag, customClass, children, ...props }: Props) => {
  const defaultClass = `text-indigo-900 font-bold mb-10 lg:leading-tight ${customClass}`

  if (tag === 'h1') {
    return (
      <h1 {...props} className={`text-4xl lg:text-5xl ${defaultClass}`}>
        {children}
      </h1>
    )
  }

  if (tag === 'h2') {
    return (
      <h2 {...props} className={`text-3xl lg:text-4xl ${defaultClass}`}>
        {children}
      </h2>
    )
  }

  return null
}

export default Title
