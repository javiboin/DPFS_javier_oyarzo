import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

export const LastUser = () => {
    const url = 'http://127.0.0.1:3000/api/users/last-user'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET');
    }, [])


    return (
        <>
            <h2>Último usuario creado</h2>
            { isLoading 
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <>
                        <p>{data.firstname}</p>
                        <p>{data.lastname}</p>
                        <p>{data.email}</p>
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
