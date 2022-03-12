import React from 'react'

import Button from '@/components/Button'

import type { Drink } from '@/@types/entities'

interface Props {
  drink: Drink
}

const CardDrink = ({ drink }: Props) => {
  return (
    <div className='w-64 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-xl shadow-md'>
      <img
        src={drink.strDrinkThumb}
        alt='Drink picture'
        width={128}
        height={128}
        className='rounded-3xl mx-auto -mt-12'
      />
      <div
        className={`
          ${drink.strInstructions ? 'h-44' : ''}
          flex flex-col justify-between space-y-3 p-3
        `}
      >
        <p className='text-gray-700 font-bold text-lg line-clamp-1'>
          {drink.strDrink}
        </p>
        <p className='text-gray-600 text-sm line-clamp-3'>
          {drink.strInstructions}
        </p>
        <Button fullWidth={true} skin='primary'>
          View
        </Button>
      </div>
    </div>
  )
}

export default CardDrink
