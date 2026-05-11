// ============================================================
// EVALUACIÓN SUMATIVA 2 — TIENDA ONLINE DE COMPUTADORES
// Nombre del estudiante: _____________________________________
// Fecha: ____________________________________________________
// ============================================================


// ============================================================
// REQUERIMIENTO 1: BINDING DE DATOS
// ============================================================
// TODO: Defina una constante llamada 'listaProductos' que almacene
// un arreglo con exactamente 5 objetos. Cada objeto representa un
// computador y debe tener las siguientes propiedades:
//   - id     : número único
//   - nombre : string con el nombre del producto
//   - precio : número (valor en pesos)
//   - stock  : número (al menos 1 producto debe tener stock: 0)
//
// Ejemplo de la estructura esperada (NO copiar, crear los propios):
//   { id: 1, nombre: "Laptop Gamer X1", precio: 799990, stock: 5 }

// const listaProductos = [...];


// ============================================================
// REQUERIMIENTO 2: ACUMULADOR GLOBAL DEL CARRITO
// ============================================================
// TODO: Declare un binding con 'let' para guardar el total acumulado
// de la compra. Debe estar en el ámbito global (fuera de funciones).

// let totalCompra = ...;


// ============================================================
// REQUERIMIENTO 3: FUNCIÓN DE RENDERIZADO DE LA TIENDA
// ============================================================
// TODO: Implemente la función 'renderizarTienda' siguiendo estos pasos:
//
//   1. Seleccione el elemento con id "contenedor-productos" del DOM.
//
//   2. Recorra 'listaProductos' usando forEach o for...of.
//
//   3. Para cada producto, construya el HTML de su tarjeta utilizando
//      Literales de Plantilla (backticks `...${variable}...`).
//      La tarjeta debe mostrar:
//        - Nombre del producto  (dentro de un <h3>)
//        - Precio formateado    (dentro de un elemento con clase "precio")
//        - Stock disponible     (dentro de un elemento con clase "stock")
//        - Botón "Agregar"      (clase "btn-agregar", con atributo
//                                data-precio igual al precio del producto)
//      Use como clase base "tarjeta-producto" para el div contenedor.
//
//   4. Dentro del bucle, use un if para verificar si stock === 0.
//      Si se cumple, agregue la clase "sin-stock" al div de la tarjeta.
//      ⚠️ Esta clase NO debe escribirse a mano en el HTML.
//
//   5. Inserte cada tarjeta en el contenedor usando innerHTML +=
//      o insertAdjacentHTML('beforeend', ...).

// function renderizarTienda() {
//   ...
// }


// ============================================================
// REQUERIMIENTO 4: GESTIÓN DEL CARRITO
// ============================================================
// TODO: Implemente la función 'agregarAlCarrito' que reciba el precio
// de un producto como parámetro y realice lo siguiente:
//   1. Súmelo al binding acumulador 'totalCompra'.
//   2. Actualice el texto del elemento con id "total-compra" en el DOM
//      usando la propiedad textContent para reflejar el nuevo total.
//      Ejemplo de formato: "$1.299.980"

// function agregarAlCarrito(precio) {
//   ...
// }

// TODO: Luego de llamar a renderizarTienda(), seleccione TODOS los
// botones con clase "btn-agregar" usando querySelectorAll y recórralos
// con forEach. A cada botón asígnele un escuchador del evento 'click'
// que llame a agregarAlCarrito con el precio capturado desde el
// atributo data-precio del botón (recuerde convertirlo a número).


// ============================================================
// REQUERIMIENTO 5: VALIDACIÓN DEL FORMULARIO DE PAGO
// ============================================================
// TODO: Seleccione el formulario con id "form-pago" y asígnele un
// escuchador del evento 'submit'. Dentro de la función:
//
//   1. Use evento.preventDefault() para evitar la recarga de la página.
//
//   2. Capture el valor de los cuatro campos del formulario:
//        - #nombre   → Nombre completo
//        - #correo   → Correo electrónico
//        - #tarjeta  → Número de tarjeta Visa
//        - #cvv      → CVV
//
//   3. Valide cada campo con las siguientes Expresiones Regulares
//      (generadas con IA, documéntelas en el ANEXO al final):
//        - Nombre  : mínimo 3 caracteres, solo letras y espacios.
//        - Correo  : formato válido de email (usuario@dominio.ext).
//        - Tarjeta : 16 dígitos que comiencen estrictamente con el número 4.
//        - CVV     : exactamente 3 dígitos numéricos.
//
//   4. Si alguna validación falla:
//        - Muestre el mensaje de error en el elemento con id
//          "mensaje-validacion" usando textContent.
//        - Cambie el color del texto a rojo (style.color = "red").
//        - Detenga la ejecución (no procese el pago).
//
//   5. Si todo es válido:
//        - Muestre un mensaje de éxito en "mensaje-validacion"
//          indicando el total final de la compra.
//        - Cambie el color del texto a verde.

// document.getElementById("form-pago").addEventListener("submit", function(evento) {
//   ...
// });


// ============================================================
// LLAMADA INICIAL — NO ELIMINAR ESTA SECCIÓN
// ============================================================
// TODO: Llame a renderizarTienda() aquí para que la tienda se
// muestre al cargar la página. Luego agregue los escuchadores
// de los botones "Agregar" (Requerimiento 4).

// renderizarTienda();
// ...


// ============================================================
// ANEXO: DOCUMENTACIÓN DE PROMPTS E IA (OBLIGATORIO)
// ============================================================
// Herramienta de IA utilizada : ______________________________
//
// Prompt usado para Regex de Tarjeta Visa:
//   "___________________________________________________________"
//
// Prompt usado para Regex de CVV:
//   "___________________________________________________________"
//
// Referencia APA del uso de IA:
//   [Autor/Organización]. ([Año]). [Nombre del modelo]
//   ([Versión]) [Modelo de lenguaje grande]. [URL]
//
//   Ejemplo:
//   OpenAI. (2024). ChatGPT (Versión del 24 de mayo)
//   [Modelo de lenguaje grande]. https://chat.openai.com
// ============================================================
