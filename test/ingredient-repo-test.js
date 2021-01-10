import { expect } from 'chai';

import IngredientsRepo from "../src/ingredient-repo";
import ingredientsTest from '../src/data/ingredient-test-data';

describe('IngredientRepo', () => {
  let ingredients;
  let data;

  beforeEach(() => {
    data = ingredientsTest;
    ingredients = new IngredientsRepo(data);
  });

  it('should contain a list of all of the ingredient data', () => {
    expect(ingredients.ingredients).to.deep.equal(data);
  });

  it('should return ingredients id that matches entered name', () => {
    expect(ingredients.getRecipeIdByName("butter")).to.eq(1001);
  });
});