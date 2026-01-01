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
            { isLoading 
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <>
                        <div className="group lastCreated">
                            <h2 className="title">Último usuario creado</h2>
                            <div className="item">
                                <span className="name">{data.firstname} {data.lastname} - Email: {data.email}</span>
                                <span className="count">
                                    Creado el {new Date(data.createdAt).toLocaleDateString('es-ES')} a las{' '}
                                    {new Date(data.createdAt).toLocaleTimeString('es-ES', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </span>
                            </div>
                        </div>
                    </>
            } 
        </>
    )
}
