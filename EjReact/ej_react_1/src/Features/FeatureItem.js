import React from 'react';

const FeatureItem = ({ title, body }) => (
    <div className="col-md-3 col-sm-6 hero-feature">
        <div className="thumbnail">
            <img src="http://placehold.it/800x500" alt="" />
            <div className="caption">
                <h3>{ title }</h3>
                <p>{ body }</p>
                <p>
                    <a href="#" className="btn btn-primary">Buy Now!</a> <a href="#" className="btn btn-default">More Info</a>
                </p>
            </div>
        </div>
    </div>
);

export default FeatureItem;