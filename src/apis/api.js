import axios from 'axios'

export const getData = () => {
    const URL = `https://ff6684a7-d34a-40c2-8372-d5308d32ec20.mock.pstmn.io`;
    return axios(URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
};