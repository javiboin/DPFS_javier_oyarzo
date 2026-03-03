import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export const GetProducts = () => {
    const url = 'http://127.0.0.1:3000/api/products'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET');
    }, [])

    return (
        <>
            { isLoading 
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <div className="list-products">
                        {data?.cantidad_de_productos > 0 ? (
                            <div className="group">
                            <h2 className="title">Listado de Productos</h2>
                                <ul className="list">
                                    {data.productos.map((product, index) => (
                                        <li key={index} className="item">
                                            <span className="name">{product.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>No hay productos disponibles.</p>
                        )}
                    </div>
                } 
            
        </>
    )
}
