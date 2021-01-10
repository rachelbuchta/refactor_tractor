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
  let domName1;
  let domName2;
  let domName3;
  let domName4;
  // let domIngredient1;
  // let domIngredient2;
  // let domIngredient3;
  // let domIngredient4;
  // let id1;
  // let id2;
  // let id3;
  // let id4;

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

  it("should return ingredients id that matches entered name", () => {


    expect(ingredients.getRecipeIdByName("butter")).to.eq(1001);
  });

  it("should return recipes id that matches entered name", () => {

    const ingredientId = ingredients.getRecipeIdByName("butter");


    expect(allRecipes.searchRecipes(ingredientId)).to.deep.eq(["Dirty Steve's Original Wing Sauce", "Elvis Pancakes"]);
    
  });

  beforeEach(() => {
    firstUser.saveRecipe(recipe1);    
    secondUser.decideToCook(recipe2);
    favorites = firstUser.favoriteRecipes;
    toCook = secondUser.recipesToCook;
    domName1 = 'Loaded Chocolate Chip Pudding Cookie Cups';
    domName2 = 'Elvis Pancakes';
    domName3 = 'Maple Dijon Apple Cider Grilled Pork Chops';
    domName4 = 'Dirty Steve\'s Original Wing Sauce';    
  });

  it('should be able to filter recipes by type', () => {
    expect(allRecipes.filterListByTag(favorites, 'starter')).to.deep.equal([recipe1]);
    expect(allRecipes.filterListByTag(favorites, 'brunch')).to.deep.equal([]);
    expect(allRecipes.filterListByTag(toCook, 'main course')).to.deep.equal([recipe2]);
    expect(allRecipes.filterListByTag(toCook, 'breakfast')).to.deep.equal([]);
    expect(allRecipes.filterListbyTag(testRecipes, 'side dish')[0].name).to.equal('Elvis Pancakes');
    expect(allRecipes.filterListbyTag(testRecipes, 'side dish')[0].id).to.equal(741603);
  });

  // filterListByName
  // filterListByIngredient 

  it('should be able to filter recipes by ingredient', () => {
    const domIngredient1 = 'egg';
    const domIngredient2 = 'apples';
    const domIngredient3 = 'dijon mustard';
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

  // it('should be able to search recipes by name', () => {
  //   user.saveRecipe(recipe);
  //   expect(user.searchForRecipe('Chicken Parm')).to.deep.equal([recipe]);
  // });

  

});
