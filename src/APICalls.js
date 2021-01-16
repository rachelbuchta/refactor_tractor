const getData = dataset => {
  return fetch(`http://localhost:3001/api/v1/${dataset}`)
    .then(response => response.json())
    .then(data => data)    
    .catch(error => console.log('error', error));  
} 

// export const sendData = dataToSend => {
//   const requestOptions = {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(dataToSend)
//   };

//   fetch("http://localhost:3001/api/v1/users", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
export default getData;