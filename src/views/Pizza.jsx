import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../Context";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../assets/pizza.css"

export default function Pizza() {

    const { pizzas, prevCarrito, setPrevCarrito, total, setTotal } = useContext(Context)

    const [chosenPizza, setChosenPizza] = useState();

    const params = useParams();
    const navigate = useNavigate();

    const getChosenPizza = () => {
        return setChosenPizza(pizzas.filter((item) => item.id === params.id));
    };

    const volverInicio = (e) => {
        navigate("/")
    }

    const agregarAlCarrito = ({ id, price, name, img }) => {
        const itemPizza = pizzas.find((item) => item.id === id);
        const index = prevCarrito.findIndex((item) => item.id === id)
        const producto = { id, price, name, img, count: 1 };

        if (index >= 0) {
            prevCarrito[index].count++;
            setPrevCarrito([...prevCarrito]);

        } else {
            setPrevCarrito([...prevCarrito, producto]);

        }

        setTotal(
            prevCarrito.reduce((a, { price, count }) =>
                a + price * count
                , 0)
        );

        console.log("este es el total:" + (total))
    }

    useEffect(() => {
        getChosenPizza();
    }, []);

    console.log(chosenPizza);


    return (
        <div>
            {chosenPizza ? (
                <Card className="container">
                    <div >
                        <img className="imgContainer" src={chosenPizza[0].img} alt="" />
                    </div>
                    <Card.Body>
                        <Card.Title className="titleP"><h2>{chosenPizza[0].name}</h2></Card.Title>
                        <Card.Text>
                            {chosenPizza[0].desc}
                        </Card.Text>
                        <hr />
                        <dl>
                            <dt>Ingredientes:</dt>
                            <br />
                            {chosenPizza[0].ingredients.map((ing) => {
                                return (
                                    <dd key={ing}>🍕{ing[0].toUpperCase() + ing.substring(1)}</dd>
                                )
                            })}
                        </dl>
                        <hr />
                        <div className="bottom">
                            <h3>Precio: ${chosenPizza[0].price}</h3>
                            <Button className="bAdd" onClick={() => agregarAlCarrito(chosenPizza[0])} id={chosenPizza[0].id} variant="danger">Añadir 🛒</Button>
                        </div>
                    </Card.Body>
                </Card>
            ) : null}
        </div>
    )
}