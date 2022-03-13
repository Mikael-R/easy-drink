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
      <Title tag='h2' customClass='text-center mt-16'>
        😬
        <br />
        No drinks found by:
        <br />
        {searchName}
      </Title>
    )
  }

  return (
    <div className='flex flex-wrap items-center justify-center gap-x-12 gap-y-28 mt-28 mx-auto'>
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
