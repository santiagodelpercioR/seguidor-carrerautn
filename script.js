function crearTabla(materias) {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');          

    const materias1ero = filtrar(materias,1);
    const materias2do = filtrar(materias,2);
    const materias3ro = filtrar(materias,3);
    const materias4to = filtrar(materias,4);
    const materias5to = filtrar(materias,5);

    const materiasPorAnio = [materias1ero, materias2do, materias3ro, materias4to, materias5to]; // 0,1,2,3,4
    const anios = materiasPorAnio.length;

    // Recorre el for 1 vez por año
    for (let i = 0; i < anios; i ++){
        const title = document.createElement('tr');
        const titleContent = document.createTextNode([i+1] + '° Año');
        title.appendChild(titleContent);
        table.appendChild(title);
        
        materiasDelAnio = materiasPorAnio[i];
        let cantMateriasDelAnio = materiasDelAnio.length;
        for(let x = 0; x < cantMateriasDelAnio; x ++){
            const row = document.createElement('tr');           // Fila
            row.setAttribute("class",'materia');
            const cell = document.createElement('td');          // Celda
            const cellText = document.createTextNode(materiasDelAnio[x].nombre);
            const select = menuDesplegable();
            cell.appendChild(cellText);
            row.appendChild(cell);
            row.appendChild(select);
            table.appendChild(row);
        }
    }
    table.appendChild(tableBody);
    table.setAttribute("border", "1");
    document.body.appendChild(table);
}

function menuDesplegable() {
    const select = document.createElement("select");
    const opciones = ["", "Cursando", "Regularizada", "Aprobada"];
    opciones.forEach(opcion => {
        const optionElement = document.createElement("option");
        optionElement.value = opcion;
        optionElement.textContent = opcion;
        select.appendChild(optionElement);
    });
    return select;
}

function filtrar(materias,anio){
    return materias.filter(Materia =>
        Materia.anio == anio,
    )
}

function escucharOpciones(){
    const selects = document.querySelectorAll("select");
    selects.forEach(select => 
        select.addEventListener("change", function(){
            let options = select.querySelectorAll('option');
            let count = options.length;
        })
    );
}
class Materia {
    constructor(anio, id, nombre, requisitos = {cursadas: [], aprobadas: []}){
        this.anio = anio;
        this.id = id;
        this.nombre = nombre;
        this.requisitos = requisitos;
    }
}

const materias = [
    new Materia(1,1,"Análisis Matemático I"),
    new Materia(1,2,"Álgebra y Geometría Analítica"),
    new Materia(1,3,"Fisica I"),
    new Materia(1,4,"Inglés I"),
    new Materia(1,5,"Lógica y Estructuras Discretas"),
    new Materia(1,6,"Algoritmos y Estructuras de Datos"),
    new Materia(1,7,"Arquitectura de Computadoras"),
    new Materia(1,8,"Sistemas y Procesos de Negocio"),
    new Materia(2,9,"Análisis Matemático II",{cursadas: [1,2]}),
    new Materia(2,10,"Fisica II", {cursadas: [1,3]}),
    new Materia(2,11,"Ingeniería y Sociedad"),
    new Materia(2,12,"Inglés II", {cursadas: [4]}),
    new Materia(2,13,"Sintaxis y Semántica de los Lenguajes", {cursadas: [5,6]}),
    new Materia(2,14,"Paradigmas de Programación",{cursadas: [5,6]}),
    new Materia(2,15,"Sistemas Operativos", {cursadas: [7]}),
    new Materia(2,16,"Paradigmas de Programación",{cursadas: [6,8]}),
    new Materia(3,17,"Probabilidad y Estadística", {cursadas: [1,2]}),
    new Materia(3,18,"Economía",{aprobadas: [1,2]}),
    new Materia(3,19,"Bases de Datos", {cursadas: [13,16], aprobadas: [5,6]}),
    new Materia(3,20,"Desarrollo de Software", {cursadas: [14,16], aprobadas: [5,6]}),
    new Materia(3,21,"Comunicación de Datos", {cursadas: [], aprobadas: [3,7]}),
    new Materia(3,22,"Análisis Numérico", {cursadas: [9], aprobadas: [1,2]}),
    new Materia(3,23,"Diseño de Sistemas de Información", {cursadas: [14,16], aprobadas: [4,6,8]}),
];

const materiasRegularizadas = [];
const materiasAprobadas = [];

console.log(materias);
crearTabla(materias);
escucharOpciones();
