import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`,
})

export default api