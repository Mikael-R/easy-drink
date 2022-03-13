import React from 'react'

import Loading from '@/components/Loading'
import Title from '@/components/Title'
import Button from '@/components/Button'
import Link from '@/components/Link'
import Tags from '@/components/Tags'

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

      <Title tag='h2' customClass='text-center mb-20'>
        {activeDrink.strDrink}
      </Title>

      <div className='flex flex-row space-x-10 mt-10'>
        <img
          src={activeDrink.strDrinkThumb}
          alt='Drink Photo'
          width={384}
          height={384}
          className='rounded-lg'
        />

        <div>
          {activeDrink.tags && (
            <Tags label='Tags:' content={activeDrink.tags} />
          )}

          <Tags
            label='Ingredients:'
            content={activeDrink.ingredients.map(({ name, measure }) =>
              measure ? `${name} (${measure})` : name
            )}
          />

          <Tags label='Serve:' content={[activeDrink.strGlass]} />

          <p
            className='text-center text-indigo-900 font-medium'
            dangerouslySetInnerHTML={{
              __html: activeDrink.strInstructions.replaceAll('. ', '.<br/>')
            }}
          />
        </div>
      </div>

      {activeDrink.strCreativeCommonsConfirmed === 'Yes' && (
        <div className='flex space-x-4 text-sm mt-2'>
          {authorName && (
            <Link href={authorProfile} target='_blank' rel='noreferrer'>
              Author: <strong>{authorName}</strong>
            </Link>
          )}

          {activeDrink.strImageSource && (
            <Link
              href={activeDrink.strImageSource}
              target='_blank'
              rel='noreferrer'
            >
              Image Source
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

export default DrinkView
