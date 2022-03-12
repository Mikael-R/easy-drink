import React from 'react'

import Button from '@/components/Button'

interface Props {
  image: string
  title: string
  description: string
  buttonText: string
  buttonAction: () => void
}

const CardDrink = ({
  image,
  title,
  description,
  buttonText,
  buttonAction
}: Props) => {
  return (
    <div className='w-64 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl shadow-md'>
      <img
        src={image}
        alt='Drink picture'
        width={128}
        height={128}
        className='rounded-3xl mx-auto -mt-12'
      />
      <div
        className={`
          ${description ? 'h-44' : ''}
          flex flex-col justify-between space-y-3 p-3
        `}
      >
        <p className='text-gray-700 font-bold text-lg line-clamp-1'>{title}</p>
        <p className='text-gray-600 text-sm line-clamp-3'>{description}</p>
        <Button fullWidth={true} skin='primary' onClick={() => buttonAction()}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default CardDrink
