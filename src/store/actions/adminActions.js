import * as types from './actionTypes';
import * as axios from '~/services/adminService';

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
