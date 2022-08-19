import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MenuItem from './Menu/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHome, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faBlogger } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Sidebar() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faHome} />,
            title: 'Home',
            data: [
                {
                    title: 'CRUD User',
                    to: '/system/user-manage',
                },
                {
                    title: 'Redux CRUD',
                    to: '/system/user-redux',
                },
            ],
        },
        {
            icon: <FontAwesomeIcon icon={faBook} />,
            title: 'Library',
            data: [
                {
                    title: 'Library users',
                    to: '/',
                },
                {
                    title: 'React library',
                    to: '/',
                },
            ],
        },
        {
            icon: <FontAwesomeIcon icon={faBlogger} />,
            title: 'Blog',
            data: [
                {
                    title: 'Blog users',
                    to: '/',
                },
            ],
        },
        {
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            title: 'Learn',
            data: [
                {
                    title: 'self learning',
                    to: '/',
                },
                {
                    title: 'Read books',
                    to: '/',
                },
            ],
        },
    ];
    return (
        <nav className={cx('sidebar')}>
            <div className={cx('logo')}>
                <span>Happy24h</span>
            </div>
            <div className={cx('sidebar-menu')}>
                {MENU_ITEMS.map((item, index) => (
                    <MenuItem key={index} title={item.title} icon={item.icon} data={item.data} />
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;
