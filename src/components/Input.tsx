import React from 'react'

import type {
  ReactElement,
  MouseEventHandler,
  InputHTMLAttributes
} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
  height?: 'md' | 'lg'
  icon?: ReactElement | string
  iconPosition?: 'right' | 'left'
  onClickButton?: MouseEventHandler<HTMLButtonElement>
}

const Input = ({
  fullWidth,
  height = 'md',
  icon,
  iconPosition = 'right',
  onClickButton,
  disabled,
  ...props
}: Props) => {
  return (
    <div
      className={`
        ${iconPosition === 'left' && 'flex-row-reverse'}
        ${!fullWidth && 'w-max'}
        ${height === 'md' && 'h-10'}
        ${height === 'lg' && 'h-16'}
        ${disabled ? 'bg-gray-200 opacity-75 cursor-not-allowed' : 'bg-white'}
        flex items-center rounded-lg shadow-md
      `}
    >
      <input
        {...props}
        disabled={disabled}
        autoFocus
        className={`
          ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'}
          ${fullWidth && 'w-full'}
          rounded-l-full px-6 text-gray-700 last:leading-tight focus:outline-none
        `}
      />

      {icon && (
        <div className='p-2 md:p-4'>
          <button
            disabled={disabled}
            className={`
              ${disabled && 'cursor-not-allowed'}
              rounded-full focus:outline-none w-10 h-12 md:w-10 md:h-12 flex items-center justify-center
            `}
            onClick={onClickButton}
          >
            <img src={icon as any} alt='Icon' />
          </button>
        </div>
      )}
    </div>
  )
}

export default Input
