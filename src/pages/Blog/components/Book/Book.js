import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);

let dataBook = [
    {
        id: 1,
        name: 'Thực dưỡng chiến thắng ung thư',
        image: 'https://vn-test-11.slatic.net/p/64f05fc1a463ee0c1152842b40dfeac3.jpg',
    },
    {
        id: 2,
        name: 'Âm dương nguyên lý vô song',
        image: 'https://salt.tikicdn.com/cache/w1200/ts/product/74/eb/99/eb8a22f251f26ab55ed34f6d648ff06d.jpg',
    },
    {
        id: 3,
        name: 'Ẩm thực dưỡng sinh',
        image: 'https://dungcudienchan.vn/wp-content/uploads/2017/11/sach-am-thuc-duong-sinh.jpg',
    },
    {
        id: 4,
        name: 'Minh Triết Trong Ăn Uống Của Phương Đông',
        image: 'https://product.hstatic.net/1000217031/product/minhtriettronganuong_599ea42f7c4249b89403f49e56cd1119_grande.jpg',
    },
    {
        id: 5,
        name: 'Ăn kiêng dưỡng sinh',
        image: 'https://salt.tikicdn.com/cache/w1200/ts/product/7e/ed/84/4ca656b3a44f08cf78d89e2e55401bb8.jpg',
    },
];
function Book({ settings }) {
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Sách thực dưỡng</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {dataBook &&
                            dataBook.length > 0 &&
                            dataBook.map((item, index) => {
                                return (
                                    <div className="section-customize" key={index}>
                                        <div className="item-center">
                                            <div
                                                className="bg-image section-outstanding-doctor"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            ></div>
                                            <div className="name-specialty">{item.name}</div>
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

export default Book;
