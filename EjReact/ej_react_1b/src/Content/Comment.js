import React from 'react';

const Comment = ({usr, time, text}) => (
    <div className="row">
        <div className="col-md-12">
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star-empty"></span>
            {usr}
            <span className="pull-right">{time}</span>
            <p>{text}</p>
        </div>
    </div>
);

export default Comment;