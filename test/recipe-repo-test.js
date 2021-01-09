import { expect } from "chai";


import RecipeRepo from "../src/recipe-repo";
import data from "../src/data/recipe-test-data";


describe.only("RecipeRepo", () => {
  let allRecipes;


  beforeEach(function() {
    allRecipes = new RecipeRepo(data);
   
  })

    it("is a function", function() {
    expect(RecipeRepo).to.be.a("function");
  });

  it("should hold all instances of Recipes", () => {

    expect(allRecipes.recipes).to.deep.eq(data);
  });

  it("should return an array of all recipe tags with no duplicates in alphabetical order", () => {


    expect(allRecipes.returnAllTags()).to.deep.eq(["antipasti", "antipasto", "appetizer", "dinner", "hor d'oeuvre", "lunch", "main course", "main dish", "sauce", "side dish", "snack", "starter"]);
})
})
