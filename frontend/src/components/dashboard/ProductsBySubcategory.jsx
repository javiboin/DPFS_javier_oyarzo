import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export const ProductsBySubcategory = () => {
    const url = 'http://127.0.0.1:3002/api/products/by-subcategory'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET');
    }, [])

    const groupByCategory = (subcategories) => {
        return subcategories.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});
    };

    return (
        <>
            {isLoading
                ? <h4>Cargando...</h4>
                : error
                    ? <h4>Ha ocurrido un error: {error}</h4>
                    :
                    <>
                        {data?.cantidad_de_productos_por_subcategoria?.length > 0 ? (
                            <div className="container">
                                {Object.entries(groupByCategory(data.cantidad_de_productos_por_subcategoria)).map(([category, subcategories]) => (
                                    <div key={category} className="group">
                                        <h3 className="title">{category}</h3>
                                        <ul className="list">
                                            {subcategories.map((subcategory, index) => (
                                                <li key={index} className="item">
                                                    <span className="name">{subcategory.subcategory}:</span>
                                                    <span className="count"> {subcategory.count}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No hay subcategorías disponibles</p>
                        )}
                    </>
            }
        </>
    )
}