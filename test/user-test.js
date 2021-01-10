import { expect } from 'chai';

import User from '../src/user';
import userData from '../src/data/users-test-data';
import testRecipe from '../src/data/recipe-test-data.js';

describe.only('User', function() {
  let firstUser;
  let firstUserInfo;
  let secondUser;
  let secondUserInfo;
  let recipe;  

  beforeEach(function() {
    firstUserInfo = userData[0];
    firstUser = new User(firstUserInfo);
    secondUserInfo = userData[1];
    secondUser = new User(secondUserInfo);

    recipe = testRecipe[0];
  });

  it('should be an instance of User', function() {
    expect(firstUser).to.be.an.instanceof(User);
    expect(secondUser).to.be.an.instanceof(User);
  });

  it('should initialize with an id', function() {    
    expect(firstUser.id).to.eq(1);
    expect(secondUser.id).to.equal(2);
  });

  it('should initialize with a name', function() {
    expect(firstUser.name).to.eq('Saige O\'Kon');
    expect(secondUser.name).to.eq('Ephraim Goyette');
  });

  it('should initialize with a pantry', function() {
    expect(user.pantry[0].ingredient).to.eq(11477);
  });

  it('should initialize with an empty favoriteRecipes array', function() {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should initialize with an empty recipesToCook array', function() {
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('should be able to save a recipe to favoriteRecipes', function() {
    user.saveRecipe(recipe);
    expect(user.favoriteRecipes[0].name).to.equal('Chicken Parm');
  });

  it('should be able to decide to cook a recipe', function() {
    user.decideToCook(recipe);
    expect(user.recipesToCook[0].name).to.equal('Chicken Parm');
  });

  it('should be able to filter recipes by type', function() {
    user.saveRecipe(recipe);
    expect(user.filterRecipes('italian')).to.deep.equal([recipe]);
  });

  it('should be able to search recipes by name', function() {
    user.saveRecipe(recipe);
    expect(user.searchForRecipe('Chicken Parm')).to.deep.equal([recipe]);
  });
});
