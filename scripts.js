/*declaracion de variables:
<------------------------------------------------------------------>*/

//Arreglos que contienen los elementos HTML que conforman las casillas 
const casilla = 
[{}, {}, {}, {}, {}, {}, 
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
	color: 'blue',
	ficha1: document.getElementById("piezaAzul1"),
	ficha2: document.getElementById("piezaAzul2"),
	ficha3: document.getElementById("piezaAzul3"),
	ficha4: document.getElementById("piezaAzul4"),
	salida: 0,
	meta: 50,
	puntos: 0,
	marcador: document.getElementById("marcadorAzul"),
}

const jugadorAmarillo = {
	color: 'yellow',
	ficha1: document.getElementById("piezaAmarilla1"),
	ficha2: document.getElementById("piezaAmarilla2"),
	ficha3: document.getElementById("piezaAmarilla3"),
	ficha4: document.getElementById("piezaAmarilla4"),
	salida: 13,
	meta: 11,
	puntos: 0,
	marcador: document.getElementById("marcadorAmarillo"),
}

const jugadorRojo = {
	color: 'red',
	ficha1: document.getElementById("piezaRoja1"),
	ficha2: document.getElementById("piezaRoja2"),
	ficha3: document.getElementById("piezaRoja3"),
	ficha4: document.getElementById("piezaRoja4"),
	salida: 26,
	meta: 24,
	puntos: 0,
	marcador: document.getElementById("marcadorRojo"),
}

const jugadorVerde = {
	color: 'green',
	ficha1: document.getElementById("piezaVerde1"),
	ficha2: document.getElementById("piezaVerde2"),
	ficha3: document.getElementById("piezaVerde3"),
	ficha4: document.getElementById("piezaVerde4"),
	salida: 39,
	meta: 37,
	puntos: 0,
	marcador: document.getElementById("marcadorVerde"),
}

const dado = document.getElementById("dado")
const botonJugar = document.getElementById("BotonInicio")
let posDado = true		//valor de referencia para hacer girar el dado de izquierda a derecha
let turno = 1		//referencia para establecer a quien le toca jugar

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

	switch (turno) {	//habilitado para que solo juegue el jugador azul	
		case 1:
			habilitarFichas(jugadorAzul)
			break;
		case 2:
			habilitarFichas(jugadorAmarillo)
			break;
		case 3:
			habilitarFichas(jugadorRojo)
			break;
		case 4:
			habilitarFichas(jugadorVerde)
			break;		
	}
	

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
		jugador.ficha1.removeEventListener('click', habilitar1)
		jugador.ficha2.removeEventListener('click', habilitar2)		//se anula el listerner 
		jugador.ficha3.removeEventListener('click', habilitar3)		//de todas las fichas
		jugador.ficha4.removeEventListener('click', habilitar4)
		ponerFicha(jugador, jugador.salida, ficha)		//funcion que marca la ficha en la posicion de salida del jugador de turno

	}

	const habilitar1 = () => sacarFicha(jugador.ficha1)
	const habilitar2 = () => sacarFicha(jugador.ficha2)			//funciones que llaman 
	const habilitar3 = () => sacarFicha(jugador.ficha3)			//con diferentes parametros
	const habilitar4 = () => sacarFicha(jugador.ficha4)			//a sacar ficha

	jugador.ficha1.addEventListener('click', habilitar1)
	jugador.ficha2.addEventListener('click', habilitar2)		//se habilitan las funciones 
	jugador.ficha3.addEventListener('click', habilitar3)		//al darle click a las fichas
	jugador.ficha4.addEventListener('click', habilitar4)

}

//funcion que pone una ficha en el tablero, 
//teniendo en cuenta las fichas aliadas y enemigas
function ponerFicha(jugador, i, ficha) {

	/*funcion a la que se le va a pasar el puesto de la casilla
	donde corresponde poner la ficha, y lo marca en el tablero*/
	const marcarFicha = (fichasPuesto, puesto) => {

		fichasPuesto.push(ficha)
		if (fichasPuesto.length === 1) {  //Si es la primera ficha en el puesto:
			puesto.style.backgroundColor = jugador.color		//marca el color
		}
		else {							 //Si es la segunda ficha o mayor en la casilla:
			puesto.innerHTML = fichasPuesto.length		//marca el numero de fichas en el puesto 
		}

	}

	/*En este fragmento de codigo se decide que posicion sera enviada como parametro
	a la funcion 'marcasFicha', para marcar la ficha en esa posicion de la casillaa[i]*/
	if (casilla[i].fichasPuesto1.length === 0 ||  //Si no hay ninguna ficha en el puesto 1
	casilla[i].puesto1.style.backgroundColor === jugador.color) { //O si el puesto 1 esta ocupado por una ficha del mismo color
		marcarFicha(casilla[i].fichasPuesto1, casilla[i].puesto1)
	}
	else if (casilla[i].fichasPuesto2.length === 0 ||  //Si no hay ninguna ficha en el puesto 2
	casilla[i].puesto2.style.backgroundColor === jugador.color) { //O si el puesto 2 esta ocupado por una ficha del mismo color
		marcarFicha(casilla[i].fichasPuesto2, casilla[i].puesto2)
	}
	else if (casilla[i].fichasPuesto3.length === 0 ||  //Si no hay ninguna ficha en el puesto 3
	casilla[i].puesto3.style.backgroundColor === jugador.color) { //O si el puesto 3 esta ocupado por una ficha del mismo color
		marcarFicha(casilla[i].fichasPuesto3, casilla[i].puesto3)
	}
	else if (casilla[i].fichasPuesto4.length === 0 ||  ////Si no hay ninguna ficha en el puesto 4
	casilla[i].puesto4.style.backgroundColor === jugador.color) {  //O si el puesto 3 esta ocupado por una ficha del mismo color
		marcarFicha(casilla[i].fichasPuesto4, casilla[i].puesto4)
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
		arr[i].puesto1 = document.getElementById("puesto1-" + (i + 1))
		arr[i].puesto2 = document.getElementById("puesto2-" + (i + 1))	//almacena una casilla blanca i
		arr[i].puesto3 = document.getElementById("puesto3-" + (i + 1))	//en un arreglo
		arr[i].puesto4 = document.getElementById("puesto4-" + (i + 1))
		arr[i].fichasPuesto1 = []
		arr[i].fichasPuesto2 = []
		arr[i].fichasPuesto3 = []
		arr[i].fichasPuesto4 = []
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