import ContentSlider from './components/ContentSlider/ContentSlider';
import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
const cx = classNames.bind(styles);
function Blog() {
    return (
        <div className={cx('wrapper')}>
            <ContentSlider />
        </div>
    );
}

export default Blog;
