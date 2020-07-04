class Ludo {

	constructor() {
		this.botonJugar = document.getElementById('BotonInicio')
		this.ocultarBoton()
	}

	ocultarBoton() {
		this.botonJugar.style.display="none"
	}
}

function empezarPartida() {
	const partida = new Ludo()
}



/*var casillas = [];

for(i = 0; i < 78; i++) {
	casillas[i] = document.getElementById('casilla' + (i + 1))
}*/

