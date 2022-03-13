import React from 'react'

import type { ButtonHTMLAttributes, ReactElement } from 'react'

interface Props extends ButtonHTMLAttributes<any> {
  fullWidth?: boolean
  height?: 'md' | 'lg'
  skin?: 'primary' | 'icon'
  icon?: ReactElement | string
  active?: boolean
}

const Button = ({
  fullWidth,
  height = 'lg',
  skin = 'primary',
  icon,
  children,
  active,
  ...props
}: Props) => {
  const skins = {
    primary: {
      bg: 'bg-indigo-600 hover:bg-transparent',
      text: 'text-white hover:text-indigo-600',
      border: 'rounded-md hover:border-2 hover:border-indigo-600'
    },
    icon: {
      bg: 'bg-gradient-to-b from-indigo-200 to-indigo-300 hover:to-indigo-400',
      text: 'text-indigo-900',
      border: `rounded-full ${active && 'border-2 border-indigo-600'}`
    }
  }

  const buttonSkin = skins[skin]

  return (
    <button
      {...props}
      className={`
        transition-colors duration-200 shadow-md font-bold
        ${props.disabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
        ${fullWidth && 'w-full'}
        ${skin === 'icon' ? 'w-24 text-xs py-3 px-6' : 'h-10 px-6'}
        ${buttonSkin.text}
        ${buttonSkin.border}
        ${buttonSkin.bg}
      `}
    >
      {icon ? (
        <div className='h-32 flex flex-col items-center justify-center space-y-3'>
          <img
            src={icon as any}
            alt='Icon'
            width={56}
            height={56}
            className='mx-auto'
          />
          <span>{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
