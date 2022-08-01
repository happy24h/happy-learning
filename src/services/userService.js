import * as httpRequest from '~/utils/httpRequest';

// project management system
export const getAllUsers = async (id) => {
    try {
        const res = await httpRequest.get('api/get-all-users', { params: { id } });
        return res.users;
    } catch (error) {
        console.log(error);
    }
};

// project user ui
export const frontend = async () => {
    try {
        const res = await httpRequest.get('api/get-specialty');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const backend = async () => {
    try {
        const res = await httpRequest.get('/api/get-clinic');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const featuredPost = async () => {
    try {
        const res = await httpRequest.get('api/top-doctor-home');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
