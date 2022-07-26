# Cifrado César

## Índice
- [Cifrado César](#cifrado-césar)
  - [Índice](#índice)
  - [1. Preámbulo](#1-preámbulo)
  - [2. Resumen del proyecto](#2-resumen-del-proyecto)
  - [3. Proceso de diseño](#3-proceso-de-diseño)
    - [Maquetación](#maquetación)
    - [Código](#código)
  - [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
    - [HTML](#html)
    - [CSS](#css)
    - [Web APIs](#web-apis)
    - [JavaScript](#javascript)
    - [Control de versiones](#control-de-versiones)
    - [User-centricity](#user-centricity)
    - [product-design](#product-design)

## 1. Preámbulo
Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## 2. Resumen del proyecto
Este proyecto es una aplicación web que sirve para que el usuario pueda cifrar y descifrar un texto, indicando un desplazamiento específico de caracteres (offset). La temática elegida es: **“códigos entre hermanos” ** y será construida utilizando HTML, CSS y JavaScript. 

## 3. Proceso de diseño

### Maquetación
Partiendo de la temática, se definió a los usuarios como jóvenes de 15-30 años. El diseño busca ser minimalista y utiliza 4 colores para hacer alusión a tres cosas:
* Blanco y gris para representar una terminal
* Rojo para representar un mensaje “incorrecto” (en este caso, que no puede ser leído)
* Verde para representar los mensajes “correctos” (que pueden ser leídos)

### Código
A partir de la maquetación, lo primero que se realiza es el HTML y la definición de los estilos en CSS. Donde encontramos bloques centrados, cajas para insertar texto del mensaje y el numero del offset. Y finalmente dos botones para responder a las acciones del cifrado y descifrado.
Posteriormente en el JavaScript agregamos las funciones de los botones y elaboramos la función de cifrado partiendo de la fórmula: **x-65+n)%26+65** donde _x_ representa el número ASCII del carácter del texto a cifrar y _n_ el número de posiciones a recorrer (offset). Una vez obtenida esta fórmula, agregamos condicionales para cambiar minúsculas y caracteres especiales.


## Objetivos de aprendizaje

### HTML
* [X] Uso de HTML semántico

### CSS
* [ ] Uso de selectores de css
* [X] Modelo de caja

### Web APIs
* [X] Uso de selectores del DOM
* [X] Manejo de eventos del DOM
* [X] Manipulación dinámica del DOM

### JavaScript
* [X] Tipos de datos primitivos
* [ ] Strings
* [X] Variables
* [X] Uso de condicionales
* [ ] Uso de bucles
* [X] Funciones
* [ ] Pruebas unitarias
* [X] Módulos ECMAscript
* [ ] Uso de linter
* [ ] Uso de identificadores descriptivos

### Control de versiones
* [X] Instalación y configuración de git
* [ ] Control de versiones con git
* [X] Github

### User-centricity
* [X] Diseñar un producto o servicio poniendo a la usuaria en el centro

### product-design
* [ ] Crear prototipos de alta fidelidad que incluyan interacciones
* [X] Seguir los principios básicos de diseño visual
