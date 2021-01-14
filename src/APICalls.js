const apiCalls = {
  getData(dataset) {
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
  },

  sendData(dataToSend) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: `${dataToSend}`
    };

    fetch("http://localhost:3001/api/v1/users", requestOptions)
      .then(response => response)
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}

export default apiCalls;