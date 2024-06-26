import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
