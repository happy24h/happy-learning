import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MenuItem from './Menu/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faLightbulb, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
// import { faBlogger } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Sidebar() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Người dùng',
            data: [
                {
                    title: 'Danh sách người dùng',
                    to: '/system/user-manage',
                },
                {
                    title: 'Redux CRUD',
                    to: '/system/user-redux',
                },
            ],
        },
        {
            icon: <FontAwesomeIcon icon={faUserGraduate} />,
            title: 'Giáo viên',
            data: [
                {
                    title: 'Thêm lịch hẹn',
                    to: '/schedule-teacher',
                },
                {
                    title: 'Thêm thông tin giáo viên',
                    to: '/teacher-info-manage',
                },
            ],
        },
        {
            icon: <FontAwesomeIcon icon={faCircleInfo} />,
            title: 'Thông tin',
            data: [
                {
                    title: 'Phòng học',
                    to: '/classroom-manage',
                },
                {
                    title: 'Chuyên môn',
                    to: '/specialty-manage',
                },
            ],
        },
        {
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            title: 'Learn',
            data: [
                {
                    title: 'Danh sách người dùng',
                    to: '/system/users-manage-redux',
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
