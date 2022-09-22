import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Plans from "./pages/plans/Plans"
import Gallery from "./pages/gallery/Gallery"
import Notfound from "./pages/Notfound/NotFound"
import Trainers from "./pages/trainers/Trainers"
import About from './pages/about/About'
import Navbar from './components/Navbar'







const App = ()=> {
  return (
   
   
   <div>  
<BrowserRouter>
<Navbar/>
<Routes>
<Route index element ={ <Home/>}/>
<Route path="about" element={<About/>}/> 
<Route path="contact" element={<Contact/>}/> 
<Route path="gallery" element={<Gallery/>}/> 
<Route path="plans" element={<Plans/>}/> 
<Route path="trainers" element={<Trainers/>}/> 
<Route path="*" element={<Notfound/>}/> 


</Routes>
</BrowserRouter>
    </div>
  )
}

export default App