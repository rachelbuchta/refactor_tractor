/* eslint-disable max-len */
export default class IngredientsRepo {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  getRecipeIdByName(name) {
    const foundIngredient = this.ingredients.find(ingredient => {
      if (ingredient.name.includes(name)) {
        return ingredient.id;
      }
    });
    
    return foundIngredient ? foundIngredient.id : 0;
  }
}



