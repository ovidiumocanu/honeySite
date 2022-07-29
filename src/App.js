import "./App.css";
import LandingPage from "./components/landingpage/Landing-Page";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/footer";
import AboutUs from "./components/aboutpage/AboutUs";
import Contact from "./components/contactpage/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route index element={<LandingPage />} />
          {/* <Route path='/products' element={<Products/>}/> */}
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
