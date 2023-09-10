import axios from 'axios';

const params = {
  headers: {
    Authorization: 'bearer ' + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
  headers: {
    Authorization:
      'bearer pk_test_51Nk6AUSBinyP66nniVuoxelQ0Ry6IxC1aVxGiXF7UsCyNhvuwVlJq4eiHLKiEa3QX1YAT5VRpaSpbN7GAphVCQeR00uUUmdRqd',
  },
});
