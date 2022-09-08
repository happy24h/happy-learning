import ContentSlider from './components/ContentSlider/ContentSlider';
import classNames from 'classnames/bind';
import styles from './Blog.module.scss';
import Slider from '~/layouts/components/Slider';
const cx = classNames.bind(styles);
function Blog() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <div className={cx('content')}>
                <ContentSlider />
            </div>
        </div>
    );
}

export default Blog;
