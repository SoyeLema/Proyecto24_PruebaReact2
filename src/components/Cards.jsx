import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "../assets/cards.css"

export default function Cards() {

    const { pizzas, prevCarrito, setPrevCarrito } = useContext(Context);
    const navigate = useNavigate();

    const verDetalle = (e) => {
        navigate(`/pizza/${e.target.id}`)
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

        console.log("este es el total:" + (total))
    }

    return (
        <div className="galeria grid-columns-3 p-3">
            {pizzas.map((pizza) => {
                return (
                    <Card key={pizza.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pizza.img} />
                        <Card.Body>
                            <Card.Title className="titles">{pizza.name}</Card.Title>
                            <hr />
                            <dl>
                                <dt>Ingredientes:</dt>
                                <br />
                                {pizza.ingredients.map((ing) => {
                                    return (
                                        <dd key={ing}>🍕{ing[0].toUpperCase() + ing.substring(1)}</dd>
                                    )
                                })}
                            </dl>
                            <hr />
                            <Card.Text className="prices">
                                <strong> $ {pizza.price.toLocaleString()} </strong>
                            </Card.Text>
                            <div className="botones">
                                <Button className="bVermas" onClick={verDetalle} id={pizza.id} variant="info">Ver Más 👀</Button>
                                <Button className="bAdd" onClick={() => agregarAlCarrito(pizza)} id={pizza.id} variant="danger">Añadir 🛒</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>
    )
}