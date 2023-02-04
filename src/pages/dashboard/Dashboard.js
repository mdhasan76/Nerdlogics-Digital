import React from 'react';
import InfluencerDetails from '../../components/InfluencerDetails';
import InfluencerList from '../../components/InfluencerList';

const Dashboard = () => {
    return (
        <section>
            <InfluencerList/>
            
            {/* Influencer dtails Modal  */}
            <InfluencerDetails/>
        </section>
    );
};

export default Dashboard;