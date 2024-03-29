import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import config from '~/config';
import Search from '~/layouts/components/Search';
import images from '~/assets/images';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
import SidebarMobile from '../SidebarMobile/SidebarMobile';
import { BellIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEarthAsia,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faAngleLeft,
    faBars,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
];

function Header({ homePage }) {
    const [modelSidebar, setModelSidebar] = useState(false);
    const currentUser = false;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    const handleModel = () => {
        setModelSidebar(!modelSidebar);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {modelSidebar && <SidebarMobile handleModel={handleModel} />}
                {!modelSidebar && homePage ? (
                    <div className={cx('icon-bars')}>
                        <Link to={config.routes.home}>
                            <div className={cx('menu-mobile')}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div className={cx('icon-bars')} onClick={() => handleModel()}>
                        <div className={cx('menu-mobile')}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                )}

                <div className={cx('inner-left')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="" width={48} height={40} />
                    </Link>
                    {homePage ? (
                        <Link to={config.routes.home}>
                            <div className={cx('back-home')}>
                                <FontAwesomeIcon className={cx('back-home-icon')} icon={faAngleLeft} />
                                Quay lại trang chủ
                            </div>
                        </Link>
                    ) : (
                        <div>Nỗ lực để tốt hơn 1% mỗi ngày</div>
                    )}
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <div className={cx('my-course')}>Khóa học</div>
                            <Tippy delay={[0, 50]} content="Thông báo" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <BellIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <FontAwesomeIcon icon={faEarthAsia} />
                                <span className={cx('action-btn-2')}> English</span>
                            </Button>
                            <Link to={config.routes.login}>
                                <Button primary>Log in</Button>
                            </Link>
                        </>
                    )}

                    {currentUser && (
                        <Menu items={userMenu}>
                            <img
                                className={cx('user-avatar')}
                                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                                alt="Nguyen Van A"
                            />
                        </Menu>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
