import { useState, useEffect } from 'react';
import _ from 'lodash';
import * as axios from '~/services/adminService';
import { useParams } from 'react-router-dom';
import './DetailCourse.scss';

function DetailCourse() {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    console.log(course);

    useEffect(() => {
        const fetchApi = async () => {
            let res = await axios.getAllDetailSpecialtyById({ id: id, location: 'ALL' });
            let resProvince = await axios.getAllCodeService('PROVINCE');
            if (res && res.errCode === 0 && resProvince && resProvince.errCode === 0) {
                let dataCourse = res.data;
                let arrTeacherId = [];

                if (dataCourse && !_.isEmpty(dataCourse)) {
                    let arrCourse = dataCourse.doctorSpecialty;
                    if (arrCourse && arrCourse.length > 0) {
                        arrCourse.map((item) => {
                            return arrTeacherId.push(item.doctorId);
                        });
                    }
                }

                let dataProvince = resProvince.data;
                if (dataProvince && dataProvince.length > 0) {
                    dataProvince.unshift({
                        createdAt: null,
                        keyMap: 'ALL',
                        type: 'PROVINCE',
                        valueEn: 'ALL',
                        valueVi: 'Toàn quốc',
                    });
                }
                setCourse({
                    dataDetailCourse: dataCourse,
                    arrTeacherId: arrTeacherId,
                    listProvince: dataProvince ? dataProvince : [],
                });
            }
        };
        fetchApi();
    }, [id]);
    let { dataDetailCourse, listProvince } = course;
    return (
        <div className="detail-specialty-container">
            <div className="detail-specialty-body">
                <div className="description-specialty">
                    {dataDetailCourse && !_.isEmpty(dataDetailCourse) && (
                        <div dangerouslySetInnerHTML={{ __html: dataDetailCourse.descriptionHTML }}></div>
                    )}
                </div>
                <div className="search-sp-doctor">
                    <select onChange={(event) => this.handleOnChangeSelect(event)}>
                        {listProvince &&
                            listProvince.length > 0 &&
                            listProvince.map((item, index) => {
                                return (
                                    <option key={index} value={item.keyMap}>
                                        {item.valueVi}
                                    </option>
                                );
                            })}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default DetailCourse;
