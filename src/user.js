import Pantry from './pantry';

export default class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.pantry = new Pantry(userData.pantry)
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(list, recipe) {
    list.push(recipe);
  }  

  removeRecipe(list, recipe) {
    const index = list.indexOf(recipe);
    list.splice(index, 1);
  }

  returnFirstName() {
    return this.name.split(' ')[0];
  }

  isFavorited(recipe) {
    return this.favoriteRecipes.find(favRecipe => recipe.id === favRecipe.id);
  }
}

