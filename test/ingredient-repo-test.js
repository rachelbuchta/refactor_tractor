import { expect } from 'chai';

import IngredientsRepo from "../src/ingredient-repo";

describe('IngredientRepo', () => {  
  it("should return ingredients id that matches entered name", () => {
    expect(ingredients.getRecipeIdByName("butter")).to.eq(1001);
  });
});