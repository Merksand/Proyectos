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
SELECT MIN(PRICE) FROM Products WHERE ProductName IS NOT NULL --Para saber el precio minimo
SELECT TOP 1 ProductName,Price FROM Products WHERE ProductName IS NOT NULL ORDER BY Price --Lo mismo que el anterior pero esto con nombre
SELECT CategoryID,CAST(ROUND(AVG(PRICE),0)AS INT) AS SUMA_TOTAL FROM Products WHERE CategoryID IS NOT NULL GROUP BY CategoryID --Agrupado  y redondeado
SELECT CategoryID,(AVG(PRICE)) AS SUMA_TOTAL FROM Products WHERE CategoryID IS NOT NULL GROUP BY CategoryID -- sin redondear
SELECT ProductID,sum(Quantity)as Total FROM OrderDetails group by ProductID having sum(QUANTITY) < 50 --Having se utilizar solo con group y sus condiciones, el WHERE filtra registro , el HAVING filtra grupos
SELECT TOP 5 ProductID,sum(Quantity)as Total FROM OrderDetails group by ProductID order by Total desc 
------------------------------------------------------------------------------
SELECT ProductID,SUM(Quantity) as Cantidad,
(SELECT ProductName FROM Products WHERE ProductID = OrderDetails.ProductID) AS NombreProducto,
(SELECT Price FROM Products WHERE ProductID = OrderDetails.ProductID) AS Precio,
SUM(Quantity) * (SELECT Price FROM Products WHERE ProductID = OrderDetails.ProductID) AS Total_Recaudado
from OrderDetails group by ProductID ORDER BY Total_Recaudado --Subconsultas complejas pero mas facil con los join
--------------------------------------------------------------------------------------------------------------------------------
SELECT CEILING(price) FROM Products --Redondea para arriba, o sea que 1.2 se convierte en 2
SELECT FLOOR(price) FROM Products --Redondea para abajo, o sea que 1.8 se convierte en 1
SELECT LEN("HOLA MUNDO") --Dice la longitud normal
SELECT UPPER('hola mundo') AS Mayusculas; -- A mayuscula
SELECT LOWER('HOLA MUNDO') AS Minusculas; -- A minuscula
SELECT CONCAT(first_name, ' ', last_name) as nombre_Completo FROM patients; --Concatena dos campos en una

SELECT YEAR(fecha_nacimiento) as AnioNacimiento FROM personas; --Extrae sólo el año

select * from Employees order by(select null) offset 8 ROWS FETCH next 2 ROWS ONLY --Salta 8 y selecciona 2 y con el order salen bien en v. 2012 y sin sale en v. 2022
--------------------------------------------------------------------------------------------------------------------------------
TRUNCATE TABLE products --Mejor opcion para eliminar todos los registros de la tabla porque libera el espacio de almacenamiento de manera más rápida
DELETE FROM products --Tambien se puede pero es mejor usarlo con WHERE
BEGIN TRANSACTION  --Crear como un campo donde se puede revertir los cambios que se haga dentro
ROLLBACK  --Retrocedes todos los cambios hechos despues del BEGIN, no necesita COMMIT
COMMIT --Para guardar todo lo hecho despues de BEGIN, no correrlo despues de un ROLLBACK
------------------------------------------------------------------------------------------------------------------------------------
SELECT EmployeeID,FirstName,premio FROM Employees e
INNER JOIN premios p ON EmployeeID = id_empleado  --Union join con datos relacionados
-
SELECT EmployeeID,FirstName,premio FROM Employees e
FULL OUTER JOIN premios p ON EmployeeID = id_empleado  --Muestra todos los datos incluso puede salir duplicados, como UNION Y UNION ALL
-
SELECT EmployeeID,FirstName,premio FROM Employees e
LEFT JOIN premios p ON EmployeeID = id_empleado  --Todos los datos de la tabla izquierda y los datos relacionado en la derecha, y con RIGHT JOIN es al reves
----
SELECT EmployeeID,FirstName,premio FROM Employees e
LEFT JOIN premios p ON EmployeeID = id_empleado
UNION   --Muestra los datos combinados de los dos lados sin datos duplicados
SELECT EmployeeID,FirstName,premio FROM Employees e
RIGHT JOIN premios p ON EmployeeID = id_empleado
----
SELECT EmployeeID,FirstName,premio FROM Employees e
LEFT JOIN premios p ON EmployeeID = id_empleado
UNION ALL  --Muestra TODOS los datos combinados de los dos lados con datos duplicados
SELECT EmployeeID,FirstName,premio FROM Employees e
RIGHT JOIN premios p ON EmployeeID = id_empleado
--------------------------------------------------------------------------------------------------------------------------------------




