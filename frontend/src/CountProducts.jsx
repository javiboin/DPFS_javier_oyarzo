import { useEffect, useState } from "react";

export const CountProducts = () => {
    const urlBase = 'http://127.0.0.1:3000/api/products'
        const [items, setItems] = useState([]);
    
        const fetchProducts = async () => {
            try {
                const res = await fetch(urlBase)
                const data = await res.json()
                setItems(data)
            } catch (error) {
                console.error('Error:', error)
            }
        }
    
        useEffect(() => {
            fetchProducts();
        }, [])

    return (
        <>
            <h2>Total de Productos</h2>
            <p>{items.cantidad_de_productos} productos encontrados</p>
            <h2>Total de Categorías</h2>
            <p>{items.cantidad_de_productos_por_categoria?.length || 0} categorías encontradas</p>
            <h2>Total de Subcategorías</h2>
            <p>{items.cantidad_de_productos_por_subcategoria?.length || 0} subcategorías encontradas</p>
            <h2>Total de Marcas</h2>
            <p>{items.cantidad_de_marcas || 0} marcas encontradas</p>
        </>
    )
}
