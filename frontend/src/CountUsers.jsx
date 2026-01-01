import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

export const CountUsers = () => {
    const url = 'http://127.0.0.1:3000/api/users'

    const { data, isLoading, error, fetchData } = useFetch()
    
    useEffect(() => {
        fetchData(url, 'GET')
    }, [])

  
    return (
        <> 
            { isLoading 
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <div className="group">
                        <h2 className="title">Total de Usuarios</h2>
                        <div className="item">
                            <span className="name">Usuarios encontrados</span>
                            <span className="count">{data.count}</span>
                        </div>
                    </div>
            } 
        </>
    )
}
