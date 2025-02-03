import './App.css'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Achievemensts from './Components/Achievements'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Projects from './Components/Projects'

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <Home/>
      <About/>
      <Achievemensts/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
