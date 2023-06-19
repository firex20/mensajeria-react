-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-06-2023 a las 10:00:11
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mensajeria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `remitente` varchar(20) NOT NULL,
  `destinatario` varchar(20) NOT NULL,
  `asunto` varchar(100) NOT NULL,
  `cuerpo` text NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 3
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `remitente`, `destinatario`, `asunto`, `cuerpo`, `estado`) VALUES
(1, 'Pepe', 'ana', 'Cumpleaños', 'Hola ana te invito a mi fiesta de cumpleaños, un saludo.', 3),
(2, 'ana', 'Pepe', 'Felicidades!', 'Felicidades, alli estare, un saludo.', 3),
(22, 'ana', 'pepe', 'prueba', 'pruebasa', 3),
(29, 'ana', 'juan', 'prueba', 'prueba', 3),
(32, 'ana', 'pepe', 'pruebaaa', 'vgwasfvr', 3),
(36, 'pepe', 'juan', 'test3', 'rgaaqgav\n', 2),
(38, 'juan', 'pepe', 'testjuan', 'test de mensaje', 3),
(39, 'pepe', 'juan', 'Prueba mensaje largo', '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"', 3),
(40, 'pepe', 'ana', 'test de pulsar boton', 'test de pulsar el botonsito.', 3),
(41, 'pepe', 'ana', '', '', 1),
(42, 'pepe', 'ana', 'test 2 de pulsar el botoncito', 'fqeafq', 3),
(43, 'pepe', 'ana', 'test 3 de pulsar el botonsito', 'dacqacfqace', 3),
(44, 'pepe', 'ana', '', '', 1),
(45, 'pepe', 'ana', 'prueba botoncillo 4', 'fqfe', 1),
(46, 'pepe', 'ana', 'testt', 'SVG<<SW', 1),
(47, 'pepe', 'ana', 'eqga', 'gaeqeg', 1),
(48, 'pepe', 'ana', 'gqeag4', 'qg4g4', 1),
(49, 'pepe', 'ana', 'rfawgr', 'rfqra', 1),
(50, 'pepe', 'ana', 'efqf', 'gsrgw', 1),
(51, 'pepe', 'ana', 'faszva', '', 1),
(52, 'pepe', 'ana', 'vavqaegqgarv', '', 1),
(53, 'pepe', 'ana', 'aqrvaqgrg', '', 1),
(54, 'pepe', 'ana', 'vqaegaav', '', 1),
(55, 'pepe', 'ana', 'vqaearqrb', '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre` varchar(20) NOT NULL,
  `clave` varchar(20) NOT NULL,
  `nombreCompleto` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre`, `clave`, `nombreCompleto`) VALUES
('pepe', '1234', 'José Pérez'),
('ana', '4321', 'ana sanchez'),
('juan', '6789', 'Juan Martín');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
