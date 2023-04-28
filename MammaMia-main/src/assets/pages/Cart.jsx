import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { suma, cartArray } = useCartContext();

  return (
    <div>
      <h1 className="text-center my-5">Cart</h1>
      <ul className="list-group">
        {cartArray.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <li className="list-group-item list-group-item-action active bg-success text-end">
          <b>Total: ${suma}</b>
        </li>
      </ul>
    </div>
  );
}
