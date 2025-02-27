import { BrowserRouter } from "react-router-dom";
import About  from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <About />
          <Experience />
          <Works />
        </div>
        <div className='relative z-0'>
          <StarsCanvas />
          <Contact />
          <Tech />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
