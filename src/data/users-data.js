import getData from '../APICalls';

const apiCall = 'users';
let users;

users = getData(apiCall);

export default users;
