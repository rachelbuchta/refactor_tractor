import { expect } from 'chai';


import RecipeRepo from '../src/recipe-repo';
import data from '../src/data/recipe-test-data';


describe.only('RecipeRepo', () => {
  let allRecipes;


  beforeEach(function() {
    allRecipes = new RecipeRepo(data);
   
  })

  it('should hold all instances of Recipes', () => {

    expect(allRecipes.recipes).to.deep.eq(data);
  })
})
