$(document).on('click', '#link', function(e) {
	swal({
		title: "Estas seguro?", 
		text: "Vas a volver a inicio", 
		type: "warning",
		confirmButtonText: "Si, volver",
		showCancelButton: true
	})
		.then((result) => {
			if (result.value) {
				window.location.href = '../index.html';
			} else if (result.dismiss === 'cancel') {
				swal(
				  'Cancelado',
				  'Seguis en ingreso de datos',
				  'error'
				)
			}
		})
});

// Alert Redirect to Another Link
$(document).on('click', '#link2', function(e) {
	swal({
		title: "Estas seguro?", 
		text: "Vas a proceder a la calculadora de notas", 
		type: "warning",
		confirmButtonText: "Si, ir",
		showCancelButton: true
	})
		.then((result) => {
			if (result.value) {
				window.location.href = 'calculadora.html';
			} else if (result.dismiss === 'cancel') {
				swal(
				  'Cancelado',
				  'Seguis en calculadora de notas',
				  'error'
				)
			}
		})
});


$(document).on('click', '#link3', function(e) {
	swal({
		title: "Estas seguro?", 
		text: "Vas a volver a inicio", 
		type: "warning",
		confirmButtonText: "Si, volver",
		showCancelButton: true
	})
		.then((result) => {
			if (result.value) {
				window.location.href = '../index.html';
			} else if (result.dismiss === 'cancel') {
				swal(
				  'Cancelado',
				  'Seguis en calculadora de notas',
				  'error'
				)
			}
		})
});


$(document).on('click', '#link4', function(e) {
	swal({
		title: "Estas seguro?", 
		text: "Vas a proceder a ingreso de datos de alumnos", 
		type: "warning",
		confirmButtonText: "Si, ir",
		showCancelButton: true
	})
		.then((result) => {
			if (result.value) {
				window.location.href = 'cuestionario.html';
			} else if (result.dismiss === 'cancel') {
				swal(
				  'Cancelado',
				  'Seguis en calculadora de notas',
				  'error'
				)
			}
		})
});