import { Link } from "react-router-dom";
import BuyButton from "./BuyButton";


export default function Card(pizza) {



  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img
          src={pizza.item.img}
          className="card-img-top"
          alt="card description"
        />
        <div className="card-body">
          <h2>
            <b>{pizza.item.name[0].toUpperCase()}{pizza.item.name.substring(1)}</b>
          </h2>
          <h6>Ingredientes</h6>
          <ul>
            {pizza.item.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h5>
            <b>Precio: ${pizza.item.price}</b>
          </h5>
          <div className="d-flex gap-2">
            <BuyButton pizza={pizza.item} />
            <Link
              to={`/pizzas/${pizza.item.id}`}
              className="btn btn-outline-danger"
            >

              Ver detalles
            </Link>

          </div>
        </div>
      </div>
    </article>
  );
}