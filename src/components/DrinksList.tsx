import React from 'react'

import Card from '@/components/Card'
import Title from '@/components/Title'
import Loading from '@/components/Loading'

import { useDrinks } from '@/contexts/drinksContext'

const DrinksList = () => {
  const { isLoading, searchName, drinks, viewDrink } = useDrinks()

  if (isLoading) {
    return <Loading />
  }

  if (!drinks.length) {
    return (
      <Title style={{ textAlign: 'center', marginTop: '64px' }}>
        😬
        <br />
        No drinks found by:
        <br />
        {searchName}
      </Title>
    )
  }

  return (
    <div className='grid grid-cols-3 gap-28 mt-28'>
      {drinks.map((drink) => (
        <Card
          key={drink.idDrink}
          image={drink.strDrinkThumb}
          title={drink.strDrink}
          description={drink.strInstructions}
          buttonText='View more'
          buttonAction={() => viewDrink(drink.idDrink)}
        />
      ))}
    </div>
  )
}

export default DrinksList
