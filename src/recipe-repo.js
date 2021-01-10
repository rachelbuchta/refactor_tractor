/* eslint-disable max-len */
export default class RecipeRepo {
  constructor(recipes) {
    this.recipes = recipes;
    this.filteredRecipes = [];
  }

  returnAllTags() {
    let tags = [];
    this.recipes.forEach(recipe => {
      recipe.tags.filter(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        } 
      });
    });
    return tags.sort();
  }

  searchRecipesByIngredient(ingredientId) {
    const filteredRecipes = [];
    this.recipes.filter(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredientId === ingredient.id && !filteredRecipes.includes(recipe.name)) {
          filteredRecipes.push(recipe.name);
        }
      });
    });
    return filteredRecipes;
  }

  filterRecipesByTag(selected) {
    const filteredRecipes = [];
    this.recipes.forEach(recipe => {
      recipe.tags.forEach(tag => {
        selected.forEach(item => {
          if (item === tag) {
            filteredRecipes.push(recipe.name)
          }
        });
      });
    });
    return filteredRecipes;
  } 
}


