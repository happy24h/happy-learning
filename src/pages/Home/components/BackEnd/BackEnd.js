import { useState, useEffect } from 'react';
import * as userService from '~/services/userService';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);
function BackEnd({ settings }) {
    const [dataBackend, setDataBackend] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let result = await userService.backend();
            setDataBackend(result);
        };
        fetchApi();
    }, []);

    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Lộ trình học Back-end</span>
                    <button className="btn-section">xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {dataBackend.map((item, index) => (
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

export default BackEnd;
