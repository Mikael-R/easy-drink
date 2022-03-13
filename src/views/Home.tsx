import React from 'react'

import DrinksList from '@/components/DrinksList'
import DrinksFilter from '@/components/DrinksFilter'

const HomePage: React.FC = () => {
  return (
    <>
      <DrinksFilter />

      <DrinksList />
    </>
  )
}

export default HomePage
