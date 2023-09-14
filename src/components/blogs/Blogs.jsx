import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h1>This is boog page</h1>
            {console.log(blogs)}
        </div>
    );
};

export { Blogs };

