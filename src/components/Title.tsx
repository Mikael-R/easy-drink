import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tag: 'h1' | 'h2'
  customClass?: string
}

const Title = ({ tag, customClass, children, ...props }: Props) => {
  const defaultClass = 'text-indigo-900 font-bold mb-10 lg:leading-tight'

  const skins = {
    h1: 'text-4xl lg:text-5xl',
    h2: 'text-3xl lg:text-4xl'
  }

  const skin = skins[tag]

  return React.createElement(
    tag,
    {
      className: `${skin} ${defaultClass} ${customClass}`,
      ...props
    },
    children
  )
}

export default Title
