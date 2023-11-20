export const sendGeolocation = async (data: object) => {
  const params = {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const api = 'http://google.com';
  const result = await fetch(api, params);
  return result;
};
