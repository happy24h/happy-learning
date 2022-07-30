import classNames from 'classnames/bind';
import styles from './InputUser.module.scss';
const cx = classNames.bind(styles);

function InputUser() {
    return (
        <div className={cx('container')}>
            <form>
                <div className={cx('group')}>
                    <input type="text" required />
                    <span className={cx('highlight')}></span>
                    <span className={cx('bar')}></span>
                    <label>Name</label>
                </div>
                <div className={cx('group')}>
                    <input type="text" required />
                    <span className={cx('highlight')}></span>
                    <span className={cx('bar')}></span>
                    <label>Email</label>
                </div>
                <div className={cx('group')}>
                    <input type="text" required />
                    <span className={cx('highlight')}></span>
                    <span className={cx('bar')}></span>
                    <label>First Name</label>
                </div>

                <div className={cx('group')}>
                    <input type="text" required />
                    <span className={cx('highlight')}></span>
                    <span className={cx('bar')}></span>
                    <label>Last Name</label>
                </div>
                <div className={cx('group')}>
                    <input type="text" required />
                    <span className={cx('highlight')}></span>
                    <span className={cx('bar')}></span>
                    <label>Phone Number</label>
                </div>

                <div className={cx('group')}>
                    <input type="text" required />
                    <span className={cx('highlight')}></span>
                    <span className={cx('bar')}></span>
                    <label>Address</label>
                </div>
            </form>
        </div>
    );
}

export default InputUser;
