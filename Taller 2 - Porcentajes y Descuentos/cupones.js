var html_elements = [];
html_elements["price_input"] = document.getElementById("price_input");
html_elements["cuponcode_input"] = document.getElementById("cuponcode_input");
html_elements["print_discount"] = document.getElementById("print_discount");
html_elements["button"] = document.getElementById("button");
html_elements["new_price"] = document.getElementById("new_price");

var cupones = [
	{
		code: "12345",
		discount: 10
	},
	{
		code: "L4P15",
		discount: 33
	},
	{
		code: "admin",
		discount: 99
	}
];

html_elements["button"].addEventListener("click", function(){
	var precio_original = Number(html_elements["price_input"].value);
	var cuponcode_ingresado = String(html_elements["cuponcode_input"].value);
	
	var cuponfound = cupones.find(cupon => cupon.code === cuponcode_ingresado);
	if (Boolean(cuponfound) == true){
		var descuento = cuponfound.discount;
		html_elements["print_discount"].innerText = descuento + "% de Descuento";
		
		var nuevo_precio = (precio_original * (100 - descuento)) / 100;
		html_elements["new_price"].innerText = "El nuevo precio tras aplicar el cupón de descuento es de: " + nuevo_precio;
	} else {
		html_elements["new_price"].innerText = "Código Inválido";
	}
})