import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
import Servises from './Component/Servises';
import Contact from './Component/Contact';
import Charges from './Component/Charges';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Services" element={<Servises />} />
          <Route path="Charges" element={<Charges/>}/>
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;







