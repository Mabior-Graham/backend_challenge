// assets
import { IconBrandChrome, IconHelp} from '@tabler/icons';
// constant
import { Login } from 'tabler-icons-react';
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sign Up',
            type: 'item',
            url: '/register',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        }
    ]
};

export default other;
