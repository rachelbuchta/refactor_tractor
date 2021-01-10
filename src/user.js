// don't need this
import usersTest from '../src/data/users-test-data';

class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  saveRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(recipe) {
    let i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1);
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
  // replace name & ingredients to arguments of property?
}

// create a method that gets a recipe and compares ingredients needed to make the recipe with what the user has in their pantry, is there enough?
// return the amount/what type of ingredients are missing that are needed to make recipe
//Class Pantry
// create method that removes the ingredients used to make a recipe from pantry

// module.exports = User;
export default User;

//need to change all of our module.exports


