import PropTypes from 'prop-types';

function Blog({ blog }) {

    console.log(blog)

    const { cover, title } = blog;

    return (
        <>
            <img src={cover} alt="Post Cover Photo" />
            <h1 className="text-3xl font-bold"> {title} </h1>
        </>
    )
}

export { Blog }

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

