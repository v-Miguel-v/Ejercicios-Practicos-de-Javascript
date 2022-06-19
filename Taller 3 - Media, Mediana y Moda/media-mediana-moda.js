const html_elements = [];
html_elements["mediavalues_input"] = document.getElementById("mediavalues_input");
html_elements["medianavalues_input"] = document.getElementById("medianavalues_input");
html_elements["modavalues_input"] = document.getElementById("modavalues_input");
html_elements["media_button"] = document.getElementById("media_button");
html_elements["mediana_button"] = document.getElementById("mediana_button");
html_elements["moda_button"] = document.getElementById("moda_button");

html_elements["media_button"].addEventListener("click", calcularMedia);
html_elements["mediana_button"].addEventListener("click", calcularMediana);
html_elements["moda_button"].addEventListener("click", calcularModa);

const numeros = new RegExp ('\\d+', 'g');
const acumular = (acumulador, otro_numero) => (acumulador + otro_numero);
function extraerNumeros(string){
	var numeros_como_texto = string.match(numeros);
	var numeros_como_numeros = numeros_como_texto.map(numero_en_string => Number(numero_en_string));
	return numeros_como_numeros;
}

function calcularMedia(){
	var string = html_elements["mediavalues_input"].value;
	var array = extraerNumeros(string);
	
	var total = array.reduce(acumular);
	var cantidad = array.length;
	var media = total / cantidad;
	console.group("Media");
		console.log("La lista de números es: " + array);
		console.log("Su suma da " + total);
		console.log("En total son " + cantidad + " numeros");
		console.log("Y la media es " + media);
	console.groupEnd();
}

const esPar = n => (n%2 === 0);
const numericalSort = (a,b) => (a-b);
function calcularPromedio(array){
	var total = array.reduce(acumular);
	var cantidad = array.length;
	var promedio = total / cantidad;
	
	return promedio;
}

function calcularMediana(){
	var mediana;
	var string = html_elements["medianavalues_input"].value;
	var array = extraerNumeros(string);
	array.sort(numericalSort);
	var pos_mitad_del_array = parseInt(array.length / 2);
	
	if (esPar(array.length)){
		var mitad1 = array[pos_mitad_del_array - 1];
		var mitad2 = array[pos_mitad_del_array];
		mediana = calcularPromedio([mitad1, mitad2]);
	} else {
		mediana = array[pos_mitad_del_array];
	}
	
	console.group("Mediana");
		console.log("La lista de números es: " + array);
		if (esPar(array.length)){
			console.log("Su cantidad es Par, por lo que en la mitad hay 2 números");
			console.log(array[pos_mitad_del_array - 1] + " y " + array[pos_mitad_del_array]);
			console.log("Por tanto, la mediana es: " + mediana);
			console.log("(la media entre esos dos valores)");
		} else {
			console.log("Su cantidad es Impar, por lo que en la mitad hay solo 1 número");
			console.log("El " + array[pos_mitad_del_array]);
			console.log("Y esa precisamente es la mediana")
		}
	console.groupEnd();
}

var elemento;
const soloLosValores = elemento => elemento.valor;
const elementoRepetido = objeto => (objeto.valor === elemento);
const losMasRepetidosPrimero = (a,b) => (b.cantidad - a.cantidad);
const elMasRepetidoDeTodos = (elemento, index, array) => (elemento.cantidad === array[0].cantidad);
function seRepite(elemento, array){
	return array.some(elementoRepetido);
}

function calcularModa(){
	var array_de_repeticiones = [];
	var string = html_elements["modavalues_input"].value;
	var array_original = extraerNumeros(string);

	for (elemento of array_original){
		if (seRepite(elemento, array_de_repeticiones)){
			var index = array_de_repeticiones.findIndex(elementoRepetido);
			array_de_repeticiones[index].cantidad++;
		} else {
			array_de_repeticiones.push(
				{
					valor: elemento,
					cantidad: 1
				}
			)
		}
	}
	
	array_de_repeticiones.sort(losMasRepetidosPrimero);
	var moda = array_de_repeticiones.filter(elMasRepetidoDeTodos).map(soloLosValores);

	console.group("Moda");
		console.log("La lista de números es: " + array_original);
		if (moda.length > 1) {
			console.log("Y la moda son los siguientes números " + moda);
			console.log("Debido a que son los elementos que más se repiten en la lista");
		} else {
			console.log("Y la moda es " + moda);
			console.log("Debido a que es el elemento que más se repite en la lista");
		}
	console.groupEnd();
}

