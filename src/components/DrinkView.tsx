import React from 'react'

import Loading from '@/components/Loading'

import { useDrinks } from '@/contexts/drinksContext'

const DrinkView = () => {
  const { isLoading, activeDrink } = useDrinks()

  if (isLoading) {
    return <Loading />
  }

  return <>{JSON.stringify(activeDrink)}</>
}

export default DrinkView
