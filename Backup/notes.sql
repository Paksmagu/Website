-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: virtualPiano
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Notes`
--

DROP TABLE IF EXISTS `Notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Notes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `note` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Notes_note_uindex` (`note`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notes`
--

LOCK TABLES `Notes` WRITE;
/*!40000 ALTER TABLE `Notes` DISABLE KEYS */;
INSERT INTO `Notes` VALUES (61,'A#1'),(66,'A#2'),(71,'A#3'),(76,'A#4'),(81,'A#5'),(86,'A#6'),(91,'A#7'),(6,'A1'),(13,'A2'),(20,'A3'),(27,'A4'),(34,'A5'),(41,'A6'),(48,'A7'),(55,'A8'),(7,'B1'),(14,'B2'),(21,'B3'),(28,'B4'),(35,'B5'),(42,'B6'),(49,'B7'),(56,'B8'),(57,'C#1'),(62,'C#2'),(67,'C#3'),(72,'C#4'),(77,'C#5'),(82,'C#6'),(87,'C#7'),(1,'C1'),(8,'C2'),(15,'C3'),(22,'C4'),(29,'C5'),(36,'C6'),(43,'C7'),(50,'C8'),(58,'D#1'),(63,'D#2'),(68,'D#3'),(73,'D#4'),(78,'D#5'),(83,'D#6'),(88,'D#7'),(2,'D1'),(9,'D2'),(16,'D3'),(23,'D4'),(30,'D5'),(37,'D6'),(44,'D7'),(51,'D8'),(3,'E1'),(10,'E2'),(17,'E3'),(24,'E4'),(31,'E5'),(38,'E6'),(45,'E7'),(52,'E8'),(59,'F#1'),(64,'F#2'),(69,'F#3'),(74,'F#4'),(79,'F#5'),(84,'F#6'),(89,'F#7'),(4,'F1'),(11,'F2'),(18,'F3'),(25,'F4'),(32,'F5'),(39,'F6'),(46,'F7'),(53,'F8'),(60,'G#1'),(65,'G#2'),(70,'G#3'),(75,'G#4'),(80,'G#5'),(85,'G#6'),(90,'G#7'),(5,'G1'),(12,'G2'),(19,'G3'),(26,'G4'),(33,'G5'),(40,'G6'),(47,'G7'),(54,'G8');
/*!40000 ALTER TABLE `Notes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-19 20:58:56
