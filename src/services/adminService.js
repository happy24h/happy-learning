import axios from '~/utils/axios';

export const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
};

// get user manage
export const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
};

// create user manage
export const createNewUserService = (data) => {
    console.log('check data from service: ', data);
    return axios.post('/api/create-new-user', data);
};

// delete user manage
export const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId,
        },
    });
};

// edit user manage
export const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
};

// Detail websites
export const getAllDetailClinicById = (data) => {
    return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`);
};
