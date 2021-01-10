/* eslint-disable max-len */
export default class RecipeRepo {
  constructor(recipes) {
    this.recipes = recipes;
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
}
  // filterRecipesByTag(selected, element) {
  //   const filteredRecipes = [];
  //   selected.forEach(tag => {
  //   const allRecipes = this.recipes
  //   .filter(recipe => recipe.tags.includes(tag))
  //   .forEach(recipe => {
  //     if (!filteredRecipes.includes(recipe)) {
  //       filteredRecipes.push(recipe)
  //     };
  //   });
  //   }) 
  //   return filteredRecipes
  //   }
  // } 



