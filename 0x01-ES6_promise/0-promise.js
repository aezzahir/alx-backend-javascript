const getResponseFromAPI = () => new Promise((resolve, reject) => {
  resolve('Connected');
  reject(new Error('Error'));
});

export default getResponseFromAPI;
