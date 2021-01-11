// BELOW NEEDS TO BE CHANGED TO IMPORT USERS FROM A NETWORK REQUEST

export default class Pantry {
  constructor(user) {
    this.items = user.pantry;
    this.forRecipe = [];
    this.groceryList = [];
  }

  canMake(recipe) {
    recipe.ingredients.forEach(ingredient => {
      console.log(this);
      if (this.items.includes(ingredient)) {
        return true;
      }
      })
    

    if (this.groceryList.length > 0) {
      return this.groceryList;
    } else {
      return true;
    }

    // 
  }



  removeMeal(recipe) {

  }
}