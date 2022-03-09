let fs = require ("fs");

let tareasJson = fs.readFileSync("tareas.json","utf-8");

let tareas =JSON.parse(tareasJson);

console.table(tareas);