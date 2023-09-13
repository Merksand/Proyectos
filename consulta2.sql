SELECT Price as Precio,Price*2 as Precio_Doble from Products;
SELECT sum(price) as Precio_total from Products;
 null ,numeros ,caracteres especiales, letras   (ORDEN DE ASC) --para sqlite
SELECT * from Products ORDER BY ISNULL(ProductName,'zzz') desc --Ordenar los null hacia donde uno quiera de acuerdo a la letra insertada
SELECT * from Products ORDER BY newid() --Numero aleatorio de orden newid
SELECT * from Products ORDER BY CategoryID,ProductID --Ordena los null primero el campo pa agarra y luego el ordenar
SELECT DISTINCT ProductName from Products --Para aparezcan los resultados sin repetirse
SELECT * FROM Products WHERE ProductName = 'Gula Malacca'
SELECT * FROM Customers WHERE CustomerID >= 50 AND CustomerID < 55
SELECT * FROM Employees WHERE FirstName = 'Nancy' OR FirstName = 'Anne'
SELECT * FROM Products WHERE (Price < 20 OR CategoryID = 6) AND SupplierID = 7 --Separando con parentesis para varias condiciones
SELECT * FROM Customers WHERE NOT Country = 'USA'  --Uso correcto de NOT
SELECT * FROM Customers WHERE NOT Country = 'USA' AND NOT Country = 'France'
 
SELECT TOP 5 * FROM Customers WHERE CustomerID >= 50 AND NOT Country = 'Germany' AND NOT Country = 'UK'--Limite de 5 algo util

SELECT  TOP 5 * FROM Products WHERE NOT CategoryID = 6 AND NOT SupplierID = 1 AND Price <= 30 AND ProductID > 40 ORDER BY newid()
ALTER TABLE tabla ADD Nueva_Columna NVARCHAR(50);--Sirve para agregar nueva columna
ALTER TABLE tabla DROP COLUMN nombre_Columna  --Sirve para eliminar una columna
ALTER TABLE tabla ALTER COLUMN nombre_Columna DATE  --Sirve para cambiar el tipo de dato de una columna
EXEC sp_rename 'nombre_de_la_tabla.nombre_de_la_columna_antiguo', 'nuevo_nombre_de_la_columna', 'COLUMN'; --Para cambiar nombre de una columna
SELECT * FROM Employees WHERE BirthDate BETWEEN '1958-01-01' AND '1968-01-01';  --Muy util el between

SELECT * FROM Products WHERE ProductName LIKE '%x' --Empieza , termina y verifica si tienes una palabra o letra
SELECT * FROM Employees WHERE FirstName LIKE 'A___' --Los __ solo se utiliza cuando se sabe el tamaño exacto de la palabra a buscar
SELECT * FROM Products WHERE ProductName LIKE 'ma____________%'
SELECT * FROM Products WHERE  SupplierID IN (3,4,5)  --El IN es una abreviacion a OR, comunmente se utiliza para grandes cantidades OR
SELECT * FROM Products WHERE CategoryID NOT IN ('1','2','3','4','5','6')
SELECT sum(Price) FROM Products --Suma todo un campo
SELECT AVG(Price) FROM Products --Saca el promedio
SELECT CAST(AVG(Price) as int) FROM Products --CAST lo convierte a entero a un decimal sin importar sus decimales o sea no va a redondear
SELECT CAST(ROUND(AVG(price),0)AS INT) as Promedio_Productos FROM Products WHERE CategoryID IN ('1','4','5') --Para sacar promedio y redoundear para que quede numero entero
