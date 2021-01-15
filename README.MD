- Antes de ejecutar el proyecto debe de instalar todas las dependencias con npm install o yarn
- Luego puede ejecutar el programa cli escribiendo npm start / npm run start en su consola

Posibles opciones para algorithm: secuential, randomNumber, randomAlphabetic, randomAlphaNumeric, randomalphanumericSymbols

Escribe un programa que al ejecutarse genere una lista de códigos/cupones de acuerdo a un tipo de cupón especificado en una configuración. La configuración se encuentra en la raiz del proyecto llamado "config.json".

Requisitos:

Cualquier tipo de implementación del generador de cupones es válida, pero deben usarse al menos dos algoritmos distintos. Simplemente actualizando la configuración debería ser suficiente para obtener una lista diferente de cupones.

El foco del ejercicio es la arquitectura de la solución y el uso correcto de la orientación a objetos y las ventajas que aporta, así como la aplicación de buenas prácticas (y principios SOLID) y patrones de diseño allá donde consideres necesario.

Ejemplo:

[cupones]
cantidad = 5
algoritmo = numerosSecuenciales

Salida:

000001
000002
000003
000004
000005