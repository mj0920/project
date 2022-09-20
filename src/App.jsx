import { BrowserRouter, Routes, Route } from "react-router-dom"



import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Plans from "./pages/plans/Plans"
import Gallery from "./pages/gallery/Gallery"
import Notfound from "./pages/Notfound/NotFound"
import Trainers from "./pages/trainers/Trainers"
import About from "./pages/about/About"
import Navbar from "./components/Navbar"







const App = ()=> {
  return (
   
   
   <div>  
<BrowserRouter>
<Navbar/>
<Routes>
<Route path ='index' element ={<Home/>}/>
<Route path ='about' element ={<Contact/>}/>
<Route path ='about' element ={<Gallery/>}/>
<Route path ='about' element ={<Plans />}/>
<Route path ='about' element ={<Trainers/>}/>
<Route path ='about' element ={<Notfound/>}/>


</Routes>



</BrowserRouter>
    </div>
  )
}

export default App