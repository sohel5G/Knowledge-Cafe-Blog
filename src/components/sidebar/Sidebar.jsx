import PropTypes from 'prop-types';

function Sidebar({ bookMarks, readingTime }) {
    return (
        <>
            <div className="p-4 border-2 border-[#6047EC] bg-blue-100 rounded-md">
                <h1 className='text-[#6047EC] font-bold text-xl'>Spent time on read : {readingTime} min</h1>
            </div>
            <div className="bg-gray-200 p-5 rounded mt-7">
                <h1 className='font-bold text-xl'>Bookmarked Blogs : {bookMarks.length}</h1>
                {
                    bookMarks.map((element, index) => <h1 className='my-4 text-base leading-7 bg-white py-4 px-4 font-semibold rounded' key={index}>{element.title}</h1>)
                }
            </div>
        </>
    )
}

export { Sidebar }

Sidebar.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

