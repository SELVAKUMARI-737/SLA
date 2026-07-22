import './App.css'
import Navbar from './component/Navbar'
// import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/LoginPage/Login'
import Home from './pages/Home'
import Profilepage from './pages/LoginPage/profilepage'
import Counter from './component/Counter'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/profile' element={<Profile />} /> */}
        <Route path='/profile1' element={<Profilepage />} />
        <Route path='/Counter' element={<Counter />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App