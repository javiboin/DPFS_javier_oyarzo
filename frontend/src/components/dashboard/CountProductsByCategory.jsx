import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export const CountProductsByCategory = () => {
    const url = 'http://127.0.0.1:3002/api/products/by-category'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET');
    }, [])

    return (
        <>
            {isLoading
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <div className="group">
                        <h2 className="title">Total de Productos</h2>
                        <div className="item">
                            <span className="name">Categorías encontradas</span>
                            <span className="count">{data.cantidad_de_productos_por_categoria?.length || 0}</span>
                        </div>
                    </div>
            }

        </>
    )
}