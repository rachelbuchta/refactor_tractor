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

  it('should be able to filter recipes by type', () => {
    firstUser.saveRecipe(recipe1);    
    secondUser.decideToCook(recipe2);
    const favorites = firstUser.favoriteRecipes;
    const toCook = secondUser.recipesToCook;
    const domInput1 = 'starter';
    const domInput2 = 'brunch';
    const domInput3 = 'main course';
    const domInput4 = 'breakfast';
    const domInput5 = 'side dish';

    // const id1 = ingredients.getRecipeIdByName(domInput1);
    // const id2 = ingredients.getRecipeIdByName(domInput2);
    // const id3 = ingredients.getRecipeIdByName(domInput3);
    // const id4 = ingredients.getRecipeIdByName(domInput4);   

    expect(allRecipes.filterListByTag(favorites, domInput1)).to.deep.equal([recipe1]);
    expect(allRecipes.filterListByTag(favorites, domInput2)).to.deep.equal([]);
    expect(allRecipes.filterListByTag(toCook, domInput3)).to.deep.equal([recipe2]);
    expect(allRecipes.filterListByTag(toCook, domInput4)).to.deep.equal([]);
    expect(allRecipes.filterListbyTag(testRecipes, domInput5)[0].name).to.equal('Elvis Pancakes');
    expect(allRecipes.filterListbyTag(testRecipes, domInput5)[0].id).to.equal(741603);
  });

  // filterListByName
  // filterListByIngredient

  // it('should be able to filter recipes by ingredient', () => {
  //   firstUser.saveRecipe(recipe1);    
  //   secondUser.decideToCook(recipe2);

  //   const favorites = firstUser.favoriteRecipes;
  //   const toCook = secondUser.recipesToCook;

  //   expect(firstUser.filterListByIngredient(favorites, 'starter')).to.deep.equal([recipe1]);
  //   expect(firstUser.filterListByIngredient(favorites, 'brunch')).to.deep.equal([]);
  //   expect(second.filterListByIngredient(toCook, 'main course')).to.deep.equal([recipe2]);
  //   expect(firstUser.filterListByIngredient(toCook, 'breakfast')).to.deep.equal([]);
  // });

  // it('should be able to search recipes by name', () => {
  //   user.saveRecipe(recipe);
  //   expect(user.searchForRecipe('Chicken Parm')).to.deep.equal([recipe]);
  // });

});
