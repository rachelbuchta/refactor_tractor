/* eslint-disable max-len */
class RecipeRepo {
    constructor(recipes) {
    this.recipes = recipes;
    
};

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
};

searchRecipes(ingredientId) {
const filteredRecipes = [];
this.recipes.filter(recipe => {
    recipe.ingredients.forEach(ingredient => {
        if(ingredientId === ingredient.id && !filteredRecipes.includes(recipe.name)) {
            filteredRecipes.push(recipe.name);
        };
    });
});
return filteredRecipes;
};
};


export default RecipeRepo;