import './Footer.scss';
function Footer() {
    return (
        <footer className="footer">
            <div className="grid wide footer__content">
                <div className="row">
                    <div className="">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footer-list">
                            <li className="footer-item">Trung Tâm Trợ Giúp</li>
                            <li className="footer-item">Email: vietanhhappy99@gmail.com</li>
                            <li className="footer-item">Hướng dẫn mua hàng</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footer-list">
                            <li className="footer-item">Giới thiệu</li>
                            <li className="footer-item">Tuyển Dụng</li>
                            <li className="footer-item">Điều khoản</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footer-list">
                            <li className="footer-item">Thể thao </li>
                            <li className="footer-item">Đọc sách</li>
                            <li className="footer-item">Giáo dục</li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="footer__heading">Theo dõi</h3>
                        <ul className="footer-list">
                            <li className="footer-item">Facebook</li>
                            <li className="footer-item">Instagram</li>
                            <li className="footer-item">Linkedin</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="gird wide">
                    <p className="footer__text">2022 - Bản quền thuộc về công ty Happy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
