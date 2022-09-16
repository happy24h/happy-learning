import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);

let dataFood = [
    { id: 1, name: 'Cơm gạo lứt trộn', image: 'https://cdn.tgdd.vn/2021/05/content/gaoluccomchien800-800x450.jpg' },
    { id: 2, name: 'Cơm gạo lứt trộn', image: 'https://icdn.one/upload/2021/01/21/20210121134708-69bac637.jpg' },
    {
        id: 3,
        name: 'Cơm gạo lứt trộn rau củ ',
        image: 'https://amthucvietnam365.vn/wp-content/uploads/2021/04/an-kieng-3.jpg',
    },
    {
        id: 4,
        name: 'salad trộn ',
        image: 'https://wikiphunu.com.vn/wp-content/uploads/2020/10/thuc-don-giam-can-trong-7-ngay-3-Copy.jpg',
    },
    {
        id: 5,
        name: 'salad trộn',
        image: 'https://wikiphunu.com.vn/wp-content/uploads/2020/10/thuc-don-giam-can-trong-7-ngay-4-Copy.jpg',
    },
];
function Food({ settings }) {
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Món ăn lành mạnh</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {dataFood &&
                            dataFood.length > 0 &&
                            dataFood.map((item, index) => (
                                <div key={index} className="section-customize">
                                    <div
                                        className="bg-image-blog section-specialty"
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

export default Food;
