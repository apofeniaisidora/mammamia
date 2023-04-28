import { useContext, createContext, useState, useEffect } from "react";

export const PizzasContext = createContext();

export default function PizzasProvider({ children }) {
  const [pizzas, setPizzas] = useState(null);

  const getPizzas = async () => {
    const res = await fetch("./pizzas.json");
    const data = await res.json();
    setPizzas(data);
  };
  useEffect(() => {
    getPizzas();
  }, []);

  if (!pizzas) return <h1>Cargando...</h1>;

  return (
    <PizzasContext.Provider value={{ pizzas }}>
      {children}
    </PizzasContext.Provider>
  );
}

export const usePizzasContext = () => useContext(PizzasContext);
