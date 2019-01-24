const axios = require('axios');

const API = 'https://jsonplaceholder.typicode.com/users';

test('async API call with Jest', async () => {
  const req = await axios.get(API);
  const underTest = req.data[0];
  expect(underTest.name).toBe('Leanne Graham');
});