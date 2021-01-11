export default class Pantry {
  constructor(user) {
    this.contents = user.pantry;
  }

  canMake() {
    // iterate through recipes ingredients
    // for each ingredient, check the pantry for at least the amount
    // if we have it, push it to an "inStock" array
      // after, iterate over the in stock array and subtract the amount we need for the recipe from this.contents
    // if we dont, return a string of "cant make, buy more x y z"



  }

};