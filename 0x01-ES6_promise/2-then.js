const handleResponseFromAPI = (promise) => {
  const theResolver = () => {
    const data = {
      status: 200,
      body: 'success',
    };
    return data;
  };
  const theRejecter = () => Error();
  promise.then(theResolver, theRejecter);
  console.log('Got a response from the API');
};

export default handleResponseFromAPI;
