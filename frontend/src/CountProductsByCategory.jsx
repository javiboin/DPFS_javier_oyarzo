import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

export const CountProductsByCategory = () => {
    const url = 'http://127.0.0.1:3000/api/products/by-category'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET');
    }, [])

    return (
        <>
            <h2>Total de Categorías</h2>
            { isLoading 
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <p>{data.cantidad_de_productos_por_categoria?.length || 0} categorías encontradas</p>
                } 
            
        </>
    )
}