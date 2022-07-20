import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import config from '~/config';
import Search from '~/layouts/components/Search';
import images from '~/assets/images';
import Button from '~/components/Button';
import Tippy from '@tippyjs/react';
import { BellIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);
function Header() {
    const currentUser = true;
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
                    {currentUser ? (
                        <>
                            <div className={cx('my-course')}>Khóa học của tôi</div>
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
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu>
                        <img
                            className={cx('user-avatar')}
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            alt="Nguyen Van A"
                        />
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
