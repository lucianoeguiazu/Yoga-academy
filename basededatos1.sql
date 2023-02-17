-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-01-2023 a las 02:26:35
-- Versión del servidor: 5.7.40
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basededatos1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

DROP TABLE IF EXISTS `registros`;
CREATE TABLE IF NOT EXISTS `registros` (
  `autor` varchar(50) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `contenido` varchar(1000) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`autor`, `titulo`, `subtitulo`, `contenido`, `id`, `createdAt`, `updatedAt`) VALUES
('Lujan', 'Titulo12', 'Subtitulo12', 'hola, como estas? el yoga es bueno', 18, '2023-01-30', '2023-01-30'),
('damian', 'Titulo2', 'Subtitulo2', 'hola esto es una prueba 2', 17, '2023-01-30', '2023-01-30'),
('Luciano', 'Titulo1', 'Subtitulo1', 'hola esto es una prueba', 16, '2023-01-30', '2023-01-30'),
('Luciano', 'Titulo1', 'Subtitulo1', 'hola', 15, '2023-01-29', '2023-01-29'),
('Luciano', 'Damian', 'Hla', 'asdassdaasdasadaa', 14, '2023-01-29', '2023-01-29'),
('Luciano', 'Titulo1', 'dasdas', 'dasadsa', 13, '2023-01-29', '2023-01-29');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
