import React from 'react'

import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<any> {
  fullWidth?: boolean
  height?: 'md' | 'lg'
  skin?: 'primary'
}

export default function Button({
  fullWidth,
  height = 'lg',
  skin = 'primary',
  children,
  ...props
}: Props) {
  const skins = {
    primary: {
      bg: 'bg-indigo-600 hover:bg-transparent',
      text: 'text-white hover:text-indigo-600',
      border: 'hover:border-2 hover:border-indigo-600'
    }
  }

  const buttonSkin = skins[skin]

  return (
    <button
      {...props}
      className={`
        transition-colors duration-200 rounded-md shadow-sm font-bold
        ${props.disabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
        ${fullWidth ? 'w-full' : ''}
        h-10 px-6
        ${buttonSkin.text}
        ${buttonSkin.border}
        ${buttonSkin.bg}
      `}
    >
      {children}
    </button>
  )
}
