function validateForm(){
  /* Para jalar el id (la etiqueta)*/
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var correo = document.getElementById("input-email");
	var contra = document.getElementById("input-password");
	var seleccionadas = document.getElementById("opciones");
	var seleccionVacia = seleccionadas.options[seleccionadas.selectedIndex].value
	//Con esto voy a ingresar dentro del value que está dentro de una opción que está dentro del select*/
	//Uso esto porque me han explicado como se usa. Con funciones no puedo*/

	//var array = document.getElementsByClassName("form-control");
  /* Esto es para coger todo el array de mi formulario, porque cada cajita es un elemento de mi array. Y estoy obligando a mi a mi usuario a que complete todo */
	//(array[0].value == "" || array[1].value == "" || array[2].value == "" || array[3].value = "" ){
		//alert("Debes llenar todo el formulario");
	//}
	/*var regLetras = /^[a-zA-Z]*$/;
		var regMayus = /^[A-Z]{1}/;

		//Campos obligatorios

		if(nombre.value.length < 1){
			alert("Escribe tu nombre")
		}else if(nombre.value.search(regMayus)){
			alert("La primera letra de tu nombre debe estar en mayúscula")

	var letras = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
	if(nombre.value.length.search(letras)){
		alert("Holi")
	}

	if(nombre.value.length === 0 ){
		alert("Escribe tu nombre")
		if(nombre.charAt(0) == nombre.charAt(0).toUpperCase()){
			alert("Escribe la primera letra de tu nombre en mayusculas");
		}
	}
	/*Para convertir la primera letra en mayusculas*/
	/*if(apellido.value.length === 0){
		alert("Escribe tu apellido")
	}
	else if(nombre.charAt(0)== nombre.charAt(0).toUpperCase()){
		alert("Escribe la primera letra de tu apellido en mayusculas")
	}
	if(correo.value.length ===0){
		alert("Escribe un e-mail")
	}
	else if(contra.value.length ===0){
		alert("Escribe una contraseña")
	}


	if(seleccionVacia == "0"){1
		alert("Seleccione una opción")
	}*/
}
