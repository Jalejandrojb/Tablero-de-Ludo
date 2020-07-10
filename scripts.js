var i = 1;

class Ludo {
	
	constructor() {
		this.tirarDado = this.tirarDado.bind(this)
		this.botonJugar = document.getElementById('BotonInicio')
		this.dado = document.getElementById('dado')
		this.posDado = 1;
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

function empezarPartida() {
	const juego = new Ludo()
}