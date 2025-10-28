import { Link, useNavigate } from "react-router-dom"
import FiltroCategoria from "./FiltroCategoria"
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CarritoOfCambas from "./CarritoOfCambas";

const Header = ({carrito, actualizarCantidad, eliminarDelCarrito, vaciarCarrito, enviarPedido}) => {

    const [txtbuscar, setTxtbuscar] = useState('');
    const navigate = useNavigate();
    const manejoTxt = (event) => {
        setTxtbuscar(event.target.value);
        console.log(txtbuscar)
    };
    const manejoEnvio = (event) => {
        event.preventDefault();
        if (!txtbuscar.trim()) {
            alert("Por favor, ingresa un término de búsqueda.");
            return;
        }
        navigate('/busquedas', {
            state: txtbuscar,
        });

    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-menu">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/inicio'} className="nav-link active" aria-current="page" href="#">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/movil'} className="nav-link" href="#">Movil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/laptop'} className="nav-link" href="#">Laptop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/tienda'} className="nav-link" href="#">Tienda</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/tabla'} className="nav-link" href="#">Tabla</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/vehiculo'} className="nav-link" href="#">Vehiculo</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <FiltroCategoria/>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={manejoEnvio}>
                            <input value={txtbuscar} onChange={manejoTxt} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {carrito.length >0 && (
                        <button 
                            className="btn btn-outline-warning me-2" 
                            type="button" data-bs-toggle="offcanvas" 
                            data-bs-target="#offcanvasRight" 
                            aria-controls="offcanvasRight">
                            <div className="d-flex justify-content-between align-items-center gap-2">
                                <FaShoppingCart />  <span className="badge bg-danger m-1">{carrito.length}</span>
                            </div>
                        </button>
                        )}
                    </div>
                </div>
            </nav>
            {carrito.length >0 && (
            <CarritoOfCambas 
                carrito={carrito}
                actualizarCantidad={actualizarCantidad}
                eliminarDelCarrito={eliminarDelCarrito}
                vaciarCarrito={vaciarCarrito}
                enviarPedido={enviarPedido}
            />
            )}
        </>
    )
}

export default Header