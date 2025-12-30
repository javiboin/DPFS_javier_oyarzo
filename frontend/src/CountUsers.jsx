import { useEffect, useState } from "react";

export const CountUsers = () => {
    const urlBase = 'http://127.0.0.1:3000/api/users'

    const [items, setItems] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await fetch(urlBase)
            const data = await res.json()
            setItems(data)
        } catch (error) {
            console.error('Error:', error)
        }
    }
    
    useEffect(() => {
        fetchUsers()
    }, [])

  
    return (
        <>
            <h2>Total de Usuarios</h2>
            <p>{items.count} usuarios encontrados</p>
        </>
    )
}
