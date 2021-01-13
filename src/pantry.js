export default class Pantry {
  constructor(pantryData) {
    this.items = pantryData;
    this.forRecipe = [];
    this.groceryList = [];
  }

  takeStock(recipe) {
    this.checkPantry(recipe);
    recipe.ingredients.forEach(ingredient => {
      this.items.forEach(item => {
        if (item.ingredient === ingredient.id && item.amount > ingredient.quantity.amount) {
          this.forRecipe.push(item);
        }
        else if (item.ingredient === ingredient.id && item.amount < ingredient.quantity.amount) {
          this.groceryList.push({
            ingredient: item.ingredient,
            amount: ingredient.quantity.amount - item.amount
          });
        }
      })
    })
  }

  checkPantry(recipe) {
    recipe.ingredients.forEach(ingredient => {
      let newItems = this.items.find(item => item.ingredient === ingredient.id);

      if (!newItems) {
        this.groceryList.push({
          ingredient: ingredient.id,
          amount: ingredient.quantity.amount
        })
      }
    })
  }

  canMake(recipe) {
    this.takeStock(recipe);
    if (this.groceryList.length > 0) {
      return this.groceryList;
    } else {
      return true;
    }
  }

  removeIngredients(recipe) {
    recipe.ingredients.forEach(ingredient => {
      this.items.forEach((item, index) => {
        if (ingredient.id === item.ingredient) {
          let newAmount = item.amount - ingredient.quantity.amount;
          if (newAmount === 0) {
            this.items.splice(index, 1);
          }
          return item.amount = newAmount;
        }
      })
    })
  }

  createPostBody(user, ingredient) {
    return {
      "userID": user.id,
      "ingredientID": ingredient.id,
      "ingredientModification": -ingredient.quantity.amount
    }
  }
}