/* eslint-disable max-len */
export default class IngredientsRepo {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  getRecipeIdByName(name) {
    const ingredientId = this.ingredients.find(ingredient => {
      if (ingredient.name === name) {
        return ingredient.id;
      }
    });
    return ingredientId.id;
  }
}



