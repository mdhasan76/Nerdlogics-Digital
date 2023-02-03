import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav';

const DashboardLayout = () => {
    return (
        <section>
            {/* <DashboardNav/> */}
            <button className="btn">Button</button>
<button className="btn btn-primary">Button</button>
<button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button>
            <Outlet/>
        </section>
    );
};

export default DashboardLayout;