const html_inputs = [];
html_inputs["lados_cuadrado"] = document.getElementById("lados_cuadrado");
html_inputs["lado1_triangulo"] = document.getElementById("lado1_triangulo");
html_inputs["lado2_triangulo"] = document.getElementById("lado2_triangulo");
html_inputs["lado3_triangulo"] = document.getElementById("lado3_triangulo");
html_inputs["radio_circunferencia"] = document.getElementById("radio_circunferencia");

const html_buttons = [];
html_buttons["button_cuadrado"] = document.getElementById("button_cuadrado");
html_buttons["button_triangulo"] = document.getElementById("button_triangulo");
html_buttons["button_circunferencia"] = document.getElementById("button_circunferencia");

// Cuadrado.
html_buttons["button_cuadrado"].addEventListener("click", function(){
	var L = Number(html_inputs["lados_cuadrado"].value);
	var A = L * L;
	var P = L * 4;
	
	console.group("Cuadrado");
		console.log("Área = " + A);
		console.log("Perímetro = " + P);
	console.groupEnd();
})

// Triángulo.
html_buttons["button_triangulo"].addEventListener("click", function(){
	var L1 = Number(html_inputs["lado1_triangulo"].value);
	var L2 = Number(html_inputs["lado2_triangulo"].value);
	var L3 = Number(html_inputs["lado3_triangulo"].value);
	var P = L1 + L2 + L3;
	var SP = P/2;
	var A = Math.sqrt(SP * (SP - L1) * (SP - L2) * (SP - L3));
	
	console.group("Triángulo");
		console.log("Área = " + A);
		console.log("Perímetro = " + P);
	console.groupEnd();
})

// Circunferencia.
html_buttons["button_circunferencia"].addEventListener("click", function(){
	var R = html_inputs["radio_circunferencia"].value;
	var A = Math.PI * (R * R);
	var P = 2 * Math.PI * R;
	
	console.group("Circunferencia");
		console.log("Área = " + A);
		console.log("Perímetro = " + P);
	console.groupEnd();
})