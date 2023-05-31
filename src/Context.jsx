
import { useState, useEffect, createContext } from "react";


export const Context = createContext();


export const Provider = ({ children }) => {

    const [pizzas, setPizzas] = useState([]);
    const [prevCarrito, setPrevCarrito] = useState([]);

    const endpoint = "/pizzas.json"

    const getPizzas = async () => {
        const res = await fetch(endpoint);
        const data = await res.json();

        setPizzas(data);
    }
    console.log(pizzas);

    useEffect(() => {
        getPizzas();

    }, []);


    const globalState = { pizzas, prevCarrito, setPrevCarrito }

    return <Context.Provider value={globalState}>
        {children}
    </Context.Provider>;
};
