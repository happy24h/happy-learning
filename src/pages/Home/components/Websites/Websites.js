import { useState, useEffect } from 'react';
import * as userService from '~/services/userService';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);
function Websites({ settings }) {
    const navigate = useNavigate();
    const [dataWebsites, setDataWebsites] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let result = await userService.websites();
            setDataWebsites(result);
        };
        fetchApi();
    }, []);

    const handleViewDetailWebsites = (website) => {
        navigate(`detail-learn-website/${website.id}`);
    };

    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Trang Website học lập trình</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {dataWebsites.map((item, index) => (
                            <div
                                key={index}
                                className="section-customize"
                                onClick={() => handleViewDetailWebsites(item)}
                            >
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

export default Websites;
