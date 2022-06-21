const html_elements = [];
html_elements["mediaGvalues_input"] = document.getElementById("mediaGvalues_input");
html_elements["mediaG_button"] = document.getElementById("mediaG_button");
html_elements["mediaG_button"].addEventListener("click", calcularMediaGeometrica);

const numeros = new RegExp ('\\d+', 'g');
const acumularMultiplicando = (acumulador, otro_numero) => (acumulador * otro_numero);
function extraerNumeros(string){
	var numeros_como_texto = string.match(numeros);
	var numeros_como_numeros = numeros_como_texto.map(numero_en_string => Number(numero_en_string));
	return numeros_como_numeros;
}

function calcularMediaGeometrica(){
	var string = html_elements["mediaGvalues_input"].value;
	var array = extraerNumeros(string);
	
	var total_subradical = array.reduce(acumularMultiplicando);
	var indice_de_la_raiz = array.length;
	var media_geometrica = Math.pow( total_subradical, (1 / indice_de_la_raiz) );
	console.group("Media Geométrica");
		console.log("La lista de números es: " + array);
		console.log("Hay un total de: " + array.length + " números, por tanto el índice de la raíz también será " + array.length);
		console.log("La multiplicación de todos los números da " + total_subradical);
		console.log("Por tanto la media geométrica será la raíz " + array.length + " de " + total_subradical);
		console.log("Y ello da " + media_geometrica);
	console.groupEnd();
}