import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Not from './pages/not/Not'
import Navbar from '../Components/Navbar'

const App=()=> {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Shop/>
      <Contact/>
      <About/>
      <Not/>

    </BrowserRouter>
  )
}

export default App