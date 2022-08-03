import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import MenuItem from './Menu/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <nav className={cx('sidebar')}>
            <div className={cx('logo')}>
                <span>Happy24h</span>
            </div>
            <div className={cx('sidebar-menu')}>
                <MenuItem title="Home" to={config.routes.home} icon={<FontAwesomeIcon icon={faHome} />} />
                <MenuItem title="Library" to={config.routes.library} icon={<FontAwesomeIcon icon={faBook} />} />
                <MenuItem title="Blog" to={config.routes.blog} icon={<FontAwesomeIcon icon={faBlogger} />} />
                <MenuItem title="Learn" to={config.routes.learn} icon={<FontAwesomeIcon icon={faLightbulb} />} />
            </div>
        </nav>
    );
}

export default Sidebar;
