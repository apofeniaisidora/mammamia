import { useNavigate, useParams } from "react-router-dom";
import { usePizzasContext } from "../context/PizzasContext";

import BuyButton from "../components/BuyButton";

export default function Pizza() {

  const { pizzas } = usePizzasContext()

  const params = useParams()
  const navigate = useNavigate()
  if (!pizzas) return <h1>Cargando...</h1>

  return (
    <>
      {pizzas.map((item) => {
        return (
          <div key={item.id}>
            {
              item.id == params.id ?
                <div className="card mb-3 mt-5">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.img}
                        className="img-fluid rounded-start h-100"
                        alt="..."
                      />


                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="fs-1">{item.name[0].toUpperCase()}{item.name.substring(1)}</h5>
                        <p className="card-text">
                          {item.desc}
                        </p>
                        <ul className="card-text">
                          <small className="text-muted">
                            {
                              item.ingredients.map((ingredient) => <li className="listPizzaIngredient" key={ingredient}>{ingredient}</li>
                              )
                            }
                          </small>
                        </ul>
                        <BuyButton pizza={item} />
                        <button className="btn btn-outline-danger ms-2" onClick={() => navigate('/pizzas')}>Volver al menú</button>
                        <h3>Precio: ${item.price}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                : null
            }
          </div>
        )
      }

      )}
    </>
  )
}