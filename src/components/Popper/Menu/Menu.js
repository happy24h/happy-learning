import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} {...attrs}>
                    Hello World
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
