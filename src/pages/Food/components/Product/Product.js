import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from '../ContentSlider/ContentSlider.module.scss';
const cx = classNames.bind(styles);

let dataProduct = [
    { id: 1, name: 'Tương tamari lâu năm', image: 'https://cdn.tgdd.vn/2021/01/CookProduct/1-1200x676-66.jpg' },
    {
        id: 2,
        name: 'Dầu Oliu Ý',
        image: 'https://media.hasaki.vn/hsk/cosmetics/Cac-cach-tri-tham-moi-tu-dau-oliu-hieu-qua-1.jpg',
    },
    {
        id: 3,
        name: 'Bột sắn dây nguyên chất ',
        image: 'https://vn-test-11.slatic.net/shop/5f41f66117c4c1cab84b13dbbd9ee69f.jpeg',
    },
    {
        id: 4,
        name: 'Bún gạo lứt ',
        image: 'https://cf.shopee.vn/file/529a7dfff7c7e1b76103ee2d6ec4256b',
    },
    {
        id: 5,
        name: 'Trà gạo lứt',
        image: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/15/836090/Tra-Gao-Lut.png',
    },
];
function Product({ settings }) {
    return (
        <div className="section-share section-specialty">
            <div className="section-container">
                <div className="section-header">
                    <span className="title-section">Sản phẩm thực dưỡng</span>
                    <button className="btn-section">Xem thêm</button>
                </div>

                <div className={cx('slider')}>
                    <Slider className={cx('container')} {...settings}>
                        {dataProduct &&
                            dataProduct.length > 0 &&
                            dataProduct.map((item, index) => (
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

export default Product;
