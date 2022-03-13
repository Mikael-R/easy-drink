import React from 'react'

import Input from '@/components/Input'
import Button from '@/components/Button'

import SearchIcon from '@/assets/images/search-alt.svg'
import MartiniIcon from '@/assets/images/glass-martini-alt.svg'

import { useDrinks } from '@/contexts/drinksContext'

import type { DrinkFilter } from '@/repositories/drinksRepository'

const DrinksFilter = () => {
  const { searchName, searchByName, searchFilter, searchWithFilter } =
    useDrinks()

  const filters: DrinkFilter[] = [
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
    <>
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

      <div className='flex items-center justify-around mt-8'>
        {filters.map((drinkFilter) => {
          const filter = drinkFilter === searchFilter ? '' : drinkFilter

          return (
            <Button
              key={drinkFilter}
              skin='iconRounded'
              icon={MartiniIcon}
              active={drinkFilter === searchFilter}
              onClick={() => searchWithFilter(filter)}
            >
              <span>{drinkFilter.split('_').join(' ')}</span>
            </Button>
          )
        })}
      </div>
    </>
  )
}

export default DrinksFilter
