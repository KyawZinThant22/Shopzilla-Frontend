import axios from 'axios';

//constants
const URL = process.env.REACT_APP_API_URL;

const requestHeaders = {
  'Content-Type':
    'multipart/form-data; boundary=<calculated when request is sent>; application/json; charset=UTF-8',
  Accept: 'application/json',
};

const apiSetting = {
  authValidate: async (token: string) => {
    const resWithAxios = await axios({
      url: `${URL}auth/validate`,
      method: 'POST',
      headers: { ...requestHeaders, token: `Bearer ${token}` },
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response;
      });
    return resWithAxios;
  },
};

export default apiSetting;
