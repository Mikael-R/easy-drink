import React from 'react'

import LoadingSvg from '@/assets/images/loading.svg'

import { useDrinks } from '@/contexts/drinksContext'
import Title from '@/components/Title'
import CardDrink from '@/components/CardDrink'

const HomePage: React.FC = () => {
  const { isLoading, drinks } = useDrinks()

  return (
    <main>
      <Title>
        Welcome to
        <br /> Easy Drink 😋
      </Title>

      {isLoading ? (
        <img
          src={LoadingSvg}
          width={128}
          height={128}
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
      ) : (
        <div className='grid grid-cols-3 gap-20 mt-24'>
          {drinks.map((drink) => (
            <CardDrink key={drink.idDrink} drink={drink} />
          ))}
        </div>
      )}
    </main>
  )
}

export default HomePage
