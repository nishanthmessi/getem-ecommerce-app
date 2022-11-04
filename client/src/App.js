import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartProvider from "./context/CartContext";
import Navbar2 from './components/Navbar';

const App = () => {
  return (
    <> 
      <CartProvider> 
        <BrowserRouter>
          <div className="select-none">
            <Navbar/>
            <Routes>
              <Route index element={<Store/>}/>
              <Route path="/success" element={<Success/>}/>
              <Route path="/cancel" element={<Cancel/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;