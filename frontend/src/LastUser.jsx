import { useEffect, useState } from "react";

export const LastUser = () => {
    const urlBase = 'http://127.0.0.1:3000/api/users/last-user'
    const [items, setItems] = useState([]);

    const fetchLastUser = async () => {
        try {
            const res = await fetch(urlBase)
            const data = await res.json()
            setItems(data)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        fetchLastUser();
    }, [])


    return (
        <>
            <h2>Último usuario creado</h2>
            <p>{items.firstname}</p>
            <p>{items.lastname}</p>
            <p>{items.email}</p>
            <p>{items.createdAt}</p>
        </>
    )
}
