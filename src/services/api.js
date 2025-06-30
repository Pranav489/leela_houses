import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://leela.demovoting.com/api',
  fileURL: 'http://leela.demovoting.com/uploads',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

export default axiosInstance;