import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Shows from './components/Shows';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shows' element={<Shows />} />
      </Routes>
    <Footer />
    </div>
    
   
    
    
  </>);
}

export default App;
