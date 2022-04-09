import React from "react";
import { Link } from "react-router-dom";
const BlogCard = ({ image, heading, id }) => {
    return (
        <div className="blogcard">
            <div className="blogimg">
                <img src={image} />
            </div>
            <div className="blogheading">
                <Link to={`/blog/${id}`}>{heading}</Link>
            </div>
        </div>
    );
};

export default BlogCard;
