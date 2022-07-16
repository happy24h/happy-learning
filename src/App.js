import Header from './layouts/components/Header/Header';
import Sidebar from './layouts/components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
