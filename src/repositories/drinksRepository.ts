import Http from '@/services/Http'
import type { Drink, DrinkList } from '@/@types/entities'

export type DrinkFilter =
  | 'Ordinary_Drink'
  | 'Cocktail'
  | 'Alcoholic'
  | 'Non_Alcoholic'
  | 'Vodka'
  | 'Gin'
  | 'Rum'
  | 'Tequila'
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

  async searchByIngredient(ingredient?: 'Vodka' | 'Gin' | 'Rum' | 'Tequila') {
    return await this.get<DrinksResponse>(`/filter.php?i=${ingredient}`)
  }

  async getById(id: string): Promise<Drink | null> {
    const data = await this.get<DrinksResponse>(`/lookup.php?i=${id}`)

    const drink: any = data?.drinks?.shift() || null

    if (drink) {
      drink.ingredients = []

      for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`]

        if (ingredient) {
          drink.ingredients.push({
            name: ingredient,
            measure: drink[`strMeasure${i}`]
          })
        } else {
          break
        }
      }

      drink.tags = drink.strTags?.split(',') || []

      return drink
    }

    return drink
  }

  async searchFilter(filter: DrinkFilter) {
    if (filter === 'Ordinary_Drink' || filter === 'Cocktail') {
      return await this.searchByCategory(filter)
    }

    if (filter === 'Alcoholic' || filter === 'Non_Alcoholic') {
      return await this.searchByAlcoholic(filter)
    }

    if (
      filter === 'Vodka' ||
      filter === 'Gin' ||
      filter === 'Rum' ||
      filter === 'Tequila'
    ) {
      return await this.searchByIngredient(filter)
    }

    return { drinks: [] }
  }
}
