import React from 'react'

import { useDrinks } from '@/contexts/drinksContext'
import CardDrink from '@/components/CardDrink'

const HomePage: React.FC = () => {
  const { isLoading, drinks } = useDrinks()

  return (
    <main>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className='grid grid-cols-3 gap-20 mt-6'>
          {drinks.map((drink) => (
            <CardDrink key={drink.idDrink} drink={drink} />
          ))}
        </div>
      )}
    </main>
  )
}

export default HomePage
