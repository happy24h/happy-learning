import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.changeLayout) {
                            Layout = route.changeLayout;
                        } else if (route.changeLayout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;
