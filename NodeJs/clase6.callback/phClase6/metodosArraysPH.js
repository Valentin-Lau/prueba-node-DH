let notas = [10, 4, 5, 8, 9, 2, 7];

let notasHastaEl100 = notas.map(function(numero){
          return numero * 10;
});

//console.log(notasHastaEl100);

let notasAprobadas = notas.filter(function(numero){
          return numero >= 7;
});
//console.log(notasAprobadas);

let sumaNotas =notas.reduce(function(estado, numero){ //Toma un conjunto de datos y devuelve un daot unico 
          return estado + numero;
});
//console.log(sumaNotas);

notas.forEach(function(valor, indice){
          console.log("enla posicion " + indice + " tengo el valor " + valor);
});          