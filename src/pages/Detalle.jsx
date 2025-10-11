import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const API='https://dummyjson.com/products/'

const Detalle = () => {

    const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
    const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
    const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
    const param=useParams()
    const URI=API+param.id
    const navigate = useNavigate()

    const getDatos = async () => {
        try {
            const response = await fetch(URI);
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
    <div className="container">
        <div className="pt-5 text-end">
            <button onClick={() => navigate(-1)} className="btn btn-secondary btn-sm">
                Regresar
            </button>
        </div>
        <h4 className="text-center py-4">{param.nombre}</h4>
        <div className="row">
            <div className="col-md-4">
                <img src={datos.thumbnail} alt={datos.title} className="img-fluid"/>
            </div>
            <div className="col-md-8">
                <h3>{datos.title}</h3>
                <p>
                    <b>Marca:</b> {datos.brand}<br/>
                    <b>Categoria:</b> {datos.category}<br/>
                    <b>Codigo:</b> {datos.sku}<br/>
                    <b>Stock:</b> {datos.stock}<br/>
                </p>
                <p>{datos.description}</p>
                <h4>Precio: {datos.price}</h4>
            </div>
        </div>
    </div>
  )
}

export default Detalle