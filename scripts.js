var i = 1;

class Ludo {
	
	constructor() {
		this.botonJugar = document.getElementById('BotonInicio')
		this.dado = document.getElementById('dado')
		this.ocultarBoton()
		this.habilitarDado()
	}

	ocultarBoton() {
		this.botonJugar.style.display="none"
	}

	habilitarDado() {
		this.dado.addEventListener('click', this.tirarDado)
	}

	tirarDado() {
		let x = Math.floor(Math.random() * 6) + 1
		console.log(this)
		this.innerHTML = x /*COMENTARIO: No logro acceder al DOM con la variable "dado", a laque se le asigno elelemento del dado*/
		return x;

	}
}

function empezarPartida() {
	const juego = new Ludo()
}