import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

export const CountProductsBySubcategory = () => {
    const url = 'http://127.0.0.1:3000/api/products/by-subcategory'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET');
    }, [])

    return (
        <>
            <h2>Total de Subcategorías</h2>
            { isLoading 
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <p>{data.cantidad_de_productos_por_subcategoria?.length || 0} subcategorías encontradas</p>
                }
        </>
    )
}