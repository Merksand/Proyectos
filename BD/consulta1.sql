CREATE TABLE usuarios(
	id_usuarios INT IDENTITY(1,1) PRIMARY KEY,
	nombre VARCHAR(50),
	apellido VARCHAR(50),
	fecha_de_nacimiento DATE,
	edad INT
);

INSERT INTO usuarios(nombre,apellido,fecha_de_nacimiento,edad)
VALUES  ('Mario','Marron','2000-05-12',23),
		('Sergio','Terranova','2000-03-23',29),
		('Carlos','Montero','2000-01-12',21),
		('Ruben','Alcatrazs','2000-08-10',27)


SELECT * FROM usuarios WHERE apellido = 'montero'



CREATE TABLE turnos(
	id_turno INT IDENTITY(1,1) PRIMARY KEY,
	profesional VARCHAR(20),
	id_usuario INT,
	motivo VARCHAR(50),
	horario VARCHAR(50)
)

INSERT INTO turnos (profesional,id_usuario,motivo,horario)
			VALUES ('Dr. Martinez',2,'Dolor de pene','12:30'),
				   ('Dr. Ramirez',4,'Dolor de espalda','14:30'),
				   ('Dr. Moscoso',1,'Dolor de pecho','20:10');

DELETE FROM TURNOS WHERE id_turno = 3       --Elimina un campo en especifico
UPDATE turnos SET horario  = '00:34',motivo = 'Dolor de sopiroco' WHERE id_turno = 2 --Actualiza una campo
UPDATE turnos SET nuevo = 'En espera' WHERE antiguo IS NULL 
DELETE FROM turnos WHERE profesional IS not NULL --Eliminar todos los NULL
UPDATE turnos set horario = '15:45' WHERE id_turno = 21
SELECT  * FROM turnos 
