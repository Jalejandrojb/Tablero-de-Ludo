/*declaracion de variables:
<------------------------------------------------------------------>*/

//Arreglos que contienen los elementos HTML que conforman las casillas 
const casilla = [
{}, {}, {}, {}, {}, {}, 
{}, {}, {}, {}, {}, {}, 
{}, {}, {}, {}, {}, {},
{}, {}, {}, {}, {}, {},	//Arreglo que contiene los elementos HTML
{}, {}, {}, {}, {}, {},	//que conforman las casillas blancas del trablero
{}, {}, {}, {}, {}, {},
{}, {}, {}, {}, {}, {},
{}, {}, {}, {}, {}, {},
{}, {}, {}, {}]

const casillaAzul = [{}, {}, {}, {}, {}]
const casillaAmarilla = [{}, {}, {}, {}, {}]	//Arreglos que contienen los elementos HTML
const casillaRoja = [{}, {}, {}, {}, {}]		//que conforman las casillas de colores
const casillaVerde = [{}, {}, {}, {}, {}]

//Objetos que representan a los jugadores
const jugadorAzul = {
	ficha1: null,
	ficha2: null,
	ficha3: null,
	ficha4: null,
	respawn1: document.getElementById("respawnAzul1"),
	respawn2: document.getElementById("respawnAzul2"),
	respawn3: document.getElementById("respawnAzul3"),
	respawn4: document.getElementById("respawnAzul4"),
	salida: 0,
	meta: 50,
	puntos: 0,
	marcador: document.getElementById("marcadorAzul"),
	numeroJugador: 1
}

const jugadorAmarillo = {
	ficha1: null,
	ficha2: null,
	ficha3: null,
	ficha4: null,
	respawn1: document.getElementById("respawnAmarillo1"),
	respawn2: document.getElementById("respawnAmarillo2"),
	respawn3: document.getElementById("respawnAmarillo3"),
	respawn4: document.getElementById("respawnAmarillo4"),
	salida: 13,
	meta: 11,
	puntos: 0,
	marcador: document.getElementById("marcadorAmarillo"),
	numeroJugador: 2
}

const jugadorRojo = {
	ficha1: null,
	ficha2: null,
	ficha3: null,
	ficha4: null,
	respawn1: document.getElementById("respawnRojo1"),
	respawn2: document.getElementById("respawnRojo2"),
	respawn3: document.getElementById("respawnRojo3"),
	respawn4: document.getElementById("respawnRojo4"),
	salida: 26,
	meta: 24,
	puntos: 0,
	marcador: document.getElementById("marcadorRojo"),
	numeroJugador: 3
}

const jugadorVerde = {
	ficha1: null,
	ficha2: null,
	ficha3: null,
	ficha4: null,
	respawn1: document.getElementById("respawnVerde1"),
	respawn2: document.getElementById("respawnVerde2"),
	respawn3: document.getElementById("respawnVerde3"),
	respawn4: document.getElementById("respawnVerde4"),
	salida: 39,
	meta: 37,
	puntos: 0,
	marcador: document.getElementById("marcadorVerde"),
	numeroJugador: 4
}



const dado = document.getElementById("dado")
const botonJugar = document.getElementById("BotonInicio")
let posDado = true	//valor de referencia para hacer girar el dado de izquierda a derecha


obtenerCasillas()
habilitarDado()


/*definicion de funciones:
<------------------------------------------------------------------>*/

function ocultarBoton() {

	botonJugar.style.display="none"

} 

function habilitarDado() {

	dado.addEventListener('click', tirarDado)

}

function tirarDado() {

	let x = Math.floor(Math.random() * 6) + 1  //genera un numero aleatorio entre 1 y 6

	if (posDado === true) {
		dado.classList.add('AnimacionDado')
		posDado = false;
	}else {
		dado.classList.remove('AnimacionDado')
		posDado = true;
	}
		dado.innerHTML = x	//cambia el contenido del dado al numero aleatorio en x
		return x;	//retorna el numero aleatorio de la tirada

}

/*Funcion que almacena en los arreglos los elementos HTML,
  que conforman las casillas y sus puestos*/
function obtenerCasillas() {

	const obtenerCasillaBlanca = (e, i, arr) => {						//callbacks para 'forEach()' 
		arr[i].numero = document.getElementById("casilla" + (i + 1))
		arr[i].puesto1 = document.getElementById("puesto1-" + (i + 1))
		arr[i].puesto2 = document.getElementById("puesto2-" + (i + 1))	//almacena una casilla blanca i
		arr[i].puesto3 = document.getElementById("puesto3-" + (i + 1))	//en un arreglo
		arr[i].puesto4 = document.getElementById("puesto4-" + (i + 1))
	}
	const obtenerCasillaA = (e, i, arr) => {
		arr[i].numero = document.getElementById("casillaA" + (i + 1))	//almacena una casilla Azul i
		arr[i].puesto = document.getElementById("puesto1-A" + (i + 1))	//en un arreglo
	}																	
	const obtenerCasillaR = (e, i, arr) => {
		arr[i].numero = document.getElementById("casillaR" + (i + 1))	//almacena una casilla Roja i
		arr[i].puesto = document.getElementById("puesto1-R" + (i + 1))	//en un arreglo
	}																	
	const obtenerCasillaV = (e, i, arr) => {
		arr[i].numero = document.getElementById("casillaV" + (i + 1))	//almacena una casilla Verde i
		arr[i].puesto = document.getElementById("puesto1-V" + (i + 1))	//en un arreglo
	}																	
	const obtenerCasillaY = (e, i, arr) => {
		arr[i].numero = document.getElementById("casillaY" + (i + 1))	//almacena una casilla Amarilla i
		arr[i].puesto = document.getElementById("puesto1-Y" + (i + 1))	//en un arreglo																		//en un arreglo
	}																	
	
	casilla.forEach(obtenerCasillaBlanca)   	//Llena el arreglo casilla con las casillas blancas
	casillaAzul.forEach(obtenerCasillaA)		//Llena el arreglo casilla con las casillas azules
	casillaRoja.forEach(obtenerCasillaR)		//Llena el arreglo casilla con las casillas rojas
	casillaVerde.forEach(obtenerCasillaV)		//Llena el arreglo casilla con las casillas verdes
	casillaAmarilla.forEach(obtenerCasillaY)	//Llena el arreglo casilla con las casillas amarillas

}