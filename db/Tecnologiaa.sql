-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2020 a las 06:18:49
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tecnologia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `IdCarrito` int(11) NOT NULL,
  `ProductoId` int(11) NOT NULL,
  `PrecioUnitario` int(15) NOT NULL,
  `UsuarioId` int(11) NOT NULL,
  `TotalDeArticulos` int(11) NOT NULL,
  `CategoriaDeArticulo` varchar(30) NOT NULL,
  `Descuento` decimal(9,2) NOT NULL DEFAULT 0.00,
  `FechaDePedido` datetime NOT NULL DEFAULT current_timestamp(),
  `EliminarProducto` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriasdeproductos`
--

CREATE TABLE `categoriasdeproductos` (
  `CategoriaId` int(11) NOT NULL,
  `NombreCategoria` varchar(50) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `urlImagen` varchar(200) NOT NULL,
  `EstaBorrado` int(11) NOT NULL DEFAULT 0,
  `CategoriaDeTiendaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriasdetiendas`
--

CREATE TABLE `categoriasdetiendas` (
  `CategoriaDeTiendaId` int(11) NOT NULL,
  `CategoriaDeTiendaNombre` varchar(30) NOT NULL,
  `Descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_marcas`
--

CREATE TABLE `categorias_marcas` (
  `IdCategoriasMarcas` int(11) NOT NULL,
  `IdMarca` int(11) NOT NULL,
  `CategoriaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_marcas_productos`
--

CREATE TABLE `categorias_marcas_productos` (
  `IdCategoriasMarcasProductos` int(11) NOT NULL,
  `IdCategoriasMarcas` int(11) NOT NULL,
  `ProductoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_proveedor_productos`
--

CREATE TABLE `categorias_proveedor_productos` (
  `IdProductoEnCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datosusuarios`
--

CREATE TABLE `datosusuarios` (
  `Numero` int(10) NOT NULL,
  `IdUser` varchar(20) NOT NULL,
  `PNombre` varchar(30) NOT NULL,
  `PApellido` varchar(30) NOT NULL,
  `IdDepto` varchar(30) NOT NULL,
  `NumCelular` int(25) NOT NULL,
  `Direccion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datosusuarios`
--

INSERT INTO `datosusuarios` (`Numero`, `IdUser`, `PNombre`, `PApellido`, `IdDepto`, `NumCelular`, `Direccion`) VALUES
(1, 'javi10', 'Javier', 'Hernandez', '10', 99336022, 'La Esperanza, Intibuca, Barrio llano de la virgen'),
(2, 'Anderson123', 'Anderson', 'Pineda', '11', 98372654, 'Barrio Santa Elena'),
(3, 'jon123', 'Jon', 'Vasquez', '6', 99764567, 'barrio san jorge\r\n'),
(4, 'Carlos', 'Carlos', 'Sandoval', '18', 98763544, 'Santa Cruz'),
(5, 'Arturo', 'Arturo', 'Sanchez', '5', 96785466, 'Barrio Santa Teresa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `IdDepto` int(10) NOT NULL,
  `Departamento` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`IdDepto`, `Departamento`) VALUES
(1, 'Atlantida'),
(2, 'Choluteca'),
(3, 'Colon'),
(4, 'Comayagua'),
(5, 'Copan'),
(6, 'Cortes'),
(7, 'El Paraíso'),
(8, 'Francisco Morazan'),
(9, 'Gracias a Dios'),
(10, 'Intibuca'),
(11, 'Islas de la Bahia'),
(12, 'Lempira'),
(13, 'Ocotepeque'),
(14, 'Olancho'),
(15, 'Santa Barbara'),
(16, 'La Paz'),
(17, 'Yoro'),
(18, 'Valle');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `IdMarca` int(11) NOT NULL,
  `NombreMarca` varchar(30) NOT NULL,
  `PaisMarca` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas_proveedor`
--

CREATE TABLE `marcas_proveedor` (
  `MarcaProveedorId` int(11) NOT NULL,
  `ProveedorId` int(11) DEFAULT NULL,
  `IdMarca` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `PersonaId` varchar(14) NOT NULL,
  `PersonaPrimerNombre` varchar(30) NOT NULL,
  `PersonaSegundoNombre` varchar(30) NOT NULL,
  `PersonaPrimerApellido` varchar(40) NOT NULL,
  `PersonaSegundoApellido` varchar(30) NOT NULL,
  `personaEdad` int(11) NOT NULL DEFAULT 0,
  `Nacionalidad` varchar(30) NOT NULL,
  `Ciudad` varchar(20) NOT NULL,
  `DireccionExacta` text NOT NULL,
  `FechaDeNacimiento` varchar(40) NOT NULL,
  `NumeroDeTelefono` varchar(30) NOT NULL,
  `TipoPersonaId` int(11) DEFAULT NULL,
  `EstaBorrado` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ProductoId` int(15) NOT NULL,
  `NombreProducto` varchar(50) NOT NULL,
  `Descripcion` varchar(50) NOT NULL,
  `Precio` decimal(30,0) NOT NULL,
  `urlImagen` varchar(100) NOT NULL,
  `ProveedorId` int(11) NOT NULL,
  `CategoriaId` int(11) NOT NULL,
  `EnStock` int(11) NOT NULL,
  `IdMarca` int(11) DEFAULT NULL,
  `EstaBorado` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `ProveedorId` int(11) NOT NULL,
  `NombreProveedor` varchar(20) DEFAULT NULL,
  `UbicacionDelProveedor` text DEFAULT NULL,
  `TelefonoProveedor` varchar(40) DEFAULT NULL,
  `CorreoElectronico` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrousuarios`
--

CREATE TABLE `registrousuarios` (
  `IdRegistroUsuario` int(11) NOT NULL,
  `UsuarioId` int(11) NOT NULL,
  `FechaRegistro` datetime NOT NULL DEFAULT current_timestamp(),
  `IpDeRegistro` varchar(40) NOT NULL,
  `RegistroCompletado` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Numero` int(10) NOT NULL,
  `IdUser` varchar(20) NOT NULL,
  `Correo` varchar(40) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `TipUser` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Numero`, `IdUser`, `Correo`, `Password`, `TipUser`) VALUES
(1, 'javi10', 'javi@gmail.com', '123', 2),
(2, 'Anderson123', 'and@gmail.com', 'admin', 1),
(10, 'jon123', 'jon@hmail.com', '1234', 1),
(11, 'Arturo', 'arturo@gmail.com', '12345', 1),
(12, 'Carlos', 'carlos@gmail.com', 'admin1', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioss`
--

CREATE TABLE `usuarioss` (
  `UsuarioId` int(11) NOT NULL,
  `UsuarioNombre` varchar(30) NOT NULL,
  `UsuarioPassword` varchar(254) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `EstaBorrado` int(11) NOT NULL DEFAULT 0,
  `EstaActivo` int(11) NOT NULL DEFAULT 1,
  `PersonaId` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariotipo`
--

CREATE TABLE `usuariotipo` (
  `TipUser` int(10) NOT NULL,
  `Nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuariotipo`
--

INSERT INTO `usuariotipo` (`TipUser`, `Nombre`) VALUES
(1, 'Cliente'),
(2, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(15) NOT NULL,
  `id-usuario` int(15) NOT NULL,
  `total` int(15) NOT NULL,
  `ventas` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`IdCarrito`),
  ADD KEY `ProductoId` (`ProductoId`),
  ADD KEY `UsuarioId` (`UsuarioId`);

--
-- Indices de la tabla `categoriasdeproductos`
--
ALTER TABLE `categoriasdeproductos`
  ADD PRIMARY KEY (`CategoriaId`),
  ADD KEY `CategoriaDeTiendaId` (`CategoriaDeTiendaId`);

--
-- Indices de la tabla `categoriasdetiendas`
--
ALTER TABLE `categoriasdetiendas`
  ADD PRIMARY KEY (`CategoriaDeTiendaId`),
  ADD UNIQUE KEY `CategoriaDeTiendaNombre` (`CategoriaDeTiendaNombre`);

--
-- Indices de la tabla `categorias_marcas`
--
ALTER TABLE `categorias_marcas`
  ADD PRIMARY KEY (`IdCategoriasMarcas`),
  ADD KEY `IdMarca` (`IdMarca`),
  ADD KEY `CategoriaId` (`CategoriaId`);

--
-- Indices de la tabla `categorias_marcas_productos`
--
ALTER TABLE `categorias_marcas_productos`
  ADD PRIMARY KEY (`IdCategoriasMarcasProductos`),
  ADD KEY `IdCategoriasMarcas` (`IdCategoriasMarcas`),
  ADD KEY `ProductoId` (`ProductoId`);

--
-- Indices de la tabla `categorias_proveedor_productos`
--
ALTER TABLE `categorias_proveedor_productos`
  ADD PRIMARY KEY (`IdProductoEnCategoria`);

--
-- Indices de la tabla `datosusuarios`
--
ALTER TABLE `datosusuarios`
  ADD PRIMARY KEY (`Numero`),
  ADD UNIQUE KEY `IdUser` (`IdUser`),
  ADD KEY `IdDepto` (`IdDepto`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD UNIQUE KEY `IdDepto` (`IdDepto`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`IdMarca`),
  ADD UNIQUE KEY `NombreMarca` (`NombreMarca`);

--
-- Indices de la tabla `marcas_proveedor`
--
ALTER TABLE `marcas_proveedor`
  ADD PRIMARY KEY (`MarcaProveedorId`),
  ADD KEY `ProveedorId` (`ProveedorId`),
  ADD KEY `IdMarca` (`IdMarca`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`PersonaId`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ProductoId`),
  ADD UNIQUE KEY `NombreProducto` (`NombreProducto`),
  ADD KEY `ProveedorId` (`ProveedorId`),
  ADD KEY `CategoriaId` (`CategoriaId`),
  ADD KEY `IdMarca` (`IdMarca`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`ProveedorId`);

--
-- Indices de la tabla `registrousuarios`
--
ALTER TABLE `registrousuarios`
  ADD PRIMARY KEY (`IdRegistroUsuario`),
  ADD KEY `UsuarioId` (`UsuarioId`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Numero`),
  ADD UNIQUE KEY `IdUser` (`IdUser`);

--
-- Indices de la tabla `usuarioss`
--
ALTER TABLE `usuarioss`
  ADD PRIMARY KEY (`UsuarioId`),
  ADD UNIQUE KEY `UsuarioNombre` (`UsuarioNombre`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `PersonaId` (`PersonaId`);

--
-- Indices de la tabla `usuariotipo`
--
ALTER TABLE `usuariotipo`
  ADD UNIQUE KEY `TipUser` (`TipUser`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `IdCarrito` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoriasdeproductos`
--
ALTER TABLE `categoriasdeproductos`
  MODIFY `CategoriaId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoriasdetiendas`
--
ALTER TABLE `categoriasdetiendas`
  MODIFY `CategoriaDeTiendaId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias_marcas`
--
ALTER TABLE `categorias_marcas`
  MODIFY `IdCategoriasMarcas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias_marcas_productos`
--
ALTER TABLE `categorias_marcas_productos`
  MODIFY `IdCategoriasMarcasProductos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias_proveedor_productos`
--
ALTER TABLE `categorias_proveedor_productos`
  MODIFY `IdProductoEnCategoria` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `datosusuarios`
--
ALTER TABLE `datosusuarios`
  MODIFY `Numero` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `IdMarca` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marcas_proveedor`
--
ALTER TABLE `marcas_proveedor`
  MODIFY `MarcaProveedorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ProductoId` int(15) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `ProveedorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registrousuarios`
--
ALTER TABLE `registrousuarios`
  MODIFY `IdRegistroUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Numero` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarioss`
--
ALTER TABLE `usuarioss`
  MODIFY `UsuarioId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`ProductoId`) REFERENCES `productos` (`ProductoId`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`UsuarioId`) REFERENCES `usuarioss` (`UsuarioId`);

--
-- Filtros para la tabla `categoriasdeproductos`
--
ALTER TABLE `categoriasdeproductos`
  ADD CONSTRAINT `categoriasdeproductos_ibfk_1` FOREIGN KEY (`CategoriaDeTiendaId`) REFERENCES `categoriasdetiendas` (`CategoriaDeTiendaId`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `categorias_marcas`
--
ALTER TABLE `categorias_marcas`
  ADD CONSTRAINT `categorias_marcas_ibfk_1` FOREIGN KEY (`IdMarca`) REFERENCES `marcas` (`IdMarca`),
  ADD CONSTRAINT `categorias_marcas_ibfk_2` FOREIGN KEY (`CategoriaId`) REFERENCES `categoriasdeproductos` (`CategoriaId`);

--
-- Filtros para la tabla `categorias_marcas_productos`
--
ALTER TABLE `categorias_marcas_productos`
  ADD CONSTRAINT `categorias_marcas_productos_ibfk_1` FOREIGN KEY (`IdCategoriasMarcas`) REFERENCES `categorias_marcas` (`IdCategoriasMarcas`),
  ADD CONSTRAINT `categorias_marcas_productos_ibfk_2` FOREIGN KEY (`ProductoId`) REFERENCES `productos` (`ProductoId`);

--
-- Filtros para la tabla `marcas_proveedor`
--
ALTER TABLE `marcas_proveedor`
  ADD CONSTRAINT `marcas_proveedor_ibfk_1` FOREIGN KEY (`ProveedorId`) REFERENCES `proveedores` (`ProveedorId`),
  ADD CONSTRAINT `marcas_proveedor_ibfk_2` FOREIGN KEY (`IdMarca`) REFERENCES `marcas` (`IdMarca`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`ProveedorId`) REFERENCES `proveedores` (`ProveedorId`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`CategoriaId`) REFERENCES `categoriasdeproductos` (`CategoriaId`),
  ADD CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`IdMarca`) REFERENCES `marcas` (`IdMarca`);

--
-- Filtros para la tabla `registrousuarios`
--
ALTER TABLE `registrousuarios`
  ADD CONSTRAINT `registrousuarios_ibfk_1` FOREIGN KEY (`UsuarioId`) REFERENCES `usuarioss` (`UsuarioId`);

--
-- Filtros para la tabla `usuarioss`
--
ALTER TABLE `usuarioss`
  ADD CONSTRAINT `usuarioss_ibfk_1` FOREIGN KEY (`PersonaId`) REFERENCES `personas` (`PersonaId`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
