function getFullResponseFromAPI(success) {
  return new Promise(function (resolve, reject) {
    if (success) {
      let data = {
        status: 200,
        body: "Success",
      };
      resolve(data);
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}

export default getFullResponseFromAPI;
