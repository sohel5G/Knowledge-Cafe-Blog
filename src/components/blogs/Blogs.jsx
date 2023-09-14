import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import { Blog } from "./Blog";

const Blogs = ({ handleBookMarks, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <>
            {
                blogs.map(blog => <Blog handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead} key={blog.id} blog={blog} />)
            }
        </>
    );
};

export { Blogs };

Blogs.propTypes = {
    handleBookMarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

