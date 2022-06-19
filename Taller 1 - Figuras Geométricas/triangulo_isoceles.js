const html_inputs = [];
html_inputs["lado1_triangulo"] = document.getElementById("lado1_triangulo");
html_inputs["lado2_triangulo"] = document.getElementById("lado2_triangulo");
html_inputs["base_triangulo"] = document.getElementById("base_triangulo");
html_inputs["radio_circunferencia"] = document.getElementById("radio_circunferencia");

const html_buttons = [];
html_buttons["button_triangulo"] = document.getElementById("button_triangulo");

// Triángulo.
html_buttons["button_triangulo"].addEventListener("click", function(){
	var L1 = Number(html_inputs["lado1_triangulo"].value);
	var L2 = Number(html_inputs["lado2_triangulo"].value);
	var base = Number(html_inputs["base_triangulo"].value);
	var P = L1 + L2 + base;
	var SP = P/2;
	var A = Math.sqrt(SP * (SP - L1) * (SP - L2) * (SP - base));
	var h = (2 * A) / base;
	
	var triangulo_valido = (L1 === L2) && (base < (L1 + L2));
	
	if (triangulo_valido){
		console.log("Altura = " + h);
	} else {
		console.log("Triángulo no válido");
	}
})