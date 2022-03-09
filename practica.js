let reemplazo = "Todo lo que pasa tiene que bajar"
function reemplazoFastFast (reemplazo){
    return reemplazo.replace("pasa", "sube")
}
//console.log(reemplazo.replace("pasa", "sube"));

//Metodos de String
let texto = "En la oscuridad esta la luz"
function menciona(texto, palabra){
    let resultado = texto.indexOf(palabra) >= 0;
    return resultado;
}
console.log(menciona("En la oscuridad esta la luz", "luz"))

//Este mismo ejercicio tambien se peude resolver asi:

function menciona(texto, palabra){
  let resultado = texto.includes(palabra);// ya que el includes siempre devuelte verdadero o falso
  return resultado;
}
console.log(menciona("En la oscuridad esta la luz", "luz"))

// objetos literales 
let perro = {
  nombre : "Pancho",
  edad : 7,
  vacunado : false

};
console.table(perro);