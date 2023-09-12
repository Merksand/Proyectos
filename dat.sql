--SELECT Price as Precio,Price*2 as Precio_Doble from Products;
--SELECT sum(price) as Precio_total from Products;
-- null ,numeros ,caracteres especiales, letras   (ORDEN DE ASC) para sqlite
--SELECT * from Products ORDER BY ISNULL(ProductName,'zzz') desc --Ordenar los null hacia donde uno quiera de acuerdo a la letra insertada
--SELECT * from Products ORDER BY newid() --Numero aleatorio de orden newid
--SELECT * from Products ORDER BY CategoryID,ProductID --Ordena los null primero el campo pa agarra y luego el ordenar
--SELECT DISTINCT ProductName from Products --Para aparezcan los resultados sin repetirse
--SELECT * FROM Products WHERE ProductName = 'Gula Malacca'
SELECT * FROM Products



