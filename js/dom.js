       // El DOM (Document Object Model) es una interfaz de programación que permite a los desarrolladores manipular el contenido y la estructura de un documento HTML o XML.
        // Proporciona una representación estructurada del documento como un árbol de nodos, donde cada nodo representa un elemento, atributo o texto.

        // Ejemplo de acceso y modificación de elementos del DOM
        document.addEventListener('DOMContentLoaded', () => {
            const title = document.head.querySelector('title');
            title.textContent = 'DOM Prueba';
            // console.log(title);
        });

        // El DOM es fundamental para el desarrollo web, ya que permite interactuar con el contenido de la página y responder a eventos del usuario.

        console.log("-----------Elementos del DOM-----------------");

        /*
        - DOM (Document Object Model):
            * Permite manipular el contenido y la estructura de un documento HTML o XML.
            * Proporciona una representación estructurada del documento como un árbol de nodos.
            * Permite acceder y modificar elementos, atributos y estilos.

        - Métodos comunes del DOM:
            * `getElementById`: Obtiene un elemento por su ID.
            * `querySelector`: Selecciona el primer elemento que coincide con un selector CSS.
            * `createElement`: Crea un nuevo elemento HTML.
            * `appendChild`: Añade un nodo hijo a un nodo padre.
            * `removeChild`: Elimina un nodo hijo de un nodo padre.
             
        - Eventos:
            * Permiten manejar interacciones del usuario, como clics y teclas.
            * Se pueden añadir escuchadores de eventos para responder a acciones específicas.

        - Manipulación de estilos:
            * Se pueden modificar los estilos CSS directamente desde JavaScript utilizando propiedades del estilo o clases CSS.
             
        */

       console.log(document.head.title='DOM Prueba2');
        console.log(window.document);
        console.log(document);
        console.log(document.head);
        console.log(document.body);
        console.log(document.documentElement.lang='es');
        console.log(document.documentElement);
        console.log(document.doctype);
        console.log(document.characterSet);
        console.log(document.title);
        console.log(document.links);
        console.log(document.images);
        console.log(document.forms);
        console.log(document.styleSheets);
        console.log(document.scripts);
        
        
        

       