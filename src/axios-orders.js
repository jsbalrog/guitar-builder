import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-guitar.firebaseio.com/'
});

export default instance;