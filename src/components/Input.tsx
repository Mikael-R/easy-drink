import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
  height?: 'md' | 'lg'
  icon?: React.ReactElement | string
  iconPosition?: 'right' | 'left'
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>
}

const Input = ({
  fullWidth,
  height = 'md',
  icon,
  iconPosition = 'right',
  onClickButton,
  ...props
}: Props) => {
  return (
    <div
      className={`
        ${iconPosition === 'left' && 'flex-row-reverse'}
        ${!fullWidth && 'w-max'}
        ${height === 'md' && 'h-10'}
        ${height === 'lg' && 'h-16'}
        bg-white flex items-center rounded-lg shadow-md md:shadow-xl
      `}
    >
      <input
        {...props}
        autoFocus
        className={`
          ${fullWidth && 'w-full'} rounded-l-full px-6 text-gray-700
          leading-tight focus:outline-none
        `}
      />

      {icon && (
        <div className='p-2 md:p-4'>
          <button
            className='rounded-full focus:outline-none w-10 h-12 md:w-10 md:h-12 flex items-center justify-center'
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
