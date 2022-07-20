import images from '~/assets/images';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('back-btn')}>
                <img src={images.logo} alt="viet anh" height={30} width={30} />
            </div>
            <div className={cx('header-title')}>
                <h5>Việt Anh</h5>
                <h6>happy_24h</h6>
            </div>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
