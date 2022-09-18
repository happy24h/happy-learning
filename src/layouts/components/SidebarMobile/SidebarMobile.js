import classNames from 'classnames/bind';
import styles from './SidebarMobile.module.scss';
import config from '~/config';
import MenuItem from './Menu/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBowlFood, faCalculator, faHome } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SidebarMobile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon-close')}>
                aaaa
                <FontAwesomeIcon icon={faHome} />
            </div>
            <nav className={cx('navWrapper')}>
                <MenuItem title="Home" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />} />
                <MenuItem title="Food" to={config.routes.food} icon={<FontAwesomeIcon icon={faBowlFood} />} />
                <MenuItem title="Library" to={config.routes.library} icon={<FontAwesomeIcon icon={faBook} />} />
                <MenuItem
                    title="Calculator"
                    to={config.routes.calculator}
                    icon={<FontAwesomeIcon icon={faCalculator} />}
                />
            </nav>
        </div>
    );
}

export default SidebarMobile;
