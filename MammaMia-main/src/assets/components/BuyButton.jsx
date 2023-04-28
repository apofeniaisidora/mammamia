import { Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

export default function BuyButton({ pizza }) {

    const { addCartArray } = useCartContext()

    return (
        <Button variant="outline-success" onClick={() => addCartArray(pizza)} >Comprar</Button>
    )
}