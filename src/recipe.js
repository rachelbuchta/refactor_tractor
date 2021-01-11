/* eslint-disable max-len */
export default class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
  }

  calculateIngredientsCost(ingredientData) {
    const costInCents = this.ingredients.reduce((totalCost, recipeIngredient) => {
      ingredientData.forEach(ingredient => {
        if (ingredient.id === recipeIngredient.id) {
          let ingredientTotal = ingredient.estimatedCostInCents * recipeIngredient.quantity.amount;
          totalCost += ingredientTotal;
        }
      })
      return totalCost;
    }, 0);
    let cost = costInCents * .01;
    return cost.toLocaleString("en-US", {style: "currency", currency: "USD"});
  }

  returnInstructions() {
    return this.instructions;
  }
}

