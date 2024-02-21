import { Link, NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import './Navbar.css'

export default function Navbar() {
    return(
        <header>
            <nav>
            <Link to= "/" className="logo">
                <img width={70} src="../img/logoArianaBlanco.jpg" className="logo"/>
            </Link>
                <NavLink to="/categoria/collares" className="link">Collares</NavLink>
                <NavLink to="/categoria/anillos" className="link">Anillos</NavLink>
                <NavLink to="/categoria/bolsos" className="link">Bolsos</NavLink>
                <Link to= "/carrito" className="carrito">
                    <FaShoppingCart/>
                </Link>
            </nav>

        </header>
    )
}