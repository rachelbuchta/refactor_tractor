import getData from '../APICalls';

const apiCall = 'recipes';

let recipeData;

recipeData = getData(apiCall);

export default recipeData;