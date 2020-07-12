var i = 1;

class Ludo {
	
	constructor() {
		this.tirarDado = this.tirarDado.bind(this)
		this.botonJugar = document.getElementById('BotonInicio')
		this.dado = document.getElementById('dado')
		this.posDado = 1  //numero de referencia para la animacion del dado que varia entre 1 y 0
		this.nCasillas = 52
		this.obtenerCasillas()
		this.ocultarBoton()
		this.habilitarDado()

	}

	ocultarBoton() {
		this.botonJugar.style.display="none"
	}

	obtenerCasillas() {
		let i
		this.casilla = [] //Verificar buena practica
		this.casillaAzul = [] //Verificar buena practica
		this.casillaAmarilla = [] //Verificar buena practica
		this.casillaVerde = [] //Verificar buena practica
		this.casillaRoja = [] //Verificar buena practica

		for (i = 0; i < this.nCasillas; i++) {
			this.casilla[i] = new Casilla(i)
			console.log(this.casilla[i]) 
		}
		for (i = 0; i < 5; i++) {
			this.casillaAzul[i] = document.getElementById("casillaA" + (i + 1))
			this.casillaAmarilla[i] = document.getElementById("casillaY" + (i + 1))
			this.casillaRoja[i] = document.getElementById("casillaV" + (i + 1))
			this.casillaVerde[i] = document.getElementById("casillaR" + (i + 1))
		}		
	}

	habilitarDado() {
		this.dado.addEventListener('click', this.tirarDado)
	}

	tirarDado() {
		let x = Math.floor(Math.random() * 6) + 1

		if (this.posDado === 1) {
			this.dado.classList.add('AnimacionDado')
			this.posDado = 0;
		}else {
			this.dado.classList.remove('AnimacionDado')
			this.posDado = 1;
		}
		this.dado.innerHTML = x 
		return x;
	}
}

class Casilla {
	constructor(numero) {
		this.lugar = document.getElementById("casilla" + (numero + 1))
		this.pos1 = document.getElementById("puesto1-" + (numero + 1))
		this.pos2 = document.getElementById("puesto2-" + (numero + 1))
		this.pos3 = document.getElementById("puesto3-" + (numero + 1))
		this.pos4 = document.getElementById("puesto4-" + (numero + 1))
		this.cantidadPos1 = 0
		this.cantidadPos1 = 0
		this.cantidadPos1 = 0
		this.cantidadPos1 = 0
	}
}

function empezarPartida() {
	const juego = new Ludo()
}

