import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly';

import Home from '~/pages/Home';
import Blog from '~/pages/Blog';
import Learn from '~/pages/Learn';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Library from '~/pages/Library';
import LifeSkills from '~/pages/LifeSkills';

// System
import TableUser from '~/pages/System/Manage/TableUser';
import ManageRedux from '~/pages/System/ManageRedux/TableUser';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.library, component: Library },
    { path: config.routes.lifeSkills, component: LifeSkills },
    { path: config.routes.learn, component: Learn, changeLayout: HeaderOnly },
    { path: config.routes.login, component: Login, changeLayout: null },
    { path: config.routes.register, component: Register, changeLayout: null },
];

const privateRoutes = [
    { path: config.routes.TableUser, component: TableUser },
    { path: config.routes.manageRedux, component: ManageRedux },
];

export { publicRouters, privateRoutes };
