import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import * as userService from '~/services/userService';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);
function Courses({ settings }) {
    const [dataCourses, setDataCourses] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.courses();
            setDataCourses(result);
        };
        fetchApi();
    }, []);

    console.log('data frontend', dataCourses);
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Tất cả các khóa học</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {dataCourses.map((item, index) => (
                            <div key={index} className="section-customize">
                                <div
                                    className="bg-image section-specialty"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                ></div>
                                <div className="name-specialty">{item.name}</div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Courses;
