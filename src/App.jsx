
import { Link, Navigate, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutSection from './pages/AboutSection'
import GallerySection from './pages/GallerySection'

import FacultySection from './pages/FacultySection'
import ResultPage from './pages/ResultPage'

import ComplaintForm from './pages/ComplaintForm'
import NoticePage from './pages/NoticePage'
import AdminNoticePanel from './components/AdminNoticePanel'
import AdminLogin from './pages/AdminLogin'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import ContactSection from './pages/ContactSection'
import Commitee from './pages/Commitee'
import Achivement from './pages/Achivement'
import Alumni from './pages/Alumni'
import Video from './pages/Video'










function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
    <Navbar/>

    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<AboutSection/>}/>
   <Route path='/gallery' element={<GallerySection/>}/>
   <Route path='/committe' element={<Commitee/>}/>
   <Route path='alumni' element={<Alumni/>} />
   <Route path='/faculty' element={<FacultySection/>}/>
   <Route path='/result' element={<ResultPage/>}/>
   <Route path='/complain' element={<ComplaintForm/>}/>
   <Route path='/contact' element={<ContactSection/>}/>
   <Route path='/notice' element={<NoticePage/>}/>
   <Route path="/admin" element={<AdminLogin />} />
   <Route path="/achivement" element={<Achivement />} />
   <Route path="/video" element={<Video />} />

  <Route
          path="/admin-notice-panel"
          element={user ? <AdminNoticePanel /> : <Navigate to="/admin" replace />} />
   
    </Routes>


    <footer className="bg-emerald-800 text-white py-10 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">D.B.S Inter college</h3>
            <p className="text-sm text-gray-300">
              Empowering young minds through education, discipline, and creativity. Join us in building a bright future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to={"/gallery"} className="hover:text-green-400">Gallery</Link></li>
              <li><Link  to={"/achivement"} className="hover:text-green-400">Achivements</Link></li>
              
              <li><Link  to={"/contact"} className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-sm">Sheesham jhari<br/>Rishikesh, Uttrakhand, 249137</p>
            <p className="text-sm mt-2">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: dbsintercollege@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-10">
          © {new Date().getFullYear()} D.B.S Inter college. All rights reserved.
          <p className='text-[2px] text-gray-500'>Basant bhatt</p>
        </div>
      </footer>
    </div>
  )
}

export default App
