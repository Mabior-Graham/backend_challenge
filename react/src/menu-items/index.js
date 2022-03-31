import dashboard from './dashboard';
import dashboardauth from './Dashboardauth';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import Viewpro from './viewpro';

// ==============================|| MENU ITEMS ||============================== //
var menuItems;
const user = localStorage.getItem("user");

if (user) {
    menuItems = {

        items: [dashboardauth, Viewpro]
       
    }
}else{
    menuItems = {

        items: [dashboard, other]
       
    }
}

export default menuItems;
