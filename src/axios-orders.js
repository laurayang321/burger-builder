import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-afd4b-default-rtdb.firebaseio.com/'
});

export default instance;
