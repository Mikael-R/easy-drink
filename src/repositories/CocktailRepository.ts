import Http from '@/services/Http'
import { Drink } from '@/@types/entities'

export default class CocktailRepository extends Http {
  async searchDrinksByName(name?: string) {
    return await this.get<Drink[]>(`/search.php?s=${name}`)
  }

  async searchDrinksByCategory(category?: 'Ordinary_Drink' | 'Cocktail') {
    return await this.get<Drink[]>(`/filter.php?c=${category}`)
  }

  async searchDrinksByAlcoholic(alcoholic?: boolean) {
    return await this.get<Drink[]>(
      `/filter.php?a=${alcoholic ? 'Alcoholic' : 'Non_Alcoholic'}`
    )
  }

  async searchDrinksByIngredient(ingredient?: 'Gin' | 'Vodka') {
    return await this.get<Drink[]>(`/filter.php?i=${ingredient}`)
  }

  async getDrinkById(id: string) {
    return await this.get<Drink>(`/lookup.php?i=${id}`)
  }
}
