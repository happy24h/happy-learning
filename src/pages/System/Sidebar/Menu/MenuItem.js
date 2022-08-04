import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, icon, data }) {
    return (
        <ul>
            <li className={cx('menu-item')}>
                {/* <div></div> */}
                <div className={cx('title-icon')}>
                    <span className={cx('icon')}>{icon}</span>
                    <span className={cx('title')}>{title}</span>
                </div>
                <ul className={cx('list-item')}>
                    {data.map((item, index) => (
                        <NavLink key={index} className={cx('link-item')} to={item.to}>
                            {item.title}
                        </NavLink>
                    ))}

                    {/* <NavLink className={cx('link-item')} to={'/system/user-manage'}>
                        Redux CRUD
                    </NavLink> */}
                </ul>
            </li>
        </ul>
    );
}

export default MenuItem;
