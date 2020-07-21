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
	posFicha1: null,
	posFicha2: null,
	posFicha3: null,
	posFicha4: null,
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
	posFicha1: null,
	posFicha2: null,
	posFicha3: null,
	posFicha4: null,
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
	posFicha1: null,
	posFicha2: null,
	posFicha3: null,
	posFicha4: null,
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
	posFicha1: null,
	posFicha2: null,
	posFicha3: null,
	posFicha4: null,
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

	dado.addEventListener('click', tirarDado)

}

function deshabilitarDado() {

	dado.removeEventListener('click', tirarDado)

}

function tirarDado() {

	let tirada = lanzamiento() //regresa el valor de la tirada (entre 1 y 6)

	switch (turno) {		
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

function lanzamiento() {

	let x = Math.floor(Math.random() * 6) + 1  //genera un numero aleatorio entre 1 y 6

	if (posDado === true) {
		dado.classList.add('AnimacionDado')
		posDado = false;
	}else {
		dado.classList.remove('AnimacionDado')
		posDado = true;
	}

	deshabilitarDado()
	dado.innerHTML = x	//cambia el contenido del dado al numero aleatorio en x
	return x;	//retorna el numero aleatorio de la tirada

}

/*Funcion que habilita las fichas en la base del jugador de turno. 
Esta funcion se llama cada vez que se 'tira dado'*/
function habilitarFichas(jugador) {

		jugador.ficha1.addEventListener('click', () => {
			jugador.ficha1.style.visibility = 'hidden'
			turno = turno + 1
			habilitarDado()
		})

		jugador.ficha2.addEventListener('click', () => {
			jugador.ficha2.style.visibility = 'hidden'
		})

		jugador.ficha3.addEventListener('click', () => {
			jugador.ficha3.style.visibility = 'hidden'
		})

		jugador.ficha4.addEventListener('click', () => {
			jugador.ficha4.style.visibility = 'hidden'
		})
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