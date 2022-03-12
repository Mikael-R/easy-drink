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
      bg: 'bg-indigo-600 hover:bg-indigo-800',
      text: 'text-white',
      font: 'font-bold',
      border: ''
    }
  }

  const buttonSkin = skins[skin]

  return (
    <button
      {...props}
      className={`
        transition-colors rounded-md shadow-sm
        ${props.disabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
        ${fullWidth ? 'w-full' : ''}
        h-10 px-6
        ${buttonSkin.text}
        ${buttonSkin.border}
        ${buttonSkin.font}
        ${buttonSkin.bg}
      `}
    >
      {children}
    </button>
  )
}
