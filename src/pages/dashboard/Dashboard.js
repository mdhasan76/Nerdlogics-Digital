import React from 'react';
import EditInfluencer from '../../components/EditInfluencer';
import InfluencerDetails from '../../components/InfluencerDetails';
import InfluencerList from '../../components/InfluencerList';

const Dashboard = () => {
    return (
        <section>
            <InfluencerList/>
            
            {/* Influencer dtails Modal  */}
            <InfluencerDetails/>

            {/* Edit Influencer Modal  */}
            <EditInfluencer/>
        </section>
    );
};

export default Dashboard;