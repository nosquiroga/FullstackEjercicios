import React from  'react';
import CommentList from './CommentList';

const Product = ({name, price, desc, reviews}) => (
    <div className="row">
        <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
                <a href="#" className="list-group-item active">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
            </div>
        </div>
        <div className="col-md-9">
            <div className="thumbnail">
                <img className="img-responsive" src="http://placehold.it/800x300" alt="" />
                <div className="caption-full">
                    <h4 className="pull-right">{price}</h4>
                    <h4><a href="#">{name}</a></h4>
                    <p>See more snippets like these online store reviews at <a href="http://bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                    <p>Want to make these reviews work? Check out
                    <strong><a href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/"> this building a review system tutorial</a>
                    </strong> over at maxoffsky.com!</p>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="ratings">
                <p className="pull-right">3 reviews</p>
                <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                    4.0 stars
                </p>
            </div>
            <CommentList comments={reviews} />
        </div>
    </div>
);

export default Product;