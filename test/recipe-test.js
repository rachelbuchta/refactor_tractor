/* eslint-disable max-len */
import { expect } from 'chai';

import Recipe from '../src/recipe';
import data from '../src/data/recipe-test-data';
import ingredientData from '../src/data/ingredient-test-data';

describe('Recipe', function() {
  let recipe;
  let recipeInfo;

  beforeEach(function() {
    recipeInfo = data[0];
    recipe = new Recipe(recipeInfo);
  })

  it('is a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should initialize with an id', function() {
    expect(recipe.id).to.eq(595736);
  });

  it('should initialize with an name', function() {
    expect(recipe.name).to.eq('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should initialize with an image', function() {
    expect(recipe.image).to.eq('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('should initialize with an array of ingredients', function() {
    const ingredient = {
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    }
    expect(recipe.ingredients[0]).to.deep.eq(ingredient);
  });

  it('should calculate the total cost of all of the ingredients', function() {

    expect(recipe.calculateIngredientsCost(ingredientData)).to.eq('$9.76');
  });

  it('should return the instructions for recipe', function() {    
    const instructions = recipe.instructions.map(instruction => instruction.instruction);    
    
    expect(recipe.returnInstructions(recipe)).to.deep.eq(instructions);
  });

});