import * as types from './actionTypes';
import * as axios from '~/services/adminService';
import { toast } from 'react-toastify';

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: types.FETCH_GENDER_START });
            let res = await axios.getAllCodeService('GENDER');
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
        }
    };
};

export const fetchGenderSuccess = (genderData) => ({
    type: types.FETCH_GENDER_SUCCESS,
    data: genderData,
});

export const fetchGenderFailed = () => ({
    type: types.FETCH_GENDER_FAILED,
});

export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.getAllDoctors();
            if (res && res.errCode === 0) {
                dispatch({
                    type: types.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data,
                });
            } else {
                dispatch({
                    type: types.FETCH_ALL_DOCTORS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: types.FETCH_ALL_DOCTORS_FAILED,
            });
        }
    };
};

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.getAllCodeService('TIME');
            if (res && res.errCode === 0) {
                dispatch({
                    type: types.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data,
                });
            } else {
                dispatch({
                    type: types.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: types.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
            });
        }
    };
};

export const getRequiredDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: types.FETCH_REQUIRED_DOCTOR_INFOR_START });

            let resPrice = await axios.getAllCodeService('PRICE');
            let resPayment = await axios.getAllCodeService('PAYMENT');
            let resProvince = await axios.getAllCodeService('PROVINCE');
            let resSpecialty = await axios.getAllSpecialty();
            let resClinic = await axios.getAllClinic();

            if (
                resPrice &&
                resPrice.errCode === 0 &&
                resPayment &&
                resPayment.errCode === 0 &&
                resProvince &&
                resProvince.errCode === 0 &&
                resSpecialty &&
                resSpecialty.errCode === 0 &&
                resClinic &&
                resClinic.errCode === 0
            ) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data,
                    resSpecialty: resSpecialty.data,
                    resClinic: resClinic.data,
                };
                dispatch(fetchRequiredDoctorInforSuccess(data));
            } else {
                dispatch(fetchRequiredDoctorInforFailed());
            }
        } catch (e) {
            dispatch(fetchRequiredDoctorInforFailed());
        }
    };
};

export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: types.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData,
});

export const fetchRequiredDoctorInforFailed = () => ({
    type: types.FETCH_REQUIRED_DOCTOR_INFOR_FAILED,
});

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.saveDetailDoctorService(data);
            if (res && res.errCode === 0) {
                toast.success('Save Infor Detail Doctor Succedd!');
                dispatch({
                    type: types.SAVE_DETAIL_DOCTOR_SUCCESS,
                });
            } else {
                console.log('err res: ', res);
                toast.error('Save Infor Detail Doctor error!');
                dispatch({
                    type: types.SAVE_DETAIL_DOCTOR_FAILED,
                });
            }
        } catch (e) {
            toast.error('Save Infor Detail Doctor error!');
            console.log('SAVE_DETAIL_DOCTOR_FAILED: ', e);
            dispatch({
                type: types.SAVE_DETAIL_DOCTOR_FAILED,
            });
        }
    };
};
