import Card from "../components/Card";
import { usePizzasContext } from "../context/PizzasContext";

export default function Pizzas() {
  const { pizzas } = usePizzasContext()

  return (
    <div >
      <br/>
      <h1>Conoce nuestras pizzas!</h1>
      <br/>
      <div className="row">
        {
          pizzas.map((item) => {
            return (
              <Card key={item.id} item={item} />
            )
          })}
      </div>
    </div>
  );
}