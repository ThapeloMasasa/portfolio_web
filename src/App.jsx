import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience,Hero,Tech, Works, Navbar, StarsCanvas, Feedbacks} from './components/index';



const App = () => {
  
  return (
   <BrowserRouter>
     <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-cover bg-no-repeat big center">
         <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
       <Tech/>
       <Works/>
        <div className="relative z-0">
          <Contact/>
         <StarsCanvas/>
        </div>
    </div>
  </BrowserRouter>
  )
}

export default App
