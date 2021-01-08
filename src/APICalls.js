export default function getData(dataset) {
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