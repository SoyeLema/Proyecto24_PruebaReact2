import { NavLink } from "react-router-dom"

import { useContext } from "react";
import { Context } from "../Context";

import "../assets/navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

    const { total } = useContext(Context)

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")

    return (
        <div className="navbar">
            <div className="links">
                <NavLink className={setActiveClass} to="/">
                    🍕 Pizzería Mamma Mía!
                </NavLink>

                <NavLink className={setActiveClass} to="/Carrito">
                    🛒 Carrito: ${total ? total.toLocaleString() : 0}
                </NavLink>
            </div>
        </div>
    )
}