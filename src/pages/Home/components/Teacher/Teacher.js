import { useState, useEffect } from 'react';
import * as useService from '~/services/userService';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
// import SliderItem from '../SliderItem';
import { Buffer } from 'buffer';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);
function Teacher({ settings }) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let result = await useService.teacher();
            setPosts(result);
        };
        fetchApi();
    }, []);
    const handleViewDetailTeacher = (teacher) => {
        navigate(`detail-teacher/${teacher.id}`);
    };
    console.log('posts >>>', posts);
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Giáo viên nổi bật tuần qua</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {posts &&
                            posts.length > 0 &&
                            posts.map((item, index) => {
                                var imageBase64 = Buffer.from(item.image, 'base64');
                                console.log('base64', imageBase64);

                                return (
                                    <div
                                        className="section-customize"
                                        key={index}
                                        onClick={() => handleViewDetailTeacher(item)}
                                    >
                                        <div className="item-center">
                                            <div
                                                className="bg-image section-outstanding-doctor"
                                                style={{ backgroundImage: `url(${imageBase64})` }}
                                            ></div>
                                            <div className="name-specialty">{`${item.lastName} ${item.firstName}`}</div>
                                        </div>
                                    </div>
                                );
                            })}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Teacher;
