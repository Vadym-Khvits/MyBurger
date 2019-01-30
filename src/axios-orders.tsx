import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerdb-f00e3.firebaseio.com/'
});

export default instance;