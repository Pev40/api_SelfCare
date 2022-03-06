USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS CrearNuevoUsuario//
CREATE  PROCEDURE CrearNuevoUsuario(IN PasswordCli VARCHAR(255),IN NombreUsuario VARCHAR(255),IN CorreoUsuario VARCHAR(255))
BEGIN
	DECLARE idAdmin INT;
    INSERT INTO clientes(Nombre,Email) VALUES(NombreUsuario,CorreoUsuario);
    SET idAdmin = (select idCliente FROM clientes CLI WHERE CLI.email = CorreoUsuario);
	INSERT INTO login(Usuario,Password,TOKEN) VALUES (CorreoUsuario,PasswordCli,idAdmin);
    SELECT idcliente from clientes order by idcliente desc limit 1;
END;
//
DELIMITER ;


USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS CrearDatosUsuario//
CREATE  PROCEDURE CrearDatosUsuario(IN idUsuario INT,IN PesoActualCLI FLOAT,IN TallaCLI FLOAT,IN SexoCLI VARCHAR(2), IN Nacimiento DATE)
BEGIN
    UPDATE clientes SET Peso = PesoActualCLI ,Talla =TallaCLI ,Sexo = SexoCLI,FechaDeNacimiento=Nacimiento WHERE idCliente = idUsuario ;
	SELECT * from cliente where idCliente = idUsuario ;
END;
//
DELIMITER ;


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
DROP PROCEDURE IF EXISTS AccederLogin//
CREATE PROCEDURE AccederLogin(IN Email VARCHAR(255))
BEGIN
	DECLARE idClienteR INT;
    SET idClienteR = (SELECT TOKEN FROM login WHERE Usuario = Email);
    SELECT idCliente, Nombre,Email FROM clientes WHERE idCliente = idClienteR;
END;
//
DELIMITER ;


USE selfcare;
DELIMITER //
DROP PROCEDURE IF EXISTS PreguntasQuiz//
CREATE PROCEDURE PreguntasQuiz(IN NivelDeDificultadCLI INT)
BEGIN
    SELECT PRE.idPregunta,PRE.Nombre,PRE.RespuestaCorrecta,RTPA.NombreRespuesta,PRE.fact FROM preguntas PRE INNER JOIN respuestas RTPA on PRE.RespuestaCorrecta = RTPA.idRespuesta where PRE.NivelDeDificultad = NivelDeDificultadCLI;
END;
//
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS RespuestaAletaroriaQuiz//
CREATE PROCEDURE RespuestaAletaroriaQuiz(IN NumeroEleccion INT)
BEGIN
    SELECT * FROM  respuestas WHERE idRespuesta  = NumeroEleccion;
END;
//
DELIMITER ;


DELIMITER //
DROP PROCEDURE IF EXISTS RegistrarQuizUsuario//
CREATE PROCEDURE RegistrarQuizUsuario(IN idCliente INT,IN PuntajeCLI INT)
BEGIN
    INSERT INTO quiz(Puntaje,idUsuario) VALUES(PuntajeCLI,idCliente);
END;
//
DELIMITER ;



DELIMITER //
DROP PROCEDURE IF EXISTS PuntajeUsuarioQuiz//
CREATE PROCEDURE PuntajeUsuarioQuiz(IN idCliente INT)
BEGIN
    SELECT SUM(QUI.Puntaje) AS "Puntaje" FROM  quiz QUI WHERE idUsuario = idCliente;
END;
//
DELIMITER ;
CALL PuntajeUsuarioQuiz(16);

DELIMITER //
DROP PROCEDURE IF EXISTS RecetasPortada//
CREATE PROCEDURE RecetasPortada()
BEGIN
    SELECT REC.idRecetas,REC.NombreReceta,DIF.Nombre AS "Dificultad",REC.NivelCalorico,COM.Nombre AS "Comida" FROM  recetas REC INNER JOIN dificultad DIF ON REC.idDificultad = DIF.idDificultad INNER JOIN comidas COM ON REC.idComida = COM.idComidas;
END;
//
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS FiltroRecetas//
CREATE PROCEDURE FiltroRecetas(IN NivelCaloriasCLI INT, IN ProteinasCLI INT,IN CarboidratosCLI INT, IN GrasasCLI INT, IN ComidasCLI INT,IN TiempoCLI INT, IN DificultadCLI INT)
BEGIN
    SELECT 
		REC.idRecetas,
		COM.Nombre AS "Comida",
        DIF.Nombre AS "Dificultad",
        REC.NombreReceta,        
        REC.NivelCalorico
    FROM  recetas REC 
		INNER JOIN dificultad DIF ON REC.idDificultad = DIF.idDificultad 
        INNER JOIN comidas COM ON REC.idComida = COM.idComidas 
        WHERE REC.NivelCalorico <= NivelCaloriasCLI AND REC.Proteinas <= ProteinasCLI AND REC.Carboidratos <= CarboidratosCLI AND REC.Grasas <= GrasasCLI AND REC.idComida = ComidasCLI AND REC.TiempoDePreparacion <= TiempoCLI AND REC.idDificultad = DificultadCLI ;
END;
//
DELIMITER ;



DELIMITER //
DROP PROCEDURE IF EXISTS AgregarAFavorito//
CREATE PROCEDURE AgregarAFavorito(IN idUsuario INT, IN idRecetaCLI INT)
BEGIN
	INSERT INTO favoritos(idCliente,idReceta) VALUES (idUsuario,idRecetaCLI);
END;
//
DELIMITER ;


DELIMITER //
DROP PROCEDURE IF EXISTS EliminarFavorito//
CREATE PROCEDURE EliminarFavorito(IN idUsuario INT, IN idRecetaCLI INT)
BEGIN
	DELETE FROM favoritos WHERE  idCliente = idUsuario AND idReceta = idRecetaCLI;
END;
//
DELIMITER ;


DELIMITER //
DROP PROCEDURE IF EXISTS ConsultarFavoritoUsuario//
CREATE PROCEDURE ConsultarFavoritoUsuario(IN idUsuario INT)
BEGIN
	SELECT * FROM favoritos FAV INNER JOIN recetas REC ON FAV.idReceta = REC.idRecetas  WHERE  idCliente = idUsuario;
END;
//
DELIMITER ;

DELIMITER //
DROP PROCEDURE IF EXISTS ConsultarFavoritoUsuario//
CREATE PROCEDURE ConsultarFavoritoUsuario(IN idUsuario INT, IN idRecetaCLI INT)
BEGIN
	SELECT * FROM favoritos FAV INNER JOIN recetas REC ON FAV.idReceta = REC.idRecetas WHERE idCliente = idUsuario AND idReceta = idRecetaCLI;
END;
//
DELIMITER ;


DELIMITER //
DROP PROCEDURE IF EXISTS ConsultarCantidadFavoritoRecetas//
CREATE PROCEDURE ConsultarCantidadFavoritoRecetas(IN idRecetaCli INT)
BEGIN
	SELECT COUNT(FAV.idReceta) FROM favoritos FAV   WHERE  FAV.idReceta = idRecetaCli;
END;
//
DELIMITER ;


DELIMITER //
DROP PROCEDURE IF EXISTS CrearValoracion//
CREATE PROCEDURE CrearValoración(IN idRecetaCLI INT, IN PuntajeCLI float)
BEGIN
		INSERT INTO valoraciones(idReceta,Puntaje) VALUES (idRecetaCLI,PuntajeCLI);
END;
//
DELIMITER ;


CALL FiltroRecetas(400,400,400,400,2,40,1);
CALL EliminarFavorito(16,1);
CALL PreguntasQuiz(1);
CALL RespuestaAletaroriaQuiz(5);



CALL CrearNuevoUsuario("Piero123","Piero Emiliano","pevv2016@gmail.com");
CALL VerUsuarios();
CALL ActualizarPassword("Piero1234","pevv2016@gmail.com");
CALL EliminarUsuario("pevv2016@gmail.com");
SELECT * FROM login;
CALL AccederLogin('rosa@gmail.com');