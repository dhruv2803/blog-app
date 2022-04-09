import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Blog = () => {
    const [data, setData] = useState({
        heading: "My blog",
        image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
        des: "snhjufhsajkfnsjfiksjmkj",
    });
    const id = useParams();
    useEffect(() => {
        const getBlog = async () => {
            try {
                console.log(id);
                const baseUrl = `http://localhost:5000/blog/${id.id}`;
                console.log(baseUrl);
                const response = await axios.get(baseUrl);
                console.log(response);
                setData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBlog();
    }, [id]);
    return (
        <div>
            <h1>{data.heading}</h1>
            <img src={data.image} />
            <p>{data.des}</p>
        </div>
    );
};

export default Blog;
