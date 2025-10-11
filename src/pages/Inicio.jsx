import Carrusel from "../components/Carrusel"


const Inicio = () => {
  return (
    <div>
        <Carrusel/>
        <div className="container">
            <h4 className="text-center py-5">Herramientas Utilizadas</h4>
            <div className="row">
                <div className="col-md-6">
                    <p className="text-end">
                        React es una biblioteca de JavaScript utilizada para construir interfaces de usuario tanto en la web como en aplicaciones nativas. Fue desarrollada por Facebook en 2013 y se ha convertido en una de las <span className="text-success fs-4">bibliotecas más populares para el desarrollo de interfaces de usuario.</span>
                    </p>
                    <p className="text-end">
                        Es importante destacar que React no es un framework completo de JavaScript, sino una biblioteca enfocada en la capa de vista de una aplicación. Esto significa que React se puede utilizar junto con otras bibliotecas o frameworks para construir aplicaciones completas.
                    </p>
                    <div clasName="text-end py-3">
                        <a href="" className="btn btn-outline-info btn-sm">Ir a la pagina Oficial</a> 
                    </div>    
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Inicio