import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ShoppingCart } from "./components/shoppingCart/ShoppingCart";

// import About from "./pages/About";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <ShoppingCart />
    </ShoppingCartProvider>
  );
}

export default App;
