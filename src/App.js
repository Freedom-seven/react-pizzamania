import Navbar from './Component/Navbar/Navbar'
import Carousel from './Component/Carousel/Carousel'
import About from './Component/About/About'
import PizzaTypes from './Component/PizzaTypes/PizzaTypes'
import './App.css';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <About/>
      <PizzaTypes title={"Our Pizza Types"}/>
      <Footer/>
    </>
  );
}

export default App;
