import ContentSlider from './components/ContentSlider/ContentSlider';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <ContentSlider />
        </div>
    );
}

export default Home;
