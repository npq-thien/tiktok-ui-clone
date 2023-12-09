import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes';

// Public routes
const publicRoutes = [
    { path: routesConfig.home ,component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.profile, component: Profile }, // Dynamic profile route
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
