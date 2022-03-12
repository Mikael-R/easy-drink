import Http from '@/services/Http'
import type { Drink, DrinkList } from '@/@types/entities'

export type DrinksFilter =
  | 'Ordinary_Drink'
  | 'Cocktail'
  | 'Alcoholic'
  | 'Non_Alcoholic'
  | 'Gin'
  | 'Vodka'
  | ''

interface DrinksResponse {
  drinks: DrinkList
}

export default class DrinksRepository extends Http {
  async searchByName(name?: string) {
    return await this.get<DrinksResponse>(`/search.php?s=${name}`)
  }

  async searchByCategory(category?: 'Ordinary_Drink' | 'Cocktail') {
    return await this.get<DrinksResponse>(`/filter.php?c=${category}`)
  }

  async searchByAlcoholic(alcoholic?: 'Alcoholic' | 'Non_Alcoholic') {
    return await this.get<DrinksResponse>(`/filter.php?a=${alcoholic}`)
  }

  async searchByIngredient(ingredient?: 'Gin' | 'Vodka') {
    return await this.get<DrinksResponse>(`/filter.php?i=${ingredient}`)
  }

  async getById(id: string) {
    return await this.get<Drink>(`/lookup.php?i=${id}`)
  }

  async searchFilter(filter: DrinksFilter) {
    if (filter === 'Ordinary_Drink' || filter === 'Cocktail') {
      return await this.searchByCategory(filter)
    }

    if (filter === 'Alcoholic' || filter === 'Non_Alcoholic') {
      return await this.searchByAlcoholic(filter)
    }

    if (filter === 'Gin' || filter === 'Vodka') {
      return await this.searchByIngredient(filter)
    }

    return { drinks: [] }
  }
}
