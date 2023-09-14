import { useEffect } from "react";
import { useState } from "react";
import { Blog } from "./Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
       <>

            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} /> )
            }
       
       </>
    );
};

export { Blogs };

