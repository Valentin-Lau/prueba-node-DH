// if ternario 
//condicion ? expresion para el true : expresion apra el false;

let fruta = "Manzana";

let resultado = fruta == "Manzana" ? "buenisimo, me gustan las manzanas " : "ufa, queria manzana";
console.log(resultado);


//switch

let semaforo = "Rojo";

switch (semaforo){
          case "Verde":
                    console.log("puedo cruzar");
                    break;
          case "Amarillo":
                    console.log("Precaucion");
                    break;
          case "Rojo":
                    console.log("No puedo cruzar");
                    break;
          default:
                    console.log("No funciona el semaforo");
                    break;
}


let dia = "viernes"
function tengoClases(dia) {
	switch (dia) {
    	//Escribe tu código aquí
		case "lunes":
		console.log("tenés clases");
		break;

		case "miércoles":
		console.log("tenés clases");
		break;

		case "viernes":
		console.log("tenés clases");
		break;

		default: 
		console.log("no tenés clases");
		break;
	}
}

console.log(tengoClases("lunes"));


