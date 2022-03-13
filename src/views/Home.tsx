import React from 'react'

import DrinksFilter from '@/components/DrinksFilter'
import DrinksList from '@/components/DrinksList'
import DrinkView from '@/components/DrinkView'

import { useDrinks } from '@/contexts/drinksContext'

const HomePage: React.FC = () => {
  const { activeDrink } = useDrinks()

  return (
    <>
      <DrinksFilter />

      {activeDrink ? <DrinkView /> : <DrinksList />}
    </>
  )
}

export default HomePage
