import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '~/store/actions/counter';
function Home() {
    const counter = useSelector((state) => state.counterReducer);

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <h3>Counter {counter}</h3>
                <button onClick={() => dispatch(decrement(1))}>Decrement</button>
                <button onClick={() => dispatch(increment(1))}>Increment</button>
            </div>
        </div>
    );
}

export default Home;
