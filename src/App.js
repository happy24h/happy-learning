import Header from './layouts/components/Header';
import Sidebar from './layouts/components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes/router';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Sidebar />
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
