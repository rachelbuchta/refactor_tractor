import getData from '../APICalls';

const apiCall = 'ingredients';

let ingredientsData;

ingredientsData = getData(apiCall);  

export default ingredientsData;