import { useEffect, useState } from "react";

export const LastProduct = () => {
    const urlBase = 'http://127.0.0.1:3000/api/products/last-product'
    const [items, setItems] = useState([]);

    const fetchLastProduct = async () => {
        try {
            const res = await fetch(urlBase)
            const data = await res.json()
            setItems(data)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        fetchLastProduct();
    }, [])


    return (
        <>
            <h2>Último producto o usuario creado</h2>
            <p>{items.name}</p>
            <p>{items.createdAt}</p>
        </>
    )
}
