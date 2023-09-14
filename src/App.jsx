import { useState } from 'react'
import './App.css'
import { Blogs } from './components/blogs/Blogs'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks = blog => {
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  }

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const remainingBookMarks = bookMarks.filter(elment=>elment.id !== id);
    setBookMarks(remainingBookMarks);
  }

  return (
    <>

      <header className=' bg-slate-200'>
        <section className='max-w-6xl mx-auto px-5'>
          <Header />
        </section>
      </header>

      <main className='bg-slate-100' >
        <div className='max-w-6xl mx-auto px-5 md:flex py-12 gap-10'>
          <section className='md:w-2/3'>
            <Blogs handleBookMarks={handleBookMarks} handleMarkAsRead={handleMarkAsRead} />
          </section>
          <aside className='md:w-1/3'>
            <Sidebar bookMarks={bookMarks} readingTime={readingTime} />
          </aside>
        </div>
      </main>

      <footer className='bg-slate-500'>
        <div className='max-w-6xl mx-auto px-5'>
          <Footer />
        </div>
      </footer>
    </>
  )
}

export default App
