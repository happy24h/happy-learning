import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to="/hello" className={cx('wrapper')}>
            <img src={images.noImage} alt="hello" width={40} height={40} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Việt Anh</span>
                    <FontAwesomeIcon className={cx('check')} />
                </h4>
                <span className={cx('username')}>happy_24h</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
