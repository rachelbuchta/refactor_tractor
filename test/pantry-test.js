/* eslint-disable max-len */

import { expect } from 'chai';

import Pantry from '../src/pantry';
import User from '../src/user';

import data from '../src/data/users-test-data';

import ingredientData from '../src/data/ingredient-test-data';



describe.only('Pantry', function() {
  let user;
  let userInfo;
  let recipe;
  let recipe2;
  let pantry;


  beforeEach(function() {
    userInfo = data[0];
    user = new User(userInfo);
    pantry = new Pantry(user);

    recipe = {name: 'Flour Soda', type: ['italian', 'dinner'], ingredients: [{
      "name": "all purpose flour",
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    },
    {
      "name": "baking soda",
      "id": 18372,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }]};

    recipe2 = {name: 'Cannot make this', type: ['italian', 'dinner'], ingredients: [{
      "name": "sharks",
      "id": 8585858585,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    },
    {
      "name": "lizards",
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
    expect(pantry.contents).to.eq(user.pantry);
  });

  it('should determine if it is stocked for a meal', function() {
    expect(pantry.canMake(recipe)).to.eq(true);
  });

  it('should return the amount missing of each ingredient', function() {
    expect(pantry.canMake(recipe2)).to.deep.eq({
      "name": "sharks",
      "amount": 1.5,
      "cost": .15
    });
  });

  it('should remove ingredients when a user cooks a meal', function() {
    pantry.removeMeal(recipe)
    expect(pantry.contents).to.deep.eq([
      {
        "ingredient": 20081,
        "amount": 10
      },
      {
        "ingredient": 18372,
        "amount": 0.5
      },
      {
        "ingredient": 11297,
        "amount": 3
      }
    ]);
  });

})