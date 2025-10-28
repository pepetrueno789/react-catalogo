import { useState, useEffect } from "react"
import CardProd from "../components/CardProd";
import { useParams } from "react-router-dom";

const API='https://dummyjson.com/products/category/'


const Categorias = ({carrito, agregarAlCarrito}) => {
    const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
    const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
    const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
    const param = useParams()
    const getDatos = async () => {
        try {
            const URI = API+param.cat
            const response = await fetch(URI);
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            const data = await response.json();
            setDatos(data.products);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getDatos();
    }, [param.cat]);
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
    <div className="container">
        <h3 className="text-center py-4">
            Productos de la Categoria {param.nombre} ({datos.length})
        </h3>
        <div className="row justify-content-center">
            {datos.map((item, index)=>(
                <CardProd key={index} item={item} carrito={carrito} agregarAlCarrito={agregarAlCarrito}/>
                
            ))}
        </div>
    </div>
  )
}

export default Categorias