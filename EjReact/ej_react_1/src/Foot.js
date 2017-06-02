import React from 'react';

const Foot = ({ text }) => (
    <footer>
        <div className="row">
            <div className="col-lg-12">
                <p>{ text }</p>
            </div>
        </div>
    </footer>
);

export default Foot;