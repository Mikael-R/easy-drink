import React from 'react'

import Loading from '@/components/Loading'
import Title from '@/components/Title'
import Button from '@/components/Button'
import Link from '@/components/Link'

import AngleLeftIcon from '@/assets/icons/angle-left.svg'

import { useDrinks } from '@/contexts/drinksContext'

const DrinkView = () => {
  const { isLoading, activeDrink, viewDrink } = useDrinks()

  if (isLoading) {
    return <Loading />
  }

  if (!activeDrink) {
    return (
      <Title tag='h2' customClass='text-center mt-16'>
        Something went wrong 😬
      </Title>
    )
  }

  const [authorName, authorProfile] =
    activeDrink.strImageAttribution?.split(' ') || []

  return (
    <div className='mt-12'>
      <Button skin='icon' icon={AngleLeftIcon} onClick={() => viewDrink('-1')}>
        Back
      </Button>

      <Title tag='h2' customClass='text-center'>
        {activeDrink.strDrink}
      </Title>

      <div className='mt-10'>
        <img
          src={activeDrink.strDrinkThumb}
          alt='Drink Photo'
          width={384}
          height={384}
          className='rounded-lg'
        />

        {activeDrink.strCreativeCommonsConfirmed === 'Yes' && (
          <div className='flex space-x-4 text-xs mt-2'>
            {activeDrink.strImageSource && (
              <Link
                href={activeDrink.strImageSource}
                target='_blank'
                rel='noreferrer'
              >
                Image Source
              </Link>
            )}

            {authorName && (
              <Link href={authorProfile} target='_blank' rel='noreferrer'>
                Author: <strong>{authorName}</strong>
              </Link>
            )}
          </div>
        )}
      </div>

      {JSON.stringify(activeDrink)}
    </div>
  )
}

export default DrinkView
