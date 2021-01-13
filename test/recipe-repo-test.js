/* eslint-disable max-len */
import { expect } from "chai";

import RecipeRepo from "../src/recipe-repo";
import User from '../src/user';
import Recipe from '../src/recipe';
import userData from '../src/data/users-test-data';
import testRecipes from '../src/data/recipe-test-data';
import data from "../src/data/recipe-test-data";
import ingredientData from '../src/data/ingredient-test-data';
import IngredientsRepo from "../src/ingredient-repo";

describe("RecipeRepo", () => {
  let allRecipes;    
  let ingredients;
  let firstUser;
  let firstUserInfo;
  let secondUser;
  let secondUserInfo;
  let recipe1;
  let recipe2;
  let favorites;
  let toCook;

  beforeEach(() => {
    allRecipes = new RecipeRepo(data);
    ingredients = new IngredientsRepo(ingredientData);
    firstUserInfo = userData[0];
    firstUser = new User(firstUserInfo);
    secondUserInfo = userData[1];
    secondUser = new User(secondUserInfo);
    recipe1 = new Recipe(testRecipes[0]);
    recipe2 = new Recipe(testRecipes[1]);
  });

  it("is a function", () => {
    expect(RecipeRepo).to.be.a("function");
  });

  it("should hold all instances of Recipes", () => {
    expect(allRecipes.recipes).to.deep.eq(data);
  });

  it("should return an array of all recipe tags with no duplicates in alphabetical order", () => {
    expect(allRecipes.returnAllTags()).to.deep.eq(["antipasti", "antipasto", "appetizer", "dinner", "hor d'oeuvre", "lunch", "main course", "main dish", "sauce", "side dish", "snack", "starter"]);
  });  

  it("should return recipes that match entered ingredient name", () => {
    expect(allRecipes.returnAllTags()).to.deep.eq(["antipasti", "antipasto", "appetizer", "dinner", "hor d'oeuvre", "lunch", "main course", "main dish", "sauce", "side dish", "snack", "starter"]);
  });  

  it("should return recipes whose id matches the given name", () => {
    const ingredientId = ingredients.getRecipeIdByName("butter");

    expect(allRecipes.searchRecipesByIngredient(ingredientId)).to.deep.eq(["Dirty Steve's Original Wing Sauce", "Elvis Pancakes"]);    
  });

  beforeEach(() => {
    favorites = firstUser.favoriteRecipes;
    toCook = secondUser.recipesToCook;    
    firstUser.saveRecipe(favorites, recipe1);    
    secondUser.saveRecipe(toCook, recipe2);    
  });

  it('should be able to filter recipes by type', () => {    
    expect(allRecipes.filterListByTag(favorites, 'starter')).to.deep.equal([recipe1]);
    expect(allRecipes.filterListByTag(favorites, 'brunch')).to.deep.equal([]);
    expect(allRecipes.filterListByTag(toCook, 'main course')).to.deep.equal([recipe2]);
    expect(allRecipes.filterListByTag(toCook, 'breakfast')).to.deep.equal([]);
    expect(allRecipes.filterListByTag(testRecipes, 'side dish')[0].name).to.equal('Elvis Pancakes');
    expect(allRecipes.filterListByTag(testRecipes, 'side dish')[0].id).to.equal(741603);
  });

    
  it('should be able to filter recipes by ingredient', () => {
    const domIngredient1 = 'egg';
    const domIngredient2 = 'apples';
    const domIngredient3 = 'dijon'; // this is short for dijon mustard, and should still work
    const domIngredient4 = 'black pepper';    

    const id1 = ingredients.getRecipeIdByName(domIngredient1);
    const id2 = ingredients.getRecipeIdByName(domIngredient2);
    const id3 = ingredients.getRecipeIdByName(domIngredient3);
    const id4 = ingredients.getRecipeIdByName(domIngredient4);

    expect(allRecipes.filterListByIngredient(favorites, id1)).to.deep.equal([recipe1]);
    expect(allRecipes.filterListByIngredient(favorites, id2)).to.deep.equal([]);
    expect(allRecipes.filterListByIngredient(toCook, id3)).to.deep.equal([recipe2]);
    expect(allRecipes.filterListByIngredient(toCook, id4)).to.deep.equal([]);
  });

  it('should be able to search recipes by name', () => {
    const domName1 = 'Loaded Chocolate Chip Pudding Cookie Cups';
    const domName2 = 'Elvis Pancakes';
    const domName3 = 'Maple Dijon Apple Cider Grilled Pork Chops';
    const domName4 = 'Dirty Steve\'s Original Wing Sauce';
    const domName5 = 'a';
    
    expect(allRecipes.filterListByName(favorites, domName1)).to.deep.equal([recipe1]);
    expect(allRecipes.filterListByName(favorites, domName2)).to.deep.equal([]);
    expect(allRecipes.filterListByName(toCook, domName3)).to.deep.equal([recipe2]);
    expect(allRecipes.filterListByName(toCook, domName4)).to.deep.equal([]);
    expect(allRecipes.filterListByName(testRecipes, domName5)).to.deep.equal(testRecipes);
  });
});