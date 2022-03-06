CREATE DATABASE  IF NOT EXISTS `selfcare` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `selfcare`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: selfcare
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `FechaDeCreacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Peso` float DEFAULT NULL,
  `Talla` float DEFAULT NULL,
  `Sexo` varchar(2) DEFAULT NULL,
  `FechaDeNacimiento` date DEFAULT NULL,
  PRIMARY KEY (`idCliente`),
  UNIQUE KEY `Email_UNIQUE` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (10,'Hello Word','rosa@gmail.com','2022-02-17 18:58:19',NULL,NULL,NULL,NULL),(11,'Piero','pev40@gmail.com','2022-02-18 05:10:27',NULL,NULL,NULL,NULL),(13,'Piero3','pev40gmail.com','2022-02-18 05:14:11',NULL,NULL,NULL,NULL),(15,'PieroEmiliano','pevv2015@gmail.com','2022-02-18 05:23:05',NULL,NULL,NULL,NULL),(16,'ontario@landing.com','ontario@landing.com','2022-02-18 05:39:05',NULL,NULL,NULL,NULL),(19,'Piero Vizcarra','pevv40@gmail.com','2022-03-02 21:45:38',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comidas`
--

DROP TABLE IF EXISTS `comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comidas` (
  `idComidas` int NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idComidas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comidas`
--

LOCK TABLES `comidas` WRITE;
/*!40000 ALTER TABLE `comidas` DISABLE KEYS */;
INSERT INTO `comidas` VALUES (1,'Desayuno'),(2,'Almuerzo'),(3,'Cena');
/*!40000 ALTER TABLE `comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dificultad`
--

DROP TABLE IF EXISTS `dificultad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dificultad` (
  `idDificultad` int NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idDificultad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dificultad`
--

LOCK TABLES `dificultad` WRITE;
/*!40000 ALTER TABLE `dificultad` DISABLE KEYS */;
INSERT INTO `dificultad` VALUES (1,'Facil'),(2,'Mediana'),(3,'Dificil');
/*!40000 ALTER TABLE `dificultad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `idCliente` int NOT NULL,
  `idReceta` int DEFAULT NULL,
  PRIMARY KEY (`idCliente`),
  KEY `FK_Recetas_Favoritos_idx` (`idReceta`),
  CONSTRAINT `FK_Clientes_Favoritos` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`idCliente`),
  CONSTRAINT `FK_Recetas_Favoritos` FOREIGN KEY (`idReceta`) REFERENCES `recetas` (`idRecetas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `idLogin` int NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `TOKEN` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`idLogin`),
  UNIQUE KEY `Usuario_UNIQUE` (`Usuario`),
  UNIQUE KEY `TOKEN_UNIQUE` (`TOKEN`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (3,'rosa@gmail.com','$2a$10$NvaOuTvBz3x6bux4biP.UebS2sedrX2Lx7fTFIs/E5UwM4z8WSOuC','10'),(4,'pev40@gmail.com','$2a$10$G8XWB9CTn8amXxp4IHKGCuqnL2rJqMIAj.w9Wf/BOHKrBtDf3C6Mm','11'),(5,'pev40gmail.com','$2a$10$HrbXJ2WNCGP4pI5LpobYz.Hlr1QKcRG6Q.vOL8yoZtvRtMvkxj7j2','13'),(6,'pevv2015@gmail.com','$2a$10$qvIzuRbWt1R8qWTQVt5ck.6n/9rxMlRu9XYGuqD7hGjcq59fdwT.G','15'),(7,'ontario@landing.com','$2a$10$Eqsu1HLEUgsOuw/ZtN2IDOWPNcHJlsA0RvKem/truo7qRX7zCcN52','16'),(9,'pevv40@gmail.com','$2a$10$rdcbtAZ5N6E9TTQli0oMMuDCuz4XpPo6rbZpzDxEz5FApIFiVmvY2','19');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preguntas` (
  `idPregunta` int NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `RespuestaCorrecta` int NOT NULL,
  `NivelDeDificultad` int NOT NULL,
  `fact` varchar(350) NOT NULL,
  PRIMARY KEY (`idPregunta`),
  KEY `FK_Preguntas_Dificultad_idx` (`NivelDeDificultad`),
  KEY `FK_Respuesta_Preguntas_idx` (`RespuestaCorrecta`),
  CONSTRAINT `FK_Preguntas_Dificultad` FOREIGN KEY (`NivelDeDificultad`) REFERENCES `dificultad` (`idDificultad`),
  CONSTRAINT `FK_Respuesta_Preguntas` FOREIGN KEY (`RespuestaCorrecta`) REFERENCES `respuestas` (`idRespuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntas`
--

LOCK TABLES `preguntas` WRITE;
/*!40000 ALTER TABLE `preguntas` DISABLE KEYS */;
INSERT INTO `preguntas` VALUES (1,'Las grasas se encuentran únicamente en los alimentos de origen animal',1,1,'Las grasas las podemos encontrar tanto en fuentes de origen animal como vegetal algunas muy buenas fuentes de grasas son las almendras pecanas salmón palta etc.'),(2,'¿Seleccione el grupo de alimentos que son altas fuente de calcio?',5,1,'El calcio es un mineral muy importa algunas de sus funciones son la de mantener estable la membrana celular modular la trasmisión neuronal y la correcta coagulación de la sangre.'),(3,'¿ Cual de las siguientes funciones realiza el agua?',8,1,'Una de las funciones más importantes del agua es la de regular la temperatura corporal el cuerpo siempre tienes que estar entre los 36.1°C y 37.2°C.'),(4,'¿Las frutas engordan si se comen de noche?',1,1,'Este es un mito muy popular, pero es totalmente falso las calorías que te aporta la fruta siempre van a ser las mismas.'),(5,'El principal nutriente con función estructural es',15,1,'La proteína tiene muchas funciones, pero entre las más importantes está la función estructural.'),(6,'¿cómo se mide la energía liberada en los alimentos?',18,1,'Las calorías son la energía que ingresamos en el cuerpo a través de los 3 macronutrientes principales carbohidratos proteínas y grasas.'),(7,'Los aminoácidos son los componentes de',15,2,'Las proteínas se componen por aminoácidos y entre los más importantes están la histidina isoleucina leucina, lisina, metionina, fenilalanina, treonina, triptófano y valina.'),(8,'¿Qué grupo de frutas es fuente de vitamina A?',20,2,'La vitamina A tiene muchos beneficios como la de mejorar las defensas mejorar la cicatrización y mejorar la vista.'),(9,'¿Qué es una proteína completa?',26,2,'Una proteína se compone por muchos aminoácidos, pero se considera completa cuando tiene los 9 esenciales ya que nuestro cuerpo no puedo generarlas y las necesita sí o sí consumirla de los alimentos.'),(10,'Una deficiencia acusada por deficiencia de calcio puede producir',27,2,'Porque la deficiencia de calcio puede provocar osteoporosis.'),(11,'La falta de yodo en la dieta puede producir',30,2,'El bocio es un aumento del tamaño de la tiroides.'),(12,'El almidón es un polisacárido muy abundante en alimentos como:',34,3,'El pan ya que el almidón es un derivado del trigo y este es un alimento con mucho almidón.'),(13,'¿Cuál de los siguientes macros proporcionan más calorías por gramo:?',36,3,'El macro que proporciona más calorías es la grasa esta es una muy buena fuente de energía.'),(14,'¿Cual de las siguientes combinaciones muestra las cantidades aproximadas recomendadas de los macronutrientes en una dieta equilibrada?',43,3,'Lo ideal es que saquemos mayor cantidad de energía de los glúcidos luego grasas y último proteínas.'),(15,'¿Cuál de las siguientes funciones tiene el aditivo E-350?',45,3,'Los aditivos del grupo E tienen muchas funciones como por ejemplo \n                  E-1XX: colorantes \n                  E-2XX: conservantes\n                  E-3XX: antioxidantes\n                  E-4XX: estabilizantes\n              Por lo tanto el E-350 sirve como antioxidante para los alimentos.');
/*!40000 ALTER TABLE `preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz` (
  `idquiz` int NOT NULL AUTO_INCREMENT,
  `Puntaje` int NOT NULL,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`idquiz`),
  KEY `FK_Quiz_Clientes_idx` (`idUsuario`),
  CONSTRAINT `FK_Quiz_Clientes` FOREIGN KEY (`idUsuario`) REFERENCES `clientes` (`idCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (1,5,16),(2,5,16),(3,5,16),(4,1,16),(5,2,16),(6,0,16),(7,4,16);
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recetas`
--

DROP TABLE IF EXISTS `recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recetas` (
  `idRecetas` int NOT NULL,
  `NombreReceta` varchar(255) DEFAULT NULL,
  `idDificultad` int DEFAULT NULL,
  `idTiempo` int DEFAULT NULL,
  `idComida` int DEFAULT NULL,
  `NivelCalorico` float DEFAULT NULL,
  `Grasas` float DEFAULT NULL,
  `Carboidratos` float DEFAULT NULL,
  `Proteinas` float DEFAULT NULL,
  `TiempoDePreparacion` int DEFAULT NULL,
  `Preparacion` text,
  `CantidadIngredientes` int DEFAULT NULL,
  `Ingredientes` text,
  PRIMARY KEY (`idRecetas`),
  KEY `FK_Comidas_idx` (`idComida`),
  KEY `FK_Dificultad_idx` (`idDificultad`),
  KEY `FK_Tiempo_idx` (`idTiempo`),
  CONSTRAINT `FK_Comidas` FOREIGN KEY (`idComida`) REFERENCES `comidas` (`idComidas`),
  CONSTRAINT `FK_Dificultad` FOREIGN KEY (`idDificultad`) REFERENCES `dificultad` (`idDificultad`),
  CONSTRAINT `FK_Tiempo` FOREIGN KEY (`idTiempo`) REFERENCES `tiempo` (`idTiempo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
INSERT INTO `recetas` VALUES (1,'Tostadas saludables con palta, huevos revueltos y rábano',1,1,1,395,24,23,18,15,'Prepara las tostadas con pan integral - ya sea sobre una sartén o en una tostadora.\nPela el aguacate, retira la semilla y tritúralo en un tazón con un tenedor y pimienta negra molida.\nCalienta una sartén antiadherente. Luego agrega los huevos previamente batidos con sal y ajo en polvo.\nRevuelve los huevos revueltos hasta que estén espesos.\nLava los rábanos, límpialos y córtalos en trozos delgadas.\nUnta las tostadas calientes con puré de aguacate y cúbrelas con los huevos revueltos y rábanos picados.',6,'4 tostadas de trigo integral\n1 aguacate maduro\n4 huevos\n200 g de rábanos\n1/2 cdta. de sal\n1 cdta. de ajo en polvo\n1/2 cdta. de pimienta negra molida'),(2,'Waffles/Panqueques con proteína y sin gluten',1,1,1,333,8,29,32,10,'En un recipiente, triturar la banana con un tenedor y mezclar con los demás ingredientes.\nVerter la masa en una máquina de waffles precalentada y hornear el waffle durante unos 5 minutos hasta que esté dorado. Si la máquina de waffles no es de teflón, rociar aceite en la máquina.\nUsando la misma masa, se pueden preparar panqueques.\nLos waffles se pueden servir con yogur, nieve de banana casera, mousse de proteína, fruta, chocolate oscuro, jarabe de arce o granos descortezados de cacao.',7,'1 huevo\n1 cucharada de harina de coco o almendra\n35g de polvo de proteínas\nUna pizca de polvo para hornear\nUna piza de canela molida\n1 banana madura'),(3,'Avena “tarta de queso de arándanos”',3,1,1,282,3,47,10,8,'Hierve el agua en una olla.\nAñade la avena al agua y cocina la avena hasta que esté suave. Una vez que la avena esté suave y cremosa y haya absorbido el agua, remueve del fuego y mezcla el endulzante, canela, yogur griego y los arándanos.\nLa avena puede servirse fría o caliente.',8,'1/2 tazas de avena \n1 taza de agua\n2-3 cdas de yogur natural griego (bajo en grasas)\n200g de arándanos\nuna pizca de canela\nuna pizca de estevia (o 1-2 cdas de miel)'),(4,'Avena rápida sabor a brownie',2,1,1,320,6,44,21,5,'Primero, combina los ingredientes secos y luego combínalos con el resto de los ingredientes.\nDivide la avena en dos recipientes y sírvela inmediatamente, o déjala en el refrigerador durante la noche. Prueba ambas versiones para saber cuál es tu favorita.',6,'1 taza (250ml) de leche de almendras o coco\n1 taza (250ml) de avena\n1/2 taza (125ml) de yogur griego natural, bajo en grasas\n1-2 cdas de cacao en polvo\n2-3 tazas de miel\n30g de proteína en polvo de chocolate (o avena adicional)\ntrozos de chocolate oscuro (opcional)'),(5,'Enrollado de lechuga bajo carbohidratos',1,1,1,266,18,5,20,5,'Lava las hojas de lechuga con agua y déjalas secar.\nLimpia el aguacate y tritúralo con un tenedor.\nMezcla el aguacate triturado con una pizca de pimienta negra molida y extiéndelo sobre una de las hojas de lechuga.\nColoca la hoja de lechuga con aguacate sobre una segunda hoja lavada de lechuga para que se peguen.\nColoca rodajas de jamón y queso sobre las hojas de lechuga y añade una rebanada de tomate finamente picada encima.\nCon cuidado enrolla las hojas de lechuga con el relleno lo más apretado posible. Puedes cortar el enrollado a la mitad, o asegurarlo con un palillo para que no se abra.',6,'2 hojas grandes de lechuga\n50g de jamón de alta calidad\n30g de queso en rebanadas (por ejemplo, queso suizo)\n1/4 de aguacate\n1/2 de tomate\nuna pizca de pimienta negra molida'),(6,'Rollos de carne con ciruelas deshidratadas',1,2,2,315,13,12,35,40,'Utilizar un mazo para carnes para ablandar los bistecs de res.\nAgregar pimienta y sal al gusto.\nEn cada bistec, colocar una rebanada de jamón y unas ciruelas deshidratadas y enrollar.\nSostener el rollo con un palillo.\nMientras tanto, en una olla de vapor o sartén para freír, sofreír levemente la cebolla picada en el aceite de oliva.\nAgregar los rollos y agua.\nCocer los rollos sobre fuego bajo por aproximadamente 30 minutos hasta tiernos.\nVerificar ocasionalmente el nivel de agua en la olla y agregar más cuando sea necesario.\nCuando se hayan cocido los rollos, sacar de la olla.\nHacer una salsa con le leche mezclada con la harina de garbanzo y especias.\nDejar hervir y cuando esté espesa, verter sobre los rollos antes de servir.\nSe acompaña con arroz integral y verduras.',7,'2 bistecs de res\n4 a 6 ciruelas deshidratadas\n2 rebanadas de jamón\n1 cucharada de aceite de oliva\nCebolla\nSal marina\nPimienta negra\nPara la salsa:\n1 cucharada de harina de garbanzo\n5 cucharadas de leche\nPimienta negra'),(7,'Tortillas de maíz rellenas con aguacate y frijoles',1,2,2,468,16,59,13,35,'En un tazón, mezcla la harina de maíz con agua tibia y sal.\nForma pequeñas bolas con la masa, luego estíralas entre dos hojas de papel para hornear. Es mejor hacer tortillas más pequeñas, para que no se desarmen durante el horneado.\nLuego, cuidadosamente coloca las tortillas sobre una bandeja caliente y seca, usando papel para hornear, y cocínalas por ambos lados hasta que estén doradas (aproximadamente 1-2 minutos en cada lado).\nColoca las tortillas horneadas entre servilletas de papel para suavizarlas.\nEn un recipiente, mezcla el aguacate maduro con sal y especias. Extiende esta mezcla sobre las tortillas.\nSobre la mezcla de aguacate agrega ensalada, frijoles cocidos, tomates finamente picados y maíz.\nEnrolla o dobla las tortillas y sírvelas mientras aún están calientes.',8,'2 tazas de harina de maíz (masa harina)\n1 1/2 tazas de agua tibia\n1/2 cdta de sal marina\n2 aguacates\nuna pizca de sal marina\nuna pizca de pimienta molida\nuna pizca de ajo en polvo\n300g de tomates\n200g de frijoles cocidos\n80g de maíz dulce\nun puñado de lechuga'),(8,'Pechugas de pollo Caprese con tomates, albahaca y mozzarella',3,2,2,403,16,3,55,35,'Corta las pechugas de pollo a lo largo por un lado, el otro lado debe permanecer cerrado para que los otros ingredientes no se salgan.\nRocía aceite de oliva en ambos lados de la carne, masajea las especias, sal y pimienta a tu gusto, usando tus manos.\nCorta los tomates y mozzarella en rodajas finas.\nColoca rodajas de mozzarella y tomates en cada pieza de carne. Añade hojas de albahaca también.\nColoca las pechugas de pollo rellenas en una bandeja para hornear.\nHornea la carne (puede estar cubierta) en un horno precalentado por aproximadamente 20 minutos a 220 grados centígrados hasta que estén cocidas. Después de hornear, déjalas reposar por al menos 5 minutos en un plato tapado.\nAl final, puedes añadir vinagre balsámico y servirlas con tu guarnición favorita.',6,'800g (4 piezas pequeñas) de pechugas de pollo\n200g de mozarella fresca\nun puñado de albahaca fresca\n2 tomates\npimienta negra molida (al gusto)\nsal (al gusto)\najo en polvo (al gusto)\nvinagre balsámico (opcional)\n1-2 cdas de aceite de oliva'),(9,'Arroz Fit con Atún y Maíz',2,2,2,308,5,44,20,25,'En una olla pequeña, calienta el aceite de coco, agrega la cebolla finamente picada y saltéala.\nAgrega el arroz integral, vierte el doble de cantidad de agua, sazona con sal y pimienta y déjalo hervir a fuego lento hasta que el arroz absorba toda el agua.\nFinalmente, combina el arroz cocido con el maíz y el atún en aceite de oliva y sirve caliente.',6,'100 g de arroz integral\n150 g de atún en aceite de oliva\n100 g de maíz\nSal marina, pimienta negra molida, albahaca (al gusto).\n1/2 cebolla\n1 cdta. de aceite de coco'),(10,'Pechugas de Pollo Bajas en Carbohidratos con Zanahoria y \"Arroz\" de Coliflor',1,2,2,310,6,12,45,40,'En una olla grande, calienta el aceite y saltea la cebolla finamente picada hasta que esté transparente.\nLuego, agrega las pechugas de pollo cortadas en cubitos.\nMezcla bien, agrega un poco de agua, cubre la olla y guisa durante 20 minutos, revolviendo ocasionalmente.\nFinalmente, agrega las especias, la sal, el jugo de limón y la zanahoria rallada.\nCocina todo junto por otros 5 minutos y luego apaga el fuego.\nMientras tanto, corta la coliflor en floretes y procésala hasta convertirla en “arroz”. Si lo deseas, puedes cortar la coliflor en trozos pequeños con un cuchillo, pero obtendrás un resultado más fino con un procesador de alimentos.\nColoca la coliflor picada en una sartén profunda, agrega 2 cucharadas de agua, sazona con sal y especias, y cocina por 10 minutos, revolviendo ocasionalmente hasta que comience a tomar un color dorado.\nFinalmente, retira el “arroz” de coliflor del fuego y sírvelo junto con el pollo.',7,'700 g de pechugas de pollo\n1 cebolla\n1 cda. de aceite de coco\n200 g de zanahoria\n2 cdas. de jugo de limón\n1 cda. de ajo en polvo\n1 cdta. de paprika dulce\n1 cdta. de sal\nuna pizca de cúrcuma\n1 coliflor grande\n2 cdas. de agua\n1 cdta. de sal marina\n1/2 cdta. de pimienta negra molida\nalbahaca'),(11,'Pollo al Curry con Manzanas Fitness',1,3,3,282,9,17,32,30,'En una sartén grande, derrite una cucharadita de aceite de coco; añade la cebolla finamente picada y saltea hasta que esté transparente.\nAñade el pollo previamente cortado en cubos, la manzana en cubos pequeños, la salsa de soja, el curry en polvo, 2 cucharadas de mostaza y vierte una taza de agua.\nCubre el sartén y deja que el pollo hierva a fuego lento por 25 minutos, revolviendo ocasionalmente.\nEn caso de que el pollo comience a quemarse, agrega un poco más de agua y revuelve más seguido.\nPuedes espesar y suavizar la salsa añadiendo un poco de yogurt griego después de que esté bien cocida.\nEl pollo al curry es servido idealmente con arroz o cuscús.',6,'Ingredientes\n300 g de Muslos de pollo (sin piel ni huesos)\n1 manzana grande\n1 cebolla\n1 taza de agua\n2 cdas. de mostaza\n1 cdta. de aceite de coco \n2 cdtas. de curry en polvo\n2 cdtas. de salsa de soja'),(12,'Bolitas de atún horneadas',1,3,3,350,7,12,57,25,'Moler o procesar avena hasta que esté fina.\nEn un recipiente, mezclar la avena con atún colado, huevo y especias al gusto.\nFormar bolitas de la masa y colocarlas en una bandeja forrada con papel para hornear.\nHornear a 180° C (350° F) por 20 minutos.\nServir las bolitas calientes – de preferencia con yogur o salsa de eneldo o tomate.',6,'250g de atún en agua\n20g de avena\n1 huevo\nSal marina\nPimienta negra molida\nAjo en polvo'),(13,'Risotto delicioso de pollo con espinacas',3,3,3,356,11,24,35,60,'Se puede preparar el risotto en una sartén honda (wok) o en una olla de teflón.\nDerretir 3 cucharadas de mantequilla en una olla.\nSofreír cebolla picada finamente en mantequilla derretida hasta que esté dorada. Incorporar el pollo picado.\nAgregar 1 taza de agua y cocer durante aproximadamente 10 minutos.\nIncorporar las espinacas lavadas y menear hasta que estén tiernas.\nSe puede agregar elote y champiñones picados.\nAñadir el arroz junto con 3 tazas de agua y 1 taza de leche en una olla.\nSazonar con sal y especias, menear y cocinar hasta que toda el agua se consuma.\nSi es necesario, agregar más agua. Al final, el arroz debe estar suave y un poco pegajoso.',6,'500g de pechugas de pollo\n2 tazas de arroz integral\n200g de espinacas frescas\n3 cucharadas de mantequilla\n1 cebolla\n4 tazas de agua\n1 taza de leche\n2 cucharaditas de sal marina\n⅓ cucharadita de pimienta negra molida\n½ cucharadita de ajo en polvo\nUna pizca de cilantro\nElote en grano (opcional)\nChampiñones (opcional)'),(14,'Albóndigas saludables en salsa de tomate',2,3,3,570,21,52,36,35,'Sazona el arroz al gusto y cocínalo con el doble de cantidad de agua hasta que esté suave. Con la carne molida, harina, ajo triturado, especias y sal, forma una mezcla homogénea y forma pequeñas bolas con ella. Coloca las albóndigas sobre una bandeja con papel para hornear. Hornea por 15 minutos a 190 grados hasta que estén cocidas en el medio. En una olla grande o sartén profunda , cocina las cebollas finamente picadas en aceite caliente. Añade el puré de tomate, los tomates pelados, sal, especias, vinagre balsámico y ajo triturado. Deja que la salsa hierva y luego añade las albóndigas horneadas y añade queso mozzarella rallado. Cubre la sartén y deja que las albóndigas hiervan en la salsa por otros 5 minutos. Sirve las albóndigas con la salsa de tomate y arroz cocido.',6,'500 g de carne de pavo (o ternera) molida\n3 cdas de cualquier harina\n1 diente de ajo\n1 cdta de mostaza\nsal, pimienta negra molida (al gusto)\npizca de comino molido\nPara la salsa:\n50g de mozzarella rallada (con bajo contenido en grasas)\n300ml de puré de tomate\n1 lata (400g) de tomates pelados y triturados\n1 cebolla\norégano, sal, pimienta negra molida (al gusto)\n1-2 dientes de ajo\n250g de arroz\n1 cda de aceite\n2 cdtas de vinagre balsámico'),(15,'Frittata de tomate baja en carbohidratos',1,3,3,230,15,6,17,15,'En un recipiente, mezcla los huevos, la leche, el puré de tomate, sal marina, pimienta negra molida, y una cucharada de queso parmesano rallado.\nCalienta aceite de oliva en una olla profunda.\nVierte la mezcla de huevos en la olla.\nCubre la olla y déjala cocinar a fuego medio por 5 minutos hasta que la mayor parte de la frittata se espese.\nAgrega sobre la frittata tomates cherry picados, el resto del queso parmesano, y déjalo cocinar tapado por otros 5-7 minutos, verificando ocasionalmente que no se queme.',6,'4 huevos grandes\n2 cdas de leche\n2 cdas de puré de tomate\n3 cdas de queso parmesano rallado\n250g de tomates cherry\n1 cdta de aceite de oliva\npimienta negra molida\n1/2 cdta de sal marina');
/*!40000 ALTER TABLE `recetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuestas`
--

DROP TABLE IF EXISTS `respuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respuestas` (
  `idRespuesta` int NOT NULL,
  `NombreRespuesta` varchar(255) NOT NULL,
  PRIMARY KEY (`idRespuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuestas`
--

LOCK TABLES `respuestas` WRITE;
/*!40000 ALTER TABLE `respuestas` DISABLE KEYS */;
INSERT INTO `respuestas` VALUES (1,'FALSO'),(2,'VERDADERO'),(3,'Depende'),(4,'Carnes rojas, Naranjas, Cereales'),(5,'Brocoli, Almendras, Pistachos'),(6,'Ciruelas, higos, kiwis, Manzanas'),(7,'Ninguna de las anteriores'),(8,'Contribuye a regular la temperatura corporal.'),(9,'Favorece la absorción del calcio'),(10,'Contribuye a la defensa del organismo'),(11,'Depende de que tan noche y que fruta es'),(12,'Los glúcidos'),(13,'Los lípidos'),(14,'El agua'),(15,'Las proteínas'),(16,'En grados centígrados'),(17,'En grados kelvin'),(18,'En calorías'),(19,'En newton'),(20,'Aguacate, plátano, melón'),(21,'Piña, plátano, fresas'),(22,'kiwi, magos, papaya'),(23,'Naranjas, toronjas, piña'),(24,'Aquella que tiene un valor biológico mayor al 75%'),(25,'Aquella que se obtiene de fuentes animales'),(26,'Aquella que tiene los 9 aminoacidos esenciales'),(27,'Debilidad y fragilidad en los huesos'),(28,'Fatiga y anemia'),(29,'Nauseas'),(30,'Bocio'),(31,'Anemia'),(32,'Caries dental'),(33,'El pescado'),(34,'El pan'),(35,'El queso'),(36,'Un lípido esteroideo'),(37,'Un fosfolípido'),(38,'Un hidrato de carbono'),(39,'Carbohidratos'),(40,'Proteínas'),(41,'Grasas'),(42,'Glúcidos ( 20% ), lípidos (30% ), Proteínas (50% )'),(43,'Glúcidos (57% ), lípidos (28%   ), Proteínas (15% )'),(44,'Glúcidos ( 40%), lípidos ( 40% ), Proteínas ( 20%)'),(45,'Impedir la oxidación'),(46,'Endulzar'),(47,'Dar color al alimento');
/*!40000 ALTER TABLE `respuestas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiempo`
--

DROP TABLE IF EXISTS `tiempo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiempo` (
  `idTiempo` int NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idTiempo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiempo`
--

LOCK TABLES `tiempo` WRITE;
/*!40000 ALTER TABLE `tiempo` DISABLE KEYS */;
INSERT INTO `tiempo` VALUES (1,'Mañana'),(2,'Tarde'),(3,'Noche');
/*!40000 ALTER TABLE `tiempo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valoraciones`
--

DROP TABLE IF EXISTS `valoraciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valoraciones` (
  `idValoracion` int NOT NULL AUTO_INCREMENT,
  `idReceta` int NOT NULL,
  `Puntaje` float NOT NULL,
  PRIMARY KEY (`idValoracion`),
  KEY `FK_Valoraciones_Recetas_idx` (`idReceta`),
  CONSTRAINT `FK_Valoraciones_Recetas` FOREIGN KEY (`idReceta`) REFERENCES `recetas` (`idRecetas`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoraciones`
--

LOCK TABLES `valoraciones` WRITE;
/*!40000 ALTER TABLE `valoraciones` DISABLE KEYS */;
INSERT INTO `valoraciones` VALUES (20,15,2.5);
/*!40000 ALTER TABLE `valoraciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-06 11:51:16
