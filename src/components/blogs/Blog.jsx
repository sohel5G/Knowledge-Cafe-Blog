import PropTypes from 'prop-types';
import { BsBookmarks } from 'react-icons/bs';

function Blog({ blog, handleBookMarks, handleMarkAsRead }) {

    const { cover, title, author_img, author, posted_date, reading_time, hashtags, id } = blog;

    return (
        <article className='mb-6 shadow rounded'>
            <img className='w-full' src={cover} alt="Post Cover Photo" />
            <div className='px-7 pb-7'>
                <div className='flex justify-between py-3 items-center'>
                    <div className='flex gap-3'>
                        <div>
                            <img width='50px' src={author_img} alt="Author image" />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold'>{author}</h2>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center justify-between'>
                        <div>{reading_time}  min read</div>
                        <button onClick={() => handleBookMarks(blog)}> <BsBookmarks /> </button>
                    </div>
                </div>
                <h1 className="text-2xl font-bold my-3 leading-10"> {title} </h1>
                <p>
                    {
                        hashtags.map((element, index) => <a key={index} className='pr-3 hover:text-red-600 text-lg text-gray-600' href='#'> #{element} </a>)
                    }
                </p>
                <button className='text-[#6047EC] mt-5 font-semibold' onClick={() => handleMarkAsRead(reading_time, id)}>Mark as read</button>
            </div>
        </article>
    )
}

export { Blog }

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

