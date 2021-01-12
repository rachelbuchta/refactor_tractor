/* eslint-disable max-len */
import Recipe from './recipe';

export default class RecipeRepo {
  constructor(recipes) {
    this.recipes = recipes.map(recipe => new Recipe(recipe));
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

  filterListByTag(list, tag) {
    return list.filter(recipe => recipe.tags.includes(tag));
  }

  filterListByIngredient(list, ingredientId) {        
    return list.reduce((filtered, recipe) => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.id === ingredientId) {
          filtered.push(recipe);
        }
      });

      return filtered;
    }, []);
  }

  filterListByName(list, name) {
    return list.filter(recipe => recipe.name.includes(name));
  }
}


