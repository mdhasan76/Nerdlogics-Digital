import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DrawerMenu from '../components/DrawerMenu';
// import DashboardNav from '../components/DashboardNav';

const DashboardLayout = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <DrawerMenu/>
            </div>
        </div>
    );
};

export default DashboardLayout;