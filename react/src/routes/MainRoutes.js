import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Editproducts from 'views/dashboard/Default/editproducts';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const Register = Loadable(lazy(() => import('views/pages/authentication/auth-forms/AuthRegister')));
const Addproduct = Loadable(lazy(() => import('views/dashboard/Default/addproducts')));
const Viewproducts = Loadable(lazy(() => import('views/dashboard/Default/viewproducts')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/login',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/dashboard',
            element: <Viewproducts />
        },
        {
            path: '/addproduct',
            element: <Addproduct />
        },
        {
            path: '/viewproducts',
            element: <Viewproducts />
        },
        {
            path: `/edit/:id`,
            element: <Editproducts />
        }

        
    ]
};

export default MainRoutes;
