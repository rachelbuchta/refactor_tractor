export const getData = dataset => {
  let data = [];
  fetch(`http://localhost:3001/api/v1/${dataset}`)
    .then(response => response.json())
    .then(result => {
      result.forEach(eachResult => {
        data.push(eachResult)
      });
    })
    .catch(error => console.log('error', error));
  return data;
} 

export const sendData = dataToSend => {
  const requestOptions = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: dataToSend
  };

  fetch("http://localhost:3001/api/v1/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}