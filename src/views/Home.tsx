import React, { useEffect } from 'react'

import CocktailRepository from '@/repositories/CocktailRepository'

const HomePage: React.FC = () => {
  const cocktailRepository = new CocktailRepository()

  useEffect(() => {
    cocktailRepository.searchDrinksByName('margarita').then(console.log)
  })

  return <span className='text-indigo-600'>Hello world</span>
}

export default HomePage
