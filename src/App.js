import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes/router';

function App() {
    return (
        <Router>
            <div className="App">
                <DefaultLayout />
                <Routes>
                    {publicRouters.map((route, index) => {
                        return <Route key={index} path={route.path} element={<route.component />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
