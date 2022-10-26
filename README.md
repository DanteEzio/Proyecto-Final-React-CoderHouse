## 📄 _Descripción del Proyecto_

Nvidia-Ecommerce es un proyecto pensado en la venta de productos de la familia Nvidia:
- Laptops
- Monitores
- Tarjetas Gráficas

Esta idea es la continuación de un proyecto que fue entregado como trabajo final en el Curso de JS el cual pueden consultar en la siguiente liga:
🌐 -> https://danteezio.github.io/AJAX-FETCH/
_____________________________________________________________________
## 🔧 _Dependencias Utilizadas_
Las dependencias utilizadas fueron:
- Bootstrap: Este Framework me ayudó a facilitar el desarrollo de la página, ya que esta pensado en crear páginas de manera más rápida y desde un inicio de manera responsiva.
- SweetAlert: Esta herramienta me permitio generar alertas más personalizadas y más bonitas a la vista del usuario.
- React-Hook-Form: Me ayudo con la implementación del formulario ya que me permitio poder validar que la información ingresada en los Inputs de mi form fuera correcta y que en caso de que alguno de estos campos se encontrará vacío, impidiera completar la Compra.
- Fontawesome: Me ayudo con la implementación de algunos iconos utilizados a lo largo de la página.
__________________________________________________________________________
## ⚙️ _Funcionalidades_
- 🧭 Navbar: Se puede decir que es el alma de la página, ya que sin su existencia no sería posible navegar entre las diveras categorías creadas a lo largo de la página (Monitores, Tarjetas Gráficas, Laptops y el Cart-Widget).
- 🛒 Cart-Widget: Este Icono es el encargado de mostrarle al usuario la cantidad de productos que tiene agregados en el carrito de compras, así como tambien es el encargado de poder llevar al usuario al apartado del detalle del carrito de compras.
- Item List Container: Este componente es el encargado de poder mostrar (pintar) las lista de productos que se encuentra almacenada en mi base de datos de Firebase a través de una función asincrona.
- Item List: Este componente se encarga de mapear el arreglo de productos que se encuentra almacenada en mi base de datos.
- Item Detail: Este otro componente se encarga de mostrar el detalle de cada uno de mis productos almacenados en mi BD, así como también de brindar la opción de agregar un producto al carrito de compras y también poder aumentar o disminuir la cantidad agregada de ese producto en el carrito.
- 🛍️Checkout: Este componente es el encargado de generar la confirmación de compra, aquí podremos encontrar un formulario el cual deberá de ser llenado con la información personal del usuario, para que posteriormente pueda ser contactado.
- 📁 Carpeta Context: Este componente es el encargado de compartir toda la logica del carrito de compras en nuestra Aplicación Web.
- 📂 Carpeta Services: Esta carpeta contiene los recursos necesarios para poder conectar nuestra Aplicación Web con la BD de FireBase. Aquí encontraremos dos archivos, el primero (index.js) sera el encargado de portar la logica para poder generar la conexion de la aplicación Web con la BD y el segundo archivo (firestore) será el encargado de portar toda la logica para poder traer toda la información que necesitan nuestros componentes Item List Container (con la función "getProducts"), Item Detail Container (con la función "getProductsById") y Checkout (con la función "createOrder").

__________________________________________________________________________
## ✨ _Link del Proyecto Final almacenado en la Página Vercel_
🌐 Link: https://proyecto-final-react-six.vercel.app/
__________________________________________________________________________
## 🧟 _Pasos a Seguir Para Correr el Proyecto-Final de manera Local_

### 1. Clonando repositorio
- Crear una nueva carpeta con el nombre ✨Proyecto✨(ahí alojaremos la copia del proyecto).
- Dar click derecho sobre la carpeta que acabamos de crear -> (Proyecto) y seleccionamos la opción ✨Abrir en Terminal✨
- Copiar el siguiente Comando ✨git clone https://github.com/DanteEzio/REACT-PF-ENTREGA-2.git✨ pegarlo en la Terminal y seleccionar la tecla "Intro o Enter" de tu Teclado.
- Ahora veremos que se empezaran a almacenar todos los archivos del repositorio en la carpeta ✨Proyecto✨
- Una vez que concluya este proceso en la Terminal, procederemos a cerrarla y daremos por concluido la ✨Clonacion del Repositorio ✨en nuestra carpeta destino.

### 2. Instalando Módulos

- Dar click derecho del Mouse Sobre la Carpeta donde se Almaceno el Proyecto y seleccionamos la opción ✨Abrir con Visual Studio Code✨
- Una vez abierto el proyecto, dentro de Visual Studio Code seleccionaremos la carpeta "ReactProyectoFinal", posteriormente daremos click derecho del ratón sobre la carpeta y seleccionaremos la opción "Open in Integrated Terminal".
- Una vez abierta la Terminal de Visual Studio Code, copiaremos el siguiente comando (npm install) y lo ejecutaremos en la terminal.
- Una vez que termine la ejecución de este comando, nuestro Proyecto contará con los modulos requeridos para poder ser ejecutado.

### 3. Creando Base de Datos y Colecciones en FireBase
- Dentro de la plataforma de Firebase, crearemos una nueva Base de Datos (BD) con la herramienta Firestore Database.
- Dentro de nuestra BD, crearemos 2 nuevas colecciones:
----------------------------------------------------------------------------
--La primera coleccion se llamará "categories".
------Dentro de "categories" crearemos 3 nuevos documentos con los siguientes campos:
##### ------------------- Documento 1 (Laptops)  -------------------
##
| label | Laptops |
| ------ | ------ |
| order | 1 |
| slug | laptops |
##### ------------------- Documento 2 (Tarjetas Gráficas)  -------------------
##
| label | Tarjetas Gráficas |
| ------ | ------ |
| order | 2 |
| slug | tarjetas-graficas |
##### ------------------- Documento 3 (Monitores G-SYNC)  -------------------
##
| label | Monitores G-SYNC |
| ------ | ------ |
| order | 3 |
| slug | monitores |
----------------------------------------------------------------------
–La segunda colección se llamará “products”.
------Dentro de “products” crearemos 1 nuevo documento por cada producto que queramos agregar con los siguientes campos:
##### ✨Ejemplo✨
##
| categoria | laptops |
| ------ | ------ |
| descripcion | Laptop gamer ASUS TUF F15 15.6 pulgadas Full HD Intel Core i5 NVIDIA GeForce RTX 3050 8 GB RAM 512 GB SSD |
| id | 1 |
| img | https://raw.githubusercontent.com/DanteEzio/ImgFinalProyectReact/master/Laptop%20gamer%20ASUS%20TUF%20F15%20(1).avif |
| img2 | https://raw.githubusercontent.com/DanteEzio/ImgFinalProyectReact/master/Laptop%20gamer%20ASUS%20TUF%20F15%20(1).avif |
| img3 | https://raw.githubusercontent.com/DanteEzio/ImgFinalProyectReact/master/Laptop%20gamer%20ASUS%20TUF%20F15%20(1).avif |
| img4 | https://raw.githubusercontent.com/DanteEzio/ImgFinalProyectReact/master/Laptop%20gamer%20ASUS%20TUF%20F15%20(1).avif |
| nombre | Laptop gamer ASUS TUF F15 |
| pDescuento | 25199 |
| pReal | 29999 |
| sku | "1115216887" |
| stock | 19 |
----------------------------------------------------------------------
- Una vez creadas las dos colecciones de manera correcta podremos proceder a conectar Firebase con nuestro proyecto.

### 4. Conectando Firebase con nuestro Proyecto
- Para poder conectar FireBase con nuestro Proyecto de React, dentro del menu de Firebase ubicaremos la pestaña "Descripción general", ahí seleccionaremos la rondana que se encuentra en la parte derecha de la pestaña y seleccionaremos la opción con el nombre "Configuración del proyecto".
- Dentro de esta pestaña nos desplazaremos a la parte de abajo y ubicaremos un apartado con el nombre de "Tus apps".
- En este apartado seleccionaremos el botón azul "Agrega una App".
- Dentro de Agrega una App, seleccionaremos la opcion que tenga el Icono "</>".
- Ahora le pondremos un nombre a la App que queremos registrar, dejaremos la casilla que dice "Además, configura Firebase Hosting para esta app." en blanco y seleccionaremos el boton azul "Registrar App".
- Posteriormente encontraremos unas credenciales con la siguiente información:
##
| apiKey: | ******** |
| ------ | ------ |
| authDomain: | ******** |
| projectId: | ******** |
| storageBucket: | ******** |
| messagingSenderId: | ******** |
| appId: | ******** |

- Con base en estos valores obtenidos, nos dirigiremos a Visual Studio Code, daremos click derecho del mouse en la carpeta que aloja nuestro proyecto (ReactProyectoFinal) seleccionaremos la opcion que dice "New File ó Nuevo Archivo" y le pondremos el nombre ".env".
- Una vez creado este archivo lo abriremos e ingresaremos las credenciales obtenidas en Firebase como se muestra a continuación en el siguiente ejemplo:
REACT_APP_apiKey= ****************************
REACT_APP_authDomain= ****************************
REACT_APP_projectId= ****************************
REACT_APP_storageBucket= ****************************
REACT_APP_messagingSenderId= ****************************
REACT_APP_appId=1:842526005950: ****************************
-Finalmente, una vez comprobando que los valores ingresados son correcto, guardaremos el archivo y nuestro proyecto se encontrará listo para ser ejecutado.

### 5. Corriendo nuestro Proyecto
- Para poder correr el proyecto, dentro de la terminal, ejecutaremos el siguiente comando:
*** npm start ***
- Finalmente, se abrirá el navegador que tenemos predefinido y podremos utilizar el proyecto, sin ningún inconveniente.

##  ************* Fin de Instalación **************
##
##