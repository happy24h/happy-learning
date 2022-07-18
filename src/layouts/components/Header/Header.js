import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h3>Logo</h3>
                <h3>Search</h3>
                <h3>Login</h3>
            </div>
        </div>
    );
}

export default Header;
