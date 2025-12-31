import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

export const GetProducts = () => {
    const url = 'http://127.0.0.1:3000/api/products'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET');
    }, [])

    return (
        <>
            <h2>Listado de Productos</h2>
            { isLoading 
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.productos.map(product => {
                                        return (
                                            <tr key={product.id}>
                                                <th scope="row">{product.id}</th>
                                                <td>{product.name}</td>
                                            </tr>  
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </>
                } 
            
        </>
    )
}
