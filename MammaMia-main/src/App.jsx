import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Navbar from "./assets/components/NavBar";
import Pizza from "./assets/pages/Pizza";
import Pizzas from "./assets/pages/Pizzas";
import Cart from "./assets/pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/*" element={<h1>404 Error, page not found</h1>} />
        </Routes>
      </main>
    </div>
  );
}
