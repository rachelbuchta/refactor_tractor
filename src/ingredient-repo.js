/* eslint-disable max-len */
export default class IngredientsRepo {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  getRecipeIdByName(name) {
    console.log(name);
    const foundIngredient = this.ingredients.find(ingredient => {
      if (ingredient.name.includes(name.toLowerCase())) {
        return ingredient.id;
      }
    });
    
    return foundIngredient ? foundIngredient.id : 0;
  }

  getRecipeNameById(id) {
    const foundIngredient = this.ingredients.find(ingredient => {
      if (ingredient.id === id) {
        return ingredient.name;
      }
    });
    
    return foundIngredient ? foundIngredient.name : "";
  }
}



