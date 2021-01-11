
export default class Pantry {
  constructor(user) {
    this.items = user.pantry;
    this.forRecipe = [];
    this.groceryList = [];
  }

  canMake(recipe) {
    recipe.ingredients.forEach(ingredient => {
      this.items.forEach(item => {
        if (ingredient.id === item.ingredient && ingredient.amount > item.quantity.amount) {
          this.groceryList.push(`${item.name}: ${ingredient.amount - item.quantity.amount}`);
        } else if (ingredient.id === item.ingredient && ingredient.amount < item.quantity.amount) {
          this.forRecipe.push(item);
        } else {
          this.groceryList.push(`${item.name}: ${ingredient.amount}`);
        }
      })
    })
    if (this.groceryList.length > 0) {
      return this.groceryList;
    } else {
      return true;
    }
}
}