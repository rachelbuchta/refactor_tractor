import getData from '../APICalls';

const apiCall = 'recipes';

let ngredientsData;

ingredientsData = getData(apiCall);

export default ingredientsData;