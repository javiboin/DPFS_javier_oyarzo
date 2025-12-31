import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const LastProduct = () => {
    const url = 'http://127.0.0.1:3000/api/products/last-product'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET');
    }, [])


    return (
        <>
            <h2>Último producto o usuario creado</h2>
            { isLoading 
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <>
                        <p>{data.name}</p>
                        <p>
                            Creado el {new Date(data.createdAt).toLocaleDateString('es-ES')} a las{' '}
                            {new Date(data.createdAt).toLocaleTimeString('es-ES', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </p>
                    </>
            } 
        </>
    )
}
