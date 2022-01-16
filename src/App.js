import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { ColorPicker, useColor } from "react-color-palette";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Header from './components/Home';
import Nav from './components/Nav';
import Project from './components/Project';
import "./App.css";

313638


function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Header />
      <Footer />
    </div>
    <Routes>
    <Route path="/"component={Nav} exact />
    <Route path="/about"component={About} />
    <Route path="/project"component={Project} />
    <Route path="/contact"component={Contact} />
    <Route path="/resume"component={Resume} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;