import React from 'react'

import LoadingSvg from '@/assets/images/loading.svg'
import SearchIcon from '@/assets/images/search-alt.svg'
import MartiniIcon from '@/assets/images/glass-martini-alt.svg'
import GithubIcon from '@/assets/images/github.svg'
import LinkedinIcon from '@/assets/images/linkedin.svg'

import Title from '@/components/Title'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Card from '@/components/Card'

import { useDrinks } from '@/contexts/drinksContext'

import type { DrinksFilter } from '@/repositories/drinksRepository'

const HomePage: React.FC = () => {
  const {
    isLoading,
    searchName,
    searchFilter,
    searchWithFilter,
    searchByName,
    drinks
  } = useDrinks()

  const drinksFilter: DrinksFilter[] = [
    'Ordinary_Drink',
    'Cocktail',
    'Alcoholic',
    'Non_Alcoholic',
    'Vodka',
    'Gin',
    'Rum',
    'Tequila'
  ]

  return (
    <main>
      <div className='flex justify-between'>
        <Title>
          Welcome to
          <br /> Easy Drink 😋
        </Title>

        <div className='flex space-x-3'>
          <a
            href='https://github.com/Mikael-R'
            target='_blank'
            rel='noreferrer'
          >
            <Button skin='icon' icon={GithubIcon} />
          </a>
          <a
            href='https://www.linkedin.com/in/mikael-r/'
            target='_blank'
            rel='noreferrer'
          >
            <Button skin='icon' icon={LinkedinIcon} />
          </a>
        </div>
      </div>

      <Input
        value={searchName}
        onChange={(e) => searchByName(e.target.value)}
        onClickButton={() => searchByName(searchName)}
        fullWidth={true}
        icon={SearchIcon}
        height='lg'
        placeholder='Search a drink name'
        disabled={!!searchFilter.length}
      />

      <div className='flex items-center justify-around my-10'>
        {drinksFilter.map((drinkFilter, i) => {
          const filter = drinkFilter === searchFilter ? '' : drinkFilter

          return (
            <Button
              key={i}
              skin='iconRounded'
              icon={MartiniIcon}
              active={drinkFilter === searchFilter}
              onClick={() => searchWithFilter(filter)}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: drinkFilter.split('_').join('<br/>')
                }}
              ></span>
            </Button>
          )
        })}
      </div>

      {isLoading ? (
        <img
          src={LoadingSvg}
          width={128}
          height={128}
          className='my-20 mx-auto'
        />
      ) : (
        <div className='grid grid-cols-3 gap-20 mt-24'>
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
      )}
    </main>
  )
}

export default HomePage
