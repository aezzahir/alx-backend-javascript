function fetchData() {
  return new Promise(function (resolve, reject) {
    fetch("http://localhost:80000/api/v1/aircraft/80001")
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

function displayData(data) {
  console.log(data);
}

function onError(error) {
  console.error(`Error: ${error}`);
}

fetchData().then(displayData).catch(onError);
