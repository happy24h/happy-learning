import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Blog.scss';
const Calculator = () => {
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(true);
            if (window.scrollY >= 100) {
                setShowGoToTop(true);
                console.log('set state');
            } else {
                // Hide
                setShowGoToTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        console.log('addEvent');
        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('removeEvent');
        };
    }, []);
    return (
        <div className="body-lifeSkills">
            <nav className="nav-blog">
                <ul>
                    <li>Home</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Reactjs</li>
                    <li>TypeScript</li>
                    <li>Nodejs</li>
                </ul>
            </nav>
            <div className="container_blog">
                <div className="content_blog">
                    <h2 className="blog_title">Những câu hỏi phỏng vấn React thường gặp</h2>
                    <div className="content-text-blog">
                        <article>
                            <h2>Redux là gì? Tại sao phải sử dụng Redux trong ứng dụng React.</h2>
                            <p>
                                Redux là 1 công cụ giúp quản lý các biến global state trong ứng dụng React hay các thư
                                viện JavaScript nào khác. Khi ứng dụng của chúng ta trở nên lớn hơn với hàng trăm hay
                                hàng nghìn components thì việc chia sẻ dữ liệu giữa các Components với nhau cũng trở nên
                                phức tạp hơn. Redux tạo ra 1 store lưu trữ dữ liệu của ứng dụng vào một nơi duy nhất,
                                sau đó bằng cách connect đến store thì Component của chúng ta có thể lấy ra để sử dụng
                                hoặc cập nhật để thay đổi giá trị biến.
                                <br />3 thành phần cơ bản trong Redux gồm:
                                <ul>
                                    <li>
                                        Store: Nơi giữ các biến trạng thái của ứng dụng, với mô hình Redux thì sẽ chỉ
                                        tồn tại một store duy nhất
                                    </li>
                                    <li>
                                        Actions: các sự kiện được gửi đến để cập nhật dữ liệu các biến trong store của
                                        Redux
                                    </li>
                                    <li>
                                        Reducers: là các function để lấy ra giá trị (trạng thái) của các biến trong
                                        store
                                    </li>
                                </ul>
                            </p>
                        </article>

                        <article>
                            <h2>Lifecycle của component trong React</h2>
                            <p>
                                Lifecycle (vòng đời) của một component trong React có 3 giai đoạn:
                                <br />
                                <ul>
                                    <li>
                                        Mounting: giai đoạn khởi tạo – khi component đã sẵn sàng để gắn kết trong DOM
                                        của trình duyệt để hiển thị lên cho người dùng.
                                    </li>
                                    <li>
                                        Updating: giai đoạn component được cập nhật – để cập nhật component thì chúng ta
                                        có thể truyền props mới đến component hoặc set lại local state bên trong
                                        component đó. Sau khi component render lại thì cây DOM vị trí chứa component
                                        cũng sẽ được hiển thị với các giá trị mới để người dùng nhìn thấy.
                                    </li>
                                    <li>
                                        Unmounting: giai đoạn component bị ngắt kết nối, bỏ ra khỏi cây DOM của trình
                                        duyệt. Đây cũng là giai đoạn cuối trong vòng đời của component. Từ lúc này
                                        component sẽ không thể được truy cập hay tác động nữa trừ khi nó được mouting và
                                        bắt đầu mộ lifecycle mới.
                                    </li>
                                </ul>
                                Với class component, React cung cấp cho chúng ta các lifecycle method như
                                componentDidMount, componentDidUpdate, componentWillReceiveProps, componentWillUnMount
                                để quản lý các sự kiện xảy ra ở từng giai đoạn trong vòng đời của nó. Còn trong
                                functional component, React cung cấp Hook useEffect cho việc xử lý này.
                            </p>
                        </article>

                        <article>
                            <h2>useEffect trong React Hooks</h2>
                            <p>
                                useEffect là một hook trong React Hooks cho phép chúng ta làm việc với các life cycle ở
                                functional component. Có thể hiểu đơn giản rằng useEffect Hook là của 3 phương thức
                                componentDidMount, componentDidUpdate, và componentWillUnmount kết hợp lại với nhau.
                                <br />
                                Lifecyle là một phần rất quan trọng trong một component. Trong một vài trường hợp chúng
                                ta cần phải fetch data từ API khi component đã được render, hay thực hiện hành động nào
                                đó khi một component được update. Bởi vậy có thể thấy rằng phương thức quan trọng và hay
                                được sử dụng nhất trong lifce cycle đó là componentDidMount, componentDidUpdate.
                                <br /> Nhưng trong một functional component không thể làm việc với các life cycle này
                                bằng cách thông thường, bởi vậy useEffect Hooks sinh ra để làm điều này.
                                <br />
                                <ul>
                                    <li>
                                        useEffect(callback):
                                        <br />
                                        - Gọi callback mỗi khi component re-render
                                        <br />- Gọi callback sau khi component thêm element vào DOM.
                                    </li>
                                    <li>
                                        useEffect(callback , []):
                                        <br />- Chỉ gọi callback 1 lần sau khi component mounted.
                                    </li>
                                    <li>
                                        useEffect(callback, [deps]):
                                        <br />- Callback sẽ được gọi lại mỗi khi deps thay đổi.
                                    </li>
                                </ul>
                            </p>
                        </article>
                    </div>
                </div>
                <div className="content_nav">
                    <ul className="ul_content_nav" style={showGoToTop ? { top: 88, backgroundColor: '#ddd' } : {}}>
                        <li>
                            <Link to="/">Learn Javascript</Link>
                        </li>
                        <li>
                            <Link to="/">Learn Frontend</Link>
                        </li>
                        <li>
                            <Link to="/">Learn Reactjs</Link>
                        </li>
                        <li>
                            <Link to="/">Learn HTML & CSS</Link>
                        </li>
                        <li>
                            <Link to="/">Learn TypeScript</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Calculator;
