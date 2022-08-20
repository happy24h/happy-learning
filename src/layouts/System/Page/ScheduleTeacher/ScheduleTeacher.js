import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '~/store/actions/adminActions';
import Button from '~/components/Button';
import './ScheduleTeacher.scss';
function ScheduleTeacher({ allDoctors, fetAllDoctors, allScheduleTime, fetchAllScheduleTime }) {
    const [state, setState] = useState({
        // selectedDoctor: {},
        selectedDoctor: '',
        currentDate: '',

        renderTime: [],
        listDoctor: [],
    });

    let a = 1;
    if (allDoctors !== state.listDoctor) {
        a += 1;
    }

    if (allScheduleTime !== state.renderTime) {
        a += 2;
    }
    useEffect(() => {
        fetAllDoctors();
        fetchAllScheduleTime();

        let data = allScheduleTime;
        data = data.map((item) => ({ ...item, isActive: false }));
        setState((prev) => ({
            ...prev,
            listDoctor: allDoctors,
            renderTime: data,
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [a]);

    const handleClickBtnTime = (time) => {
        console.log('time btn: ', time);
        if (renderTime && renderTime.length > 0) {
            renderTime = renderTime.map((item) => {
                if (item.id === time.id) {
                    return (item.isActive = !item.isActive);

                    // setState((prev) => ({ ...prev, isSelected: true }));
                }
                return item;
            });
            setState((prev) => ({
                ...prev,
                ...renderTime,
            }));
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    console.log('day la all doctors:', allDoctors);
    console.log('day la allScheduleTime:', allScheduleTime);
    let { renderTime, listDoctor } = state;

    console.log('list state:', state);
    return (
        <div className="manage-schedule-container">
            <div className="m-s-title">QUẢN LÝ KẾ HOẠCH KHÁM BỆNH CỦA BÁC SĨ</div>
            <div className="container">
                <div className="row">
                    <div className="col l-6 form-group">
                        <label>Chọn Bác Sĩ </label>

                        <select className="form-control l-12" name="selectedDoctor" onChange={handleInputChange}>
                            {listDoctor.map((item, index) => {
                                return (
                                    <option key={index} value={item.id}>
                                        {item.lastName} {item.firstName}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="col l-6 form-group">
                        <label>Chọn ngày</label>
                        <input
                            type="date"
                            className="form-control"
                            value={state.birthday}
                            onChange={handleInputChange}
                            name="currentDate"
                            required
                        />
                    </div>
                    <div className="col l-12 pick-hour-container">
                        {renderTime &&
                            renderTime.length > 0 &&
                            renderTime.map((item, index) => {
                                return (
                                    <button
                                        className={
                                            item.isActive === true ? 'btn btn-schedule active' : 'btn btn-schedule'
                                        }
                                        key={index}
                                        onClick={() => handleClickBtnTime(item)}
                                    >
                                        {item.valueVi}
                                    </button>
                                );
                            })}
                    </div>

                    <div className="col l-12 ">
                        <Button primary>Xác nhận</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        allDoctors: state.admin.allDoctors,
        allScheduleTime: state.admin.allScheduleTime,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetAllDoctors: () => dispatch(actions.fetchAllDoctors()),
        fetchAllScheduleTime: () => dispatch(actions.fetchAllScheduleTime()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleTeacher);
