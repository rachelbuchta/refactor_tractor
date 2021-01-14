import apiCalls from '../APICalls';

const apiCall = 'recipes';

let recipeData;

recipeData = apiCalls.getData(apiCall);

export default recipeData;