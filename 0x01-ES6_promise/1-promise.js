const getFullResponseFromAPI = (success) => new Promise((resolve, reject) => {
  if (success) {
    const data = {
      status: 200,
      body: 'Success',
    };
    resolve(data);
  } else {
    reject(new Error('The fake API is not working currently'));
  }
});

export default getFullResponseFromAPI;
