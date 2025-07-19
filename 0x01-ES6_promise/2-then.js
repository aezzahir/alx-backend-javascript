function handleResponseFromAPI(promise) {
  promise
    .then((data) => {
      console.log(`${data.status}, ${data.body}`);
    })
    .catch((err) => {
      console.error(`${err}`);
    })
    .finally(() => {
      console.log("Got a response from the API");
    });
}

export default handleResponseFromAPI;
