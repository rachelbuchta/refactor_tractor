/* eslint-disable max-len */

import ingredientsData from '../src/data/ingredient-data';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
  }
  calculateIngredientsCost() {
    const costInCents = this.ingredients.reduce((totalCost, recipeIngredient) => {
      ingredientsData.forEach(ingredient => {
        if (ingredient.id === recipeIngredient.id) {
          let ingredientTotal = ingredient.estimatedCostInCents * recipeIngredient.quantity.amount;
          totalCost += ingredientTotal;
        }
      })
      return totalCost;
    }, 0);

    // return `$${costInCents.toString().slice(0, 1)}.${costInCents.toString().slice(1, 3)}`
    const currency = {
      style: "currency",
      currency: "USD"
    }

    let cost = costInCents * .01;
    return cost.toLocaleString("en-US", currency)
  }
}

export default Recipe;
