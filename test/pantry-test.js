/* eslint-disable max-len */
import { expect } from 'chai';

import Pantry from '../src/pantry';
import User from '../src/user';
import data from '../src/data/users-test-data';
import ingredientData from '../src/data/ingredient-test-data';

describe('Pantry', function() {
  let user;
  let userInfo;
  let recipe;
  let recipe2;
  let pantry;
  let pantryData;
  let ingredient;


  beforeEach(function() {
    userInfo = data[0];
    pantryData = userInfo.pantry;
    user = new User(userInfo);
    pantry = new Pantry(pantryData);

    ingredient = {
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    };

    recipe = {name: 'Flour Soda', type: ['italian', 'dinner'], ingredients: [{
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    },
    {
      "id": 18372,
      "quantity": {
        "amount": 1,
        "unit": "tsp"
      }
    }]};

    recipe2 = {name: 'Cannot make this', type: ['italian', 'dinner'], ingredients: [{
      "id": 8585858585,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    },
    {
      "id": 18372001001,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }]};
  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should store a user pantry', function() {
    expect(pantry.items).to.eq(user.pantry.items);
  });

  it('should determine if it is stocked for a meal', function() {
    expect(pantry.canMake(recipe)).to.eq(true);
  });

  it('should determine if it is stocked for a meal', function() {
    expect(pantry.canMake(recipe)).to.eq(true);
  });

  it('should return the amount missing of each ingredient', function() {
    expect(pantry.canMake(recipe2)).to.deep.eq([
      {
        "ingredient": 18372001001,
        "amount": 0.5
      },
      {
        "ingredient": 8585858585,
        "amount": 0.5
      }
    ]);
  });

  it('should remove the amount of ingredients used when a user cooks a meal', function() {
    pantry.takeStock(recipe);
    pantry.removeIngredients(recipe);
    expect(pantry.items).to.deep.eq([
      {
        "ingredient": 20081,
        "amount": 10
      },
      {
        "ingredient": 11297,
        "amount": 3
      },
      {
        "ingredient": 8585858585,
        "amount": 1
      }
    ]);
  });

  it('should return the body for POSTing', function() {
    expect(pantry.createPostBody(user, ingredient)).to.deep.eq(
      {
        "userID": user.id,
        "ingredientID": 20081,
        "ingredientModification": -1.5
      }
    );
  });

  

})