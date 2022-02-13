const formulario = document.querySelector("#form");
const lista = document.querySelector("#lista");

eventos();

function eventos() {
  formulario.addEventListener("submit", agregarPost);

  lista.addEventListener("click", borrarPost);
}

// Función que envia el formulario
function agregarPost(evento) {
  evento.preventDefault();

  const title = document.getElementById("title").value; //Obtenemos el texto que ingresa el usuario en el campo titulo
  const description = document.getElementById("description").value; //Obtenemos el texto que ingresa el usuario en el campo descripcion

  text = `${title} - ${description}`; //Concatenamos los 2 campos en la variable text

  const li = document.createElement("li"); // Solo Creamos la etiqueta li
  li.innerText = text; //Agregamos contenido a la etiqueta <li>
  //Añade a la lista
  lista.appendChild(li);

  //Crear boton de eliminar
  const botonBorrar = document.createElement("a"); // Solo Creamos la etiqueta <a> y la guardamos en la constante botonBorrar
  botonBorrar.classList = "borrar-post"; // Añadimos una clase llamada borrar-post a La etiqueta <a>
  botonBorrar.innerText = "X"; // A la etiqueta <a> le agregamos como contenido una X que servira para borrar el post
  //Añade el boton de borrar el post
  li.appendChild(botonBorrar); // Añadimos como hijo la etiqueta <a> class="borrar-post", su padre será la etiqueta <li>
}

//Eliminar el post del DOM
function borrarPost(e) {
  e.preventDefault(); // Quitamos el evento por defecto
  if (e.target.className === "borrar-post") {
    //Si el nombre de la clase es borrar-post, entonces
    e.target.parentElement.remove(); //Sube un nivel, del hijo al padre y eliminamos la seleccion
  }
}
