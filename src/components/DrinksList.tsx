import React from 'react'

import Card from '@/components/Card'
import Title from '@/components/Title'

import LoadingSvg from '@/assets/images/loading.svg'

import { useDrinks } from '@/contexts/drinksContext'

const DrinksList = () => {
  const { isLoading, searchName, drinks } = useDrinks()

  if (isLoading) {
    return (
      <img
        src={LoadingSvg}
        width={128}
        height={128}
        className='my-20 mx-auto'
      />
    )
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
          buttonAction={() => {}}
        />
      ))}
    </div>
  )
}

export default DrinksList
