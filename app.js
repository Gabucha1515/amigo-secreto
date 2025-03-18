// Inicializa el array vacío para almacenar los nombres de los amigos.
let amigos = [];

// Agrega un amigo a la lista, validando la entrada y evitando duplicados.
function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo"); // Capturamos el valor del campo de entrada.
  let nombreAmigo = inputAmigo.value.trim().toLowerCase(); // Convertimos a minúsculas.
  
  //Valida la entrada.
  if (!nombreAmigo) {
    alert("Por favor, inserte un nombre.");
    return; // Salimos de la función si el nombre está vacío.
  }

  // Valida que no sea un número
  if (!isNaN(nombreAmigo)) {
    alert("Por favor, ingrese un nombre válido.");
    inputAmigo.value = ""; // Limpia el campo de entrada
    return;
  }

  if (amigos.includes(nombreAmigo)) {
    alert("Este nombre ya ha sido agregado.");
    return; // Salimos si el nombre ya existe en la lista.
  }

  if (amigos.length >= 5) { // Verifica si la lista tiene 5 o más amigos
    alert("No puede agregar más de 5 amigos.");
    inputAmigo.value = ""; // Limpia el campo de entrada.
    return; // Salimos si la lista ya tiene 5 amigos.
  }

  // Agrega el nombre a la lista de amigos.
  amigos.push(nombreAmigo); 

  // Limpia el campo de entrada y le da foco para agregar otro amigo.
  inputAmigo.value = ""; 
  inputAmigo.focus();

  actualizarListaAmigos();
}

// Actualiza la lista de amigos en la interfaz.
function actualizarListaAmigos() {
	let listaAmigos = document.getElementById("listaAmigos");

  // Limpia la lista antes de agregar los amigos actualizados.
	listaAmigos.innerHTML = "";

  // Agrega cada amigo como un elemento de lista (<li>).
	for (let i = 0; i < amigos.length; i++) {
		let item = document.createElement("li");
		item.textContent = amigos[i];
		listaAmigos.appendChild(item);
	}
}

// Selecciona un amigo al azar y lo muestra en la interfaz.
function sortearAmigo() {
  if (amigos.length === 0) {
  	alert("No hay amigos para sortear")
    return;
  }

  if (amigos.length === 1) {
    alert("Por favor, agregue al menos dos amigos para el sorteo.");
    return;
}

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
  
  // Limpia la lista de amigos después del sorteo.
  let limpiarLista = document.getElementById("listaAmigos");
  limpiarLista.innerHTML = "";
} 

// Reinicia el juego, limpiando la lista de amigos y el resultado.
function nuevoJuego() {
  amigos = [];
  actualizarListaAmigos();
  resultado.innerHTML = "";

  // Habilita el botón de agregar amigos y deshabilita el de sortear.
  document.querySelector(".button-draw").disabled = true;
  document.querySelector(".button-add").disabled = false;
} 