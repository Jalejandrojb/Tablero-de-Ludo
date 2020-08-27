/*declaracion de variables:
<------------------------------------------------------------------>*/

//Arreglos que contienen los elementos HTML que conforman las casillas 
const casilla = Array(52).fill(null).map(e => ({}))
const casillaAzul = Array(5).fill(null).map(e => ({}))
const casillaAmarilla = Array(5).fill(null).map(e => ({}))
const casillaRoja = Array(5).fill(null).map(e => ({}))		
const casillaVerde = Array(5).fill(null).map(e => ({}))

//Objetos que representan a los jugadores
const jugadorAzul = {
	color: 'blue',
	ficha: [document.getElementById("piezaAzul1"),
	document.getElementById("piezaAzul2"),
	document.getElementById("piezaAzul3"),
	document.getElementById("piezaAzul4")],
	salida: 0,
	meta: 50,
	puntos: 0,
	marcador: document.getElementById("marcadorAzul"),
}

const jugadorAmarillo = {
	color: 'yellow',
	ficha: [document.getElementById("piezaAmarilla1"),
	document.getElementById("piezaAmarilla2"),
	document.getElementById("piezaAmarilla3"),
	document.getElementById("piezaAmarilla4")],
	salida: 13,
	meta: 11,
	puntos: 0,
	marcador: document.getElementById("marcadorAmarillo"),
}

const jugadorRojo = {
	color: 'red',
	ficha: [document.getElementById("piezaRoja1"),
	document.getElementById("piezaRoja2"),
	document.getElementById("piezaRoja3"),
	document.getElementById("piezaRoja4")],
	salida: 26,
	meta: 24,
	puntos: 0,
	marcador: document.getElementById("marcadorRojo"),
}

const jugadorVerde = {
	color: 'green',
	ficha: [document.getElementById("piezaVerde1"),
	document.getElementById("piezaVerde2"),
	document.getElementById("piezaVerde3"),
	document.getElementById("piezaVerde4")],
	salida: 39,
	meta: 37,
	puntos: 0,
	marcador: document.getElementById("marcadorVerde"),
}

const dado = document.getElementById("dado")
const botonJugar = document.getElementById("BotonInicio")
let posDado = true		//valor de referencia para hacer girar el dado de izquierda a derecha
let turno = [jugadorAzul, jugadorAmarillo, jugadorRojo, jugadorVerde]		//referencia para establecer a quien le toca jugar

obtenerCasillas()	//funcion que llena los arreglos con los elmentos HTML casillas 	


/*definicion de funciones:
<------------------------------------------------------------------>*/

function empezarPartida() {

	botonJugar.style.display="none"
	habilitarDado()

} 

function habilitarDado() {

	dado.addEventListener('click', jugar)

}

function deshabilitarDado() {

	dado.removeEventListener('click', jugar)

}

function jugar() {

	let tirada = tirarDado() //regresa el valor de la tirada (entre 1 y 6)
	let jugador = turno.shift()

	//habilitado para que solo juegue el jugador azul	
	turno.unshift(jugador) //cambiar el metodo a 'push' para habilitar los turnos
	habilitarFichas(jugador)

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

/*Funcion que habilita las fichas en la base del jugador de turno
para que salgan de la base 
Esta funcion se llama cada vez que se 'tira dado'*/
function habilitarFichas(jugador) {

	const sacarFicha = (ficha) => {

		ficha.classList.add('hidden')	//se oculta la ficha que se paso como parametro
		jugador.ficha.forEach((e, i) => e.removeEventListener('click', habilitar[i]))	//se anulan los listeners de todas las fichas
		ponerFicha(jugador, jugador.salida, ficha)		//funcion que marca la ficha en la posicion de salida del jugador de turno

	}

	const habilitar = [
		() => sacarFicha(jugador.ficha[0]),
		() => sacarFicha(jugador.ficha[1]),
		() => sacarFicha(jugador.ficha[2]),
		() => sacarFicha(jugador.ficha[3])
	] 

	jugador.ficha.forEach((e, i) => e.addEventListener('click', habilitar[i]))	//se habilitan las funciones al darle click a las fichas

}

//funcion que pone una ficha en el tablero, 
//teniendo en cuenta las fichas aliadas y enemigas
function ponerFicha(jugador, i, ficha) {

	/*funcion a la que se le va a pasar el puesto de la casilla
	donde corresponde poner la ficha, y lo marca en el tablero*/
	const marcarFicha = (fichasEnPuesto, puesto) => {

		fichasEnPuesto.push(ficha)
		if (fichasEnPuesto.length === 1) {  //Si es la primera ficha en el puesto:
			puesto.style.backgroundColor = jugador.color		//marca el color
		}
		else {							 //Si es la segunda ficha o mayor en la casilla:
			puesto.innerHTML = fichasEnPuesto.length		//marca el numero de fichas en el puesto 
		}

	}

	/*En este fragmento de codigo se decide que posicion sera enviada como parametro
	a la funcion 'marcasFicha', para marcar la ficha en esa posicion de la casillaa[i]*/
	if (casilla[i].fichasEnPuesto[0].length === 0 ||  	//Si no hay ninguna ficha en el puesto 1
	casilla[i].puesto[0].style.backgroundColor === jugador.color) { //O si el puesto 1 esta ocupado por una ficha del mismo color
		marcarFicha(casilla[i].fichasEnPuesto[0], casilla[i].puesto[0])
	}
	else if (casilla[i].fichasEnPuesto[1].length === 0 ||  //Si no hay ninguna ficha en el puesto 2
	casilla[i].puesto[1].style.backgroundColor === jugador.color) { //O si el puesto 2 esta ocupado por una ficha del mismo color
		marcarFicha(casilla[i].fichasEnPuesto[1], casilla[i].puesto[1])
	}
	else if (casilla[i].fichasEnPuesto[2].length === 0 ||  //Si no hay ninguna ficha en el puesto 3
	casilla[i].puesto[2].style.backgroundColor === jugador.color) { //O si el puesto 3 esta ocupado por una ficha del mismo color
		marcarFicha(casilla[i].fichasEnPuesto[2], casilla[i].puesto[2])
	}
	else if (casilla[i].fichasEnPuesto[3].length === 0 ||  ////Si no hay ninguna ficha en el puesto 4
	casilla[i].puesto[3].style.backgroundColor === jugador.color) {  //O si el puesto 3 esta ocupado por una ficha del mismo color
		marcarFicha(casilla[i].fichasEnPuesto[3], casilla[i].puesto[3])
	} 

}

function quitarFicha(i) {

	casilla[i].puesto1.style.backgroundColor = 'white'

}

//Funcion que hace pasar los turnos de los jugadores, cada jugador esta representado en un numero
function siguienteTurno() {

	turno++
	if (turno === 5)
		turno = 1

}

/*Funcion que almacena en los arreglos los elementos HTML,
  que conforman las casillas y sus puestos*/
function obtenerCasillas() {

	const obtenerCasillaBlanca = (e, i, arr) => {						//callbacks para 'forEach()' 
		arr[i].numeroCasilla = document.getElementById("casilla" + (i + 1))
		arr[i].puesto = [document.getElementById("puesto1-" + (i + 1)),
		document.getElementById("puesto2-" + (i + 1)),	
		document.getElementById("puesto3-" + (i + 1)),	
		document.getElementById("puesto4-" + (i + 1))],
		arr[i].fichasEnPuesto = [[], [], [], []]
	}

	const obtenerCasillaA = (e, i, arr) => {
		arr[i].Casilla = document.getElementById("casillaA" + (i + 1))	//almacena una casilla Azul i
		arr[i].puesto = document.getElementById("puesto1-A" + (i + 1))	//en un arreglo
	}	

	const obtenerCasillaR = (e, i, arr) => {
		arr[i].numeroCasilla = document.getElementById("casillaR" + (i + 1))	//almacena una casilla Roja i
		arr[i].puesto = document.getElementById("puesto1-R" + (i + 1))	//en un arreglo
	}	

	const obtenerCasillaV = (e, i, arr) => {
		arr[i].numeroCasilla = document.getElementById("casillaV" + (i + 1))	//almacena una casilla Verde i
		arr[i].puesto = document.getElementById("puesto1-V" + (i + 1))	//en un arreglo
	}	

	const obtenerCasillaY = (e, i, arr) => {
		arr[i].numeroCasilla = document.getElementById("casillaY" + (i + 1))	//almacena una casilla Amarilla i
		arr[i].puesto = document.getElementById("puesto1-Y" + (i + 1))	//en un arreglo																		//en un arreglo
	}																	
	
	casilla.forEach(obtenerCasillaBlanca)   	//Llena el arreglo casilla con las casillas blancas
	casillaAzul.forEach(obtenerCasillaA)		//Llena el arreglo casilla con las casillas azules
	casillaRoja.forEach(obtenerCasillaR)		//Llena el arreglo casilla con las casillas rojas
	casillaVerde.forEach(obtenerCasillaV)		//Llena el arreglo casilla con las casillas verdes
	casillaAmarilla.forEach(obtenerCasillaY)	//Llena el arreglo casilla con las casillas amarillas

}
