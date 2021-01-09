/* eslint-disable max-len */
class RecipeRepo {
    constructor(recipes) {
    this.recipes = recipes;
};

returnAllTags() {
let tags = [];
this.recipes.forEach(recipe => {
    recipe.tags.filter(tag => {
        console.log(recipe.tags)
    if (!tags.includes(tag)) {
        tags.push(tag);
      } 
    });
  });
   return tags.sort();
}
};










export default RecipeRepo;