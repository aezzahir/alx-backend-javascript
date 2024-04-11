const handleResponseFromAPI = (promise) => {
  const theResolver = () => {
    const data = {
      status: 200,
      body: 'success',
    };
    return data;
  };
  const theRejecter = () => Error();
  return promise
    .then(theResolver, theRejecter)
    .finally(() => console.log('Got a response from the API'));
};
export default handleResponseFromAPI;
