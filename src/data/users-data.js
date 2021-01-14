import apiCalls from '../APICalls';

const apiCall = 'users';
let users;

users = apiCalls.getData(apiCall);

export default users;