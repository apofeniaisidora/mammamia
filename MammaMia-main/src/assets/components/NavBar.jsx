import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Navbar() {

  const {suma} = useCartContext()
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
        >
          Mamma Mía 
        </Link>
        <div className="d-flex gap-2">
          <Link
            className="btn btn-outline-light"
            to="/pizzas"
          >
            Pizzas
          </Link>
          <Link
            className="btn btn-outline-light me-2 bg-success"
            to="/cart"
          >
            Carro: ${suma}
          </Link>
        </div>
      </div>
    </nav>
  );
}