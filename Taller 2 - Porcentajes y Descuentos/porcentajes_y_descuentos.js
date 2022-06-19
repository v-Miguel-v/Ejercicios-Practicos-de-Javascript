var html_elements = [];
html_elements["price_input"] = document.getElementById("price_input");
html_elements["discount_value"] = document.getElementById("discount_value");
html_elements["printed_discount"] = document.getElementById("printed_discount");
html_elements["button"] = document.getElementById("button");
html_elements["new_price"] = document.getElementById("new_price");

html_elements["discount_value"].addEventListener("change", function(){
	var value = html_elements["discount_value"].value;
	html_elements["printed_discount"].innerText = value + "%";
})

html_elements["button"].addEventListener("click", function(){
	var precio_original = Number(html_elements["price_input"].value);
	var descuento = Number(html_elements["discount_value"].value);
	
	var nuevo_precio = (precio_original * (100 - descuento)) / 100;
	html_elements["new_price"].innerText = "El nuevo precio tras aplicar el descuento es de: " + nuevo_precio;
})