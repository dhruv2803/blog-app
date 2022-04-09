import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";
const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/allblog/"
                );
                console.log(response);
                setBlogs(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBlogs();
    }, []);
    return (
        <div className="home">
            {blogs?.map((blog) => (
                <BlogCard
                    heading={blog.heading}
                    image={blog.image}
                    id={blog._id}
                />
            ))}
        </div>
    );
};

export default Home;
