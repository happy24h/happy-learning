import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import config from '~/config';
import Search from '~/layouts/components/Search';
import images from '~/assets/images';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-left')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="" width={48} height={40} />
                    </Link>
                    <div>Học lập trình</div>
                </div>
                <Search />
                <div className={cx('actions')}>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
