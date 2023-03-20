import {Route, Routes} from "react-router-dom"
import Contact from './Routes/Contact';
import Services from './Routes/Services';
import About from './Routes/About';
import Home from './Routes/Home';

function App() {
  return (
    
      <div className="App">

        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/about" element = {<About/>}/>
          <Route path ="/services" element = {<Services/>}/>
          <Route path ="/contact" element = {<Contact/>}/>

        </Routes>
       
    </div>
  );
}

export default App;
