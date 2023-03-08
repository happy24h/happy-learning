import classNames from 'classnames/bind';
import styles from './SidebarMobile.module.scss';
import config from '~/config';
import MenuItem from './Menu/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBowlFood, faCalculator, faHome, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SidebarMobile({ handleModel }) {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('navWrapper')}>
                <div className={cx('icon-close')} onClick={() => handleModel()}>
                    <FontAwesomeIcon icon={faSquareXmark} />
                </div>
                <div onClick={() => handleModel()}>
                    <MenuItem title="Home" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />} />
                </div>
                <div onClick={() => handleModel()}>
                    <MenuItem title="Food" to={config.routes.food} icon={<FontAwesomeIcon icon={faBowlFood} />} />
                </div>
                <div onClick={() => handleModel()}>
                    <MenuItem title="Library" to={config.routes.library} icon={<FontAwesomeIcon icon={faBook} />} />
                </div>
                <div onClick={() => handleModel()}>
                    <MenuItem title="Blog" to={config.routes.blog} icon={<FontAwesomeIcon icon={faCalculator} />} />
                </div>
            </nav>
        </div>
    );
}

export default SidebarMobile;
