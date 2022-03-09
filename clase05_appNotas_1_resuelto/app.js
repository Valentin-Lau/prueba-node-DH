let funcionesDeTareas = require("./funcionesDeTareas");

// Modificar esta variable para cambiar la acción a realizar por el switch
let accion = "listar";

switch (accion) {
  case "listar":
    console.table(funcionesDeTareas.leerArchivo());
    break;
  case "":
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer");
    break;
}