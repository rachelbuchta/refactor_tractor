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
    // return this.ingredients.map(i => {
    //   ingredientData.find(ingredient => ingredient === i);
    // });
  }
}
// do we need to get back the cost of one individual ingredient or total cost of all ingredients for the recipe. either way we need a reduce somewhere up in here
// also need a method that gets the instructions

module.exports = Recipe;


