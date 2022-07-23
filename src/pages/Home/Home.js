import SimpleSlider from './components/SimpleSlider/SimpleSlider';
import HomeContent from './components/HomeContent/HomeContent';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <SimpleSlider />
            <HomeContent />
        </div>
    );
}

export default Home;
