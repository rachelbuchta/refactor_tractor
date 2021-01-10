/* eslint-disable max-len */
import { expect } from "chai";

import RecipeRepo from "../src/recipe-repo";
import data from "../src/data/recipe-test-data";
import ingredientData from '../src/data/ingredient-test-data';
import IngredientsRepo from "../src/ingredient-repo";

describe("RecipeRepo", () => {
  let allRecipes;
  let ingredients

  beforeEach(function() {
    allRecipes = new RecipeRepo(data);
    ingredients = new IngredientsRepo(ingredientData);
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

  it("should return recipes that match entered ingredient name", () => {

    const ingredientId = ingredients.getRecipeIdByName("butter");

    expect(allRecipes.searchRecipesByIngredient(ingredientId)).to.deep.eq(["Dirty Steve's Original Wing Sauce", "Elvis Pancakes"]);
  });

  it("should filter recipes by tags", () => {

    const selected = ["starter", "sauce"]

    expect(allRecipes.filterRecipesByTag(selected)).to.deep.eq(["Loaded Chocolate Chip Pudding Cookie Cups", "Dirty Steve's Original Wing Sauce"]);
  });
});
