import './App.css'
import './style.scss'
import  { Navbar } from './Sections/Navbar/Navbar.jsx'
import  { Hero } from './Sections/Hero/Hero.jsx'
import {HangingIcons} from './Sections/Features/Features.jsx'
import {Footer} from './Sections/Footer/Footer.jsx'
import '../node_modules/.vite/deps/bootstrap_dist_js_bootstrap__bundle__min__js.js'

function App() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
      <HangingIcons></HangingIcons>
      <Footer></Footer>
    </>
  )
}

export default App
