import React, { useState, useEffect, useContext, createContext } from 'react'

import DrinksRepository from '@/repositories/drinksRepository'

import type { DrinkList } from '@/@types/entities'
import type { DrinksFilter } from '@/repositories/drinksRepository'
import type { ReactNode } from 'react'

interface DrinkContextData {
  isLoading: boolean
  drinks: DrinkList
  name: string
  filter: DrinksFilter
  searchWithFilter: (filter: DrinksFilter) => void
  searchByName: (name: string) => void
}

interface Props {
  children: ReactNode
}

export const DrinkContext = createContext({} as DrinkContextData)

export function DrinkProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [drinks, setDrinks] = useState<DrinkList>([])
  const [name, searchByName] = useState('vodka')
  const [filter, searchWithFilter] = useState<DrinksFilter>('')

  const drinksRepository = new DrinksRepository()

  const loadData = async () => {
    try {
      const data = await (filter
        ? drinksRepository.searchFilter(filter)
        : drinksRepository.searchByName(name))
      setDrinks(data.drinks)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [name, filter])

  return (
    <DrinkContext.Provider
      value={{
        isLoading,
        drinks,
        filter,
        name,
        searchByName,
        searchWithFilter
      }}
    >
      {children}
    </DrinkContext.Provider>
  )
}

export const useDrinks = () => {
  const context = useContext(DrinkContext)

  return context
}
