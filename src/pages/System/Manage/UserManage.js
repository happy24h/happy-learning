import TableUser from './TableUser';
import Header from '../Header';
import Sidebar from '../Sidebar';
import classNames from 'classnames/bind';
import styles from './UserManage.module.scss';
const cx = classNames.bind(styles);
function UserManage() {
    return (
        <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>
                <Header />
                <TableUser />
            </div>
        </div>
    );
}

export default UserManage;
