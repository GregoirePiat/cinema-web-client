import axios from 'axios';

const instance = axios.create({
    baseURL:"http://localhost:8080/cinema-1.0/"
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;