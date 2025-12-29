-- OBTENER LA CANTIDAD DE PRODUCTOS POR CATEGORIA
SELECT 
	category.name AS Categoría, 
	COUNT(distinct product_id) AS Cantidad
FROM product 
JOIN 
	subcategory ON subcategory.subcategory_id = product.subcategory_id
JOIN 
	category ON category.category_id = subcategory.category_id
GROUP BY  
	category.category_id, category.name
ORDER BY 
    cantidad DESC;
    
-- OBTENER CANTIDAD DE PRODUCTOS POR SUBCATEGORIA
SELECT 
    category.name AS Categoría,
    subcategory.name AS Subcategoría, 
    COUNT(distinct product_id) AS Cantidad
FROM product 
JOIN 
	subcategory ON subcategory.subcategory_id = product.subcategory_id
JOIN 
	category ON category.category_id = subcategory.category_id
GROUP BY 
	subcategory.subcategory_id, subcategory.name
ORDER BY Categoría ASC, Subcategoría ASC;