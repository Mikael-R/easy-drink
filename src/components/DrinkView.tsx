import React from 'react'

import Loading from '@/components/Loading'
import Button from '@/components/Button'

import AngleLeftIcon from '@/assets/icons/angle-left.svg'

import { useDrinks } from '@/contexts/drinksContext'

const DrinkView = () => {
  const { isLoading, activeDrink, viewDrink } = useDrinks()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Button
        skin='icon'
        icon={AngleLeftIcon}
        onClick={() => viewDrink('-1')}
      />

      {JSON.stringify(activeDrink)}
    </div>
  )
}

export default DrinkView
