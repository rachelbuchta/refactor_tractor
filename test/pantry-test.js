import { expect } from 'chai';

import Pantry from '../src/pantry';
import User from '../src/user';

import data from '../src/data/users-test-data';
// import ingredientData from '../src/data/ingredient-test-data';



describe('Pantry', function() {
  let user;
  let userInfo;
  let recipe;
  let pantry;


  beforeEach(function() {
    userInfo = data[0];
    user = new User(userInfo);
    pantry = new Pantry(user);

    recipe1 = {name: 'Flour Soda', type: ['italian', 'dinner'], ingredients: [{
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
    expect(pantry.contents).to.deep.equal(user.pantry);
  });

  it('should determine if it is stocked for a meal', function() {
    expect(pantry.canMake(recipe1)).to.eq(true);
  });

  it('should return the amount missing of each ingredient', function() {
    expect(pantry.canMake(recipe2)).to.deep.eq({
      "name": "sharks",
      "amount": 1.5,
      "cost": .15
    });
  });

  it('should remove ingredients when a user cooks a meal', function() {
    pantry.removeMeal(recipe1)
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