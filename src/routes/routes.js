import AddInfluencer from "../components/AddInfluencer";
import EditInfluencer from "../components/EditInfluencer";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/addinfoencer',
                element: <AddInfluencer/>
            },
            {
                path: '/editinfluencer',
                element: <EditInfluencer/>
            }
        ]
    }
])