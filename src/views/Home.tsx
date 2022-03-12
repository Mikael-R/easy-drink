import React from 'react'

import { useDrinks } from '@/contexts/drinksContext'
import Title from '@/components/Title'
import CardDrink from '@/components/CardDrink'

const HomePage: React.FC = () => {
  const { isLoading, drinks } = useDrinks()

  return (
    <main>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <Title>
            Welcome to
            <br /> Easy Drink 😋
          </Title>

          <div className='grid grid-cols-3 gap-20 mt-24'>
            {drinks.map((drink) => (
              <CardDrink key={drink.idDrink} drink={drink} />
            ))}
          </div>
        </>
      )}
    </main>
  )
}

export default HomePage
