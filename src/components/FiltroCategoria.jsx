import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
const API='https://dummyjson.com/products/categories'

const FiltroCategoria = () => {
    const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
    const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
    const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            const data = await response.json();
            setDatos(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p>Cargando Productos...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Productos</h4>
                <p>{error}</p>
            </div>
        );
    }
  return (
    <>{datos.map((item, index)=>(
        <li>
            <Link to={`/categorias/${item.slug}/${item.name}`} key={index} className="dropdown-item" href="#">
                {item.name}
            </Link>
        </li>
    ))}
        
    </>
  )
}

export default FiltroCategoria