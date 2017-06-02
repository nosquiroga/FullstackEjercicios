import React from 'react';
import FeatureItem from './FeatureItem'

const FeatureList = ({data}) => (
    <div className="row text-center">
        {data.map(item => <FeatureItem {... item} />)}
    </div>
);

export default FeatureList;