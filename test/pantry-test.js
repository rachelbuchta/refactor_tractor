import { expect } from 'chai';

import User from '../src/user';
// import data from '../src/data/users-data';
import data from '../src/data/users-test-data';

describe('Pantry', function() {
  let user;
  let userInfo;
  let recipe;
  let pantry;


  beforeEach(function() {
    userInfo = data[0];
    user = new User(userInfo)

    recipe = {name: 'Chicken Parm', type: ['italian', 'dinner']};
  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });


  it('should store a user pantry', function() {
    expect(pantry.contents).to.eq(user.pantry);
  });

})