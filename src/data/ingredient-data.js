import getData from '../APICalls';

const apiCall = 'recipes';

let ingredientsData;

ingredientsData = getData(apiCall);

export default ingredientsData;