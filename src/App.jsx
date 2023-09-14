import './App.css'
import { Blogs } from './components/blogs/Blogs'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'

function App() {

  return (
    <>

      <header className=' bg-slate-200'>
        <section className='container mx-auto px-5'>
          <Header />
        </section>
      </header>

      <main className='bg-slate-100' >
        <div className='container mx-auto px-5 flex'>
          <section className='w-2/3'>
            <Blogs />
          </section>
          <aside className='w-1/3'>
            <Sidebar />
          </aside>
        </div>
      </main>

      <footer className='bg-slate-500'>
        <div className='container mx-auto px-5'>
          <Footer />
        </div>
      </footer>
    </>
  )
}

export default App
