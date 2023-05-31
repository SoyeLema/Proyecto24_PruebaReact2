import { useContext } from "react";
import { Context } from "../Context";

import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from "../components/Banner";
import Cards from "../components/Cards";

export default function Home() {

    const { pizzas, getPizzas } = useContext(Context);

    return (
        <div>
            <Banner />
            <div className="pizzass grid-columns-5 p-3">
                <Cards />
            </div>
        </div>
    )
}
