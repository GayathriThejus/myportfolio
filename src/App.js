import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Projects from "./components/Projects";
// import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">
   
   {/* <Navbar/> */}
   <Hero/>
 
   <Aboutme/>
   <Experience/>
   <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
