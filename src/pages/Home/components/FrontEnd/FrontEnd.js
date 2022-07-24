import Slider from 'react-slick';
import SliderItem from '../SliderItem';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);
function FrontEnd({ settings }) {
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Lộ trình học Front-end</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        <SliderItem />
                        <SliderItem />
                        <SliderItem />
                        <SliderItem />
                        <SliderItem />
                        <SliderItem />
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default FrontEnd;
