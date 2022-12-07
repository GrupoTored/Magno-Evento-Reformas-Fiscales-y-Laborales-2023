const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');


const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(formulario.d1.value+ " " +
				formulario.d2.value+ " " +
				formulario.d3.value+ " " +
				formulario.d4.value+ " " +
				formulario.d5.value);
});

