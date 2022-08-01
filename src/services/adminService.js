import axios from '~/utils/axios';
const createNewUserService = (data) => {
    console.log('check data from service: ', data);
    return axios.post('/api/create-new-user', data);
};

export default createNewUserService;
