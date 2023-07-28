-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: nipa_ticket
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` longtext,
  `contact_info` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(45) DEFAULT 'pending',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (19,'Ticket 1','Description for Ticket 1','Contact Info 1','2023-07-28 06:33:25','2023-07-28 06:33:25','pending'),(20,'Ticket 2','Description for Ticket 2','Contact Info 2','2023-07-28 06:33:25','2023-07-28 06:33:25','pending'),(21,'Ticket 3','Description for Ticket 3','Contact Info 3','2023-07-28 06:33:25','2023-07-28 06:33:25','pending'),(22,'Ticket 4','Description for Ticket 4','Contact Info 4','2023-07-28 06:33:25','2023-07-28 06:33:25','pending'),(23,'Ticket 5','Description for Ticket 5','Contact Info 5','2023-07-28 06:33:25','2023-07-28 06:33:25','pending'),(24,'Ticket 6','Description for Ticket 6','Contact Info 6','2023-07-28 06:33:25','2023-07-28 06:33:25','accepted'),(25,'Ticket 7','Description for Ticket 7','Contact Info 7','2023-07-28 06:33:25','2023-07-28 06:33:25','accepted'),(26,'Ticket 8','Description for Ticket 8','Contact Info 8','2023-07-28 06:33:25','2023-07-28 06:33:25','accepted'),(27,'Ticket 9','Description for Ticket 9','Contact Info 9','2023-07-28 06:33:25','2023-07-28 06:33:25','accepted'),(28,'Ticket 10','Description for Ticket 10','Contact Info 10','2023-07-28 06:33:25','2023-07-28 06:33:25','resolved'),(29,'Ticket 11','Description for Ticket 11','Contact Info 11','2023-07-28 06:33:25','2023-07-28 06:33:25','resolved'),(30,'Ticket 12','Description for Ticket 12','Contact Info 12','2023-07-28 06:33:25','2023-07-28 06:33:25','resolved'),(31,'Ticket 13','Description for Ticket 13','Contact Info 13','2023-07-28 06:33:25','2023-07-28 06:33:25','resolved'),(32,'Ticket 14','Description for Ticket 14','Contact Info 14','2023-07-28 06:33:25','2023-07-28 06:33:25','resolved'),(33,'Ticket 15','Description for Ticket 15','Contact Info 15','2023-07-28 06:33:25','2023-07-28 06:33:25','rejected'),(34,'Ticket 16','Description for Ticket 16','Contact Info 16','2023-07-28 06:33:25','2023-07-28 06:33:25','rejected'),(35,'Ticket 17','Description for Ticket 17','Contact Info 17','2023-07-28 06:33:25','2023-07-28 06:33:25','rejected'),(36,'Ticket 18','Description for Ticket 18','Contact Info 18','2023-07-28 06:33:25','2023-07-28 06:33:25','rejected'),(37,'Ticket 19','Description for Ticket 19','Contact Info 19','2023-07-28 06:33:25','2023-07-28 06:33:25','rejected'),(38,'Ticket 20','Description for Ticket 20','Contact Info 20','2023-07-28 06:33:25','2023-07-28 06:33:25','rejected');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-28 13:38:24
