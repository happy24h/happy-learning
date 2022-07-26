import { useState, useEffect } from 'react';
import * as useService from '~/services/userService';
import Slider from 'react-slick';
import SliderItem from '../SliderItem';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);
function FeaturedPost({ settings }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            let result = await useService.featuredPost();
            setPosts(result);
        };
        fetchApi();
    }, []);
    console.log('posts >>>', posts);
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Bài viết nổi bật</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {posts.map((item, index) => (
                            <SliderItem key={item.id} data={item} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default FeaturedPost;
