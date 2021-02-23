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
-- Table structure for table `Donators`
--

DROP TABLE IF EXISTS `Donators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Donators` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `note_id` int NOT NULL,
  `donation_text` text,
  PRIMARY KEY (`id`),
  KEY `Donators_Notes_id_fk` (`note_id`),
  CONSTRAINT `Donators_Notes_id_fk` FOREIGN KEY (`note_id`) REFERENCES `Notes` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Donators`
--

LOCK TABLES `Donators` WRITE;
/*!40000 ALTER TABLE `Donators` DISABLE KEYS */;
INSERT INTO `Donators` VALUES (1,'Martin','Ojamets','a@a.a',22,'Olen pikk aeg tudeng siin koolis ning see on toonud õnne'),(2,'Baba','Rogo','a@a.a',22,'Ma kirjutan siia mingi pika teksti et siis on näha kuidas töötab CSSis text cutoff kui donation text on liiga pikk. Ma loodan et see on piisavalt pikk tekst mudu ma pean hakkama midagi ümber mõtlema. või nh oleme ausad mudu ma pean siia midagi juurde mõtlema'),(3,'Kolmas','inimene','a@a.a',22,'Kõigile õnne :)'),(4,'Neljas','inimene','a@a.a',22,'Ka mina olin siin koolis inimene ja sain palju sõpru'),(5,'Viies','Inimene','a@a.a',22,'Õppisin muusika koolis palju asju'),(6,'Kuues','Inimene','a@a.a',23,'HAHA ma olen hoopis teisel noodil! Ja sa ei saanudgi teada!'),(7,'Jekaterina','Mihhailovanoviski','a@a.a',23,'Ma kirjutan siia mingi pika teksti et siis on näha kuidas töötab CSSis text cutoff kui donation text on liiga pikk. Ma loodan et see on piisavalt pikk tekst mudu ma pean hakkama midagi ümber mõtlema. või nh oleme ausad mudu ma pean siia midagi juurde mõtlema');
/*!40000 ALTER TABLE `Donators` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-19 20:59:22
