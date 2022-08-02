import axios from '~/utils/axios';
export const createNewUserService = (data) => {
    console.log('check data from service: ', data);
    return axios.post('/api/create-new-user', data);
};

export const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId,
        },
    });
};

export const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
};

// export default createNewUserService;
