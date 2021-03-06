import React from 'react'

import type { ButtonHTMLAttributes, ReactElement } from 'react'

interface Props extends ButtonHTMLAttributes<any> {
  fullWidth?: boolean
  height?: 'md' | 'lg'
  skin?: 'primary' | 'iconRounded' | 'icon'
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
      bg: 'bg-indigo-600 hover:bg-transparent shadow-md',
      text: 'text-white hover:text-indigo-600',
      border: 'rounded-md hover:border-2 hover:border-indigo-600'
    },
    iconRounded: {
      bg: 'bg-gradient-to-b from-indigo-200 to-indigo-300 hover:to-indigo-400 shadow-md',
      text: 'text-indigo-900 text-xs',
      border: 'rounded-full '
    },
    icon: {
      bg: 'bg-transparent hover:bg-indigo-200',
      text: '',
      border: 'rounded-full'
    }
  }

  const buttonSkin = skins[skin]

  return (
    <button
      {...props}
      className={`
        transition-colors duration-200 font-bold
        ${props.disabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
        ${fullWidth && 'w-full'}
        ${skin === 'iconRounded' && 'w-24 h-36 px-6'}
        ${skin === 'primary' && 'h-10 px-6'}
        ${active && 'border-2 border-indigo-600'}
        ${buttonSkin.text}
        ${buttonSkin.border}
        ${buttonSkin.bg}
      `}
    >
      {icon ? (
        <div
          className={`
            ${skin === 'iconRounded' && 'flex-col space-y-4'}
            ${skin === 'icon' && 'flex-row p-2'}
            flex items-center justify-center
        `}
        >
          <img src={icon as any} alt='Icon' width={45} height={45} />
          {children && (
            <span
              className={`
                ${skin === 'icon' && 'text-lg pr-4'}
                text-indigo-900
              `}
            >
              {children}
            </span>
          )}
        </div>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
