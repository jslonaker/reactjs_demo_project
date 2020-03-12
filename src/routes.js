import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Customers from "views/Customers/Customers.js";
import PackageManager from "views/PackageManager/PackageManager.js";
import FetchConnectApi from "views/ApiDataView/ApiDataView.js";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/apidataview",
    name: "Reddit API",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: FetchConnectApi,
    layout: "/admin"
  }
];

export default dashboardRoutes;
