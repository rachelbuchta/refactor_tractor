import {
  getData,
  sendData,
  test
 } from '../APICalls';

const apiCall = 'ingredients';

let ingredientsData;

ingredientsData = getData(apiCall);

sendData({});

console.log(test);

export default ingredientsData;