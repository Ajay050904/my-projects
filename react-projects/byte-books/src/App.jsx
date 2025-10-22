import { useState } from "react";
import Navbar from "./components/Navbar";
import background2 from "./assets/images/background2.jpg";
import BookCard from "./components/Bookcard";
import "./App.css";
import js1 from "./assets/images/js1.jpg";
import js2 from "./assets/images/js2.jfif";
import js3 from "./assets/images/js3.png";
import java1 from "./assets/images/java1.jfif";
import java2 from "./assets/images/java2.jpg";
import java3 from "./assets/images/java3.jpg";
import java4 from "./assets/images/java4.jpg";
import python1 from "./assets/images/python1.jpg";
import Footer from "./components/Footer";
import logo from './assets/logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar logo={logo} />
      <div className="backgroung-img">
        <img src={background2} alt="back ground image" lassName="logo-icon" />
      </div>
      <div className="bookCards">
        <BookCard img={js1} />
        <BookCard img={js2} />
        <BookCard img={python1} />
        <BookCard img={java1} />
        <BookCard img={java2} />
      </div>
      <div className="bookCards">
        <BookCard img={js3} />
        <BookCard img={java3} />
        <BookCard img={java4} />
        <BookCard img={java2} />
        <BookCard img={python1} />
      </div>
      <Footer />
    </>
  );
}

export default App;
