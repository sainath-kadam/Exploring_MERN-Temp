import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;



