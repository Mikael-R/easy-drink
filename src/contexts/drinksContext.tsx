import React, { useState, useEffect, useContext, createContext } from 'react'

import DrinksRepository from '@/repositories/drinksRepository'

import type { Drink, DrinkList } from '@/@types/entities'
import type { DrinkFilter } from '@/repositories/drinksRepository'
import type { ReactNode } from 'react'

interface DrinkContextData {
  isLoading: boolean
  drinks: DrinkList
  activeDrink: Drink | null
  searchName: string
  searchFilter: DrinkFilter
  searchWithFilter: (searchFilter: DrinkFilter) => void
  searchByName: (name: string) => void
  viewDrink: (idDrink: string) => void
}

interface Props {
  children: ReactNode
}

export const DrinkContext = createContext({} as DrinkContextData)

const drinksRepository = new DrinksRepository()

export const DrinkProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [drinks, setDrinks] = useState<DrinkList>([])
  const [activeDrink, setActiveDrink] = useState<Drink | null>(null)
  const [searchName, searchByName] = useState('')
  const [searchFilter, searchWithFilter] = useState<DrinkFilter>('')

  const viewDrink = async (idDrink: string) => {
    try {
      setIsLoading(true)

      const data = await drinksRepository.getById(idDrink)

      setActiveDrink(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const loadData = async () => {
    try {
      setIsLoading(true)

      const data = await (searchFilter
        ? drinksRepository.searchFilter(searchFilter)
        : drinksRepository.searchByName(searchName))

      setDrinks(data.drinks || [])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [searchName, searchFilter])

  return (
    <DrinkContext.Provider
      value={{
        isLoading,
        drinks,
        activeDrink,
        searchFilter,
        searchName,
        searchByName,
        searchWithFilter,
        viewDrink
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
