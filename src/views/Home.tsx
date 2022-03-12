import React from 'react'

import { useDrinks } from '@/contexts/drinksContext'

const HomePage: React.FC = () => {
  const { isLoading, drinks } = useDrinks()

  return (
    <main>
      {isLoading ? (
        <>Loading...</>
      ) : (
        drinks.map((drink) => (
          <div key={drink.idDrink}>
            <p className='text-indigo-600'>{drink.strDrink}</p>
          </div>
        ))
      )}
    </main>
  )
}

export default HomePage
