USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS CrearNuevoUsuario//
CREATE  PROCEDURE CrearNuevoUsuario(IN PasswordCli VARCHAR(255),IN NombreUsuario VARCHAR(255),IN CorreoUsuario VARCHAR(255))
BEGIN
	DECLARE idAdmin INT;
    INSERT INTO clientes(Nombre,Email) VALUES(NombreUsuario,CorreoUsuario);
    SET idAdmin = (select idCliente FROM clientes CLI WHERE CLI.email = CorreoUsuario);
	INSERT INTO login(Usuario,Password,TOKEN) VALUES (CorreoUsuario,PasswordCli,idAdmin);
END;
//
DELIMITER ;
SELECT * FROM selfcare.clientes;
USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS EliminarUsuario//
CREATE  PROCEDURE EliminarUsuario(IN EmailCLI VARCHAR(255))
BEGIN
    DELETE FROM clientes WHERE  Email = EmailCLI;
	DELETE FROM login WHERE Usuario = EmailCLI;
END;
//
DELIMITER ;
USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS ActualizarPassword//
CREATE PROCEDURE ActualizarPassword( IN PasswordUsuario VARCHAR(255),IN EmailCLI VARCHAR(255))
BEGIN
	UPDATE login SET Password = PasswordUsuario  WHERE Usuario = EmailCLI;
END;
//
DELIMITER ;
USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS VerUsuarios//
CREATE PROCEDURE VerUsuarios()
BEGIN
	SELECT idCliente, Nombre,Email FROM clientes;
END;
//
DELIMITER ;
USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS ComprobarPassword//
CREATE PROCEDURE ComprobarPassword(IN Email VARCHAR(255))
BEGIN
	SELECT Password FROM login WHERE Usuario = Email;
END;
//
DELIMITER ;

USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS verToken//
CREATE PROCEDURE verToken(IN Email VARCHAR(255))
BEGIN
	DECLARE idClienteR INT;
    SET idClienteR = (SELECT Password FROM login WHERE Usuario = Email);
    SELECT idCliente, Nombre,Email FROM clientes WHERE idCliente = idClienteR;
END;
//
DELIMITER ;

CALL CrearNuevoUsuario("Piero123","Piero Emiliano","pevv2016@gmail.com");
CALL VerUsuarios();
CALL ActualizarPassword("Piero1234","pevv2016@gmail.com");
CALL EliminarUsuario("pevv2016@gmail.com");
SELECT * FROM login;
