- Antes de ejecutar el proyecto debe de instalar todas las dependencias con npm install o yarn
- Luego puede ejecutar el programa cli escribiendo npm start / npm run start en su consola

config.json
```JSON
{
    "qty": 50, 
    "chars": 6,
    "algorithm": "randomAlphabetic",
    "prefix": "pre", 
    "sufix": "2021",
    "charsets": { 
        "numbers": "[...]",
        "alphabetic": "[...]",
        "alphanumeric": "[...]",
        "alphanumericSymbols": "[...]"
    }
}
```
* **qty**(required): number of coupons to generate
* **chars**(required): chars of each coupon (sufix/prefix chars not included)
* **algorithm**(required): algorithm used for the coupons geneartion
    - **Available algorithms**: randomNumber, randomAlphabetic, randomAlphaNumeric, randomalphanumericSymbols

* **charsets**(required): available charsets to use for generating the coupon chars
* **prefix**(optional)(default: empty string): add prefix to each coupon
* **sufix**(optional)(default: empty string): add sufix to each coupon

---

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