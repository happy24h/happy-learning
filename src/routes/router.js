import config from '~/config';
import Home from '~/pages/Home';
import Blog from '~/pages/Blog';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.blog, component: Blog },
];

const privateRoutes = [];

export { publicRouters, privateRoutes };
