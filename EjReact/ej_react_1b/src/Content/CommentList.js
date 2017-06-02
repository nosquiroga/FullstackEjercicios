import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => (
    <div className="well">
        <div className="text-right">
            <a className="btn btn-success">Leave a Review</a>
        </div>
        <hr />
        {comments.map(item => <Comment {... item} />)}
    </div>
);

export default CommentList;