/* eslint-disable max-len */

import ingredientsData from '../src/data/ingredient-data';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
    // i believe we are missing this.instructions
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
// do we need to get back the cost of one individual ingredient or total cost of all ingredients for the recipe. either way we need a reduce somewhere up in here
// also need a method that gets the instructions


export default Recipe;
