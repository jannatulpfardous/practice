// import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Carousel from './carousel/Carousel';
import AboutUs from './components/About/AboutUs';
import Footer from './components/Footer/Footer';
import TourDiary from './components/TourDiary/TourDiary';
import Navbar from "./components/navbar/Navbar"
import About from './About/About';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <TourDiary></TourDiary>
      <About></About>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
