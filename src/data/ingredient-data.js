import apiCalls from '../APICalls';

const apiCall = 'ingredients';


let ingredientsData;

ingredientsData = apiCalls.getData(apiCall);

export default ingredientsData;