Tarea

Hacer una extensión que:

* Agregue un botón (con su icono) en el toolbar. 
* Al oprimir el botón por primera vez, se obtendrá el texto de todos los elementos H1 de la página actual y se mostrará un panel flotante con el resultado de haberlos procesado acorde a los siguientes puntos del enunciado. Además, si el usuario presiona nuevamente el botón, el comportamiento será diferente: se debe remover el panel flotante. Y así, el comportamiento se irá alterando. 
* Tomar el texto de los elementos H1 y quedarse solo con las palabras de más de 5 letras. 
* Con esas palabras hacer un request GET a Wikipedia: https://es.wikipedia.org/w/index.php?fulltext=1&search=palabra1+palabra2+palabra3…
* Wikipedia nos va a contestar con una página HTML. De esa hay que quedarse con los títulos de las páginas wikipedia del resultado de la búsqueda (ver imagen abajo, los títulos están marcados con una línea roja). 
* Crear un panel blanco, flotante, sobre la página actual y ahí dentro mostrar los títulos extraídos, en una lista punteada. Stolo hacemos modificando el DOM (no utilizando el panel nativo del navegador)
* El panel de resultados no tiene que verse lindo, no importa el estilo. No usen ni bootstrap, ni CSS. Cuanto más simple, mejor.


La extension debe ser resuelta usando Orientacion a Objetos en JS con sintaxis de clases (como se define en el nuevo estándar JS ECMA 6)

