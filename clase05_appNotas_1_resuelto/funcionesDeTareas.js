let fs = require("fs");

// Este es el objeto literal donde iremos agregando las distintas funciones (métodos) que precisemos
let archivoTareas = {
    leerArchivo: function(){
        let tareasJson = fs.readFileSync("tareas.json", "utf-8");
        return JSON.parse(tareasJson);
    }
}

module.exports = archivoTareas;