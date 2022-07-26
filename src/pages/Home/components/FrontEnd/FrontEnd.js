import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import * as userService from '~/services/userService';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);
function FrontEnd({ settings }) {
    const [dataFrontend, setDataFrontend] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.frontend();
            setDataFrontend(result);
        };
        fetchApi();
    }, []);

    console.log('data frontend', dataFrontend);
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Lộ trình học Front-end</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {dataFrontend.map((item, index) => (
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

export default FrontEnd;
