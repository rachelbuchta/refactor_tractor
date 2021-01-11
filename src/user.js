import Pantry from './pantry';

export default class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.pantry = new Pantry(userData.pantry);
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(list, recipe) {
    let index = list.indexOf(recipe);
    list.splice(index, 1);
  }

  decideToCook(recipe) {
    this.recipesToCook.push(recipe);
  }
  filterRecipes(type) {
    return this.favoriteRecipes.filter(recipe => recipe.type.includes(type));
  }
  // does type === tag? make it dynamic to iterate through favoriteRecipes & recipesToCook
  searchForRecipe(keyword) {
    return this.favoriteRecipes.filter(recipe => recipe.name.includes(keyword) || recipe.ingredients.includes(keyword));
  }
  
}

