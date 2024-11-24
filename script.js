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
        Materia.anio == anio
    )
}
class Materia {
    constructor(anio, id, nombre, cursadas, aprobadas){
        this.anio = anio;
        this.id = id;
        this.nombre = nombre;
        this.cursadas = cursadas;
        this.aprobadas = aprobadas;
    }
}

const am1 = new Materia(1,1,"Análisis Matemático I", [],[]);
const aga = new Materia(1,2,"Álgebra y Geometría Analítica", [],[]);
const fisica1 = new Materia(1,3,"Fisica I", [],[]);
const ingles1 = new Materia(1,4,"Inglés I", [],[]);
const discreta = new Materia(1,5,"Lógica y Estructuras Discretas", [],[]);
const algoritmos = new Materia(1,6,"Algoritmos y Estructuras de Datos", [],[]);
const arquitectura = new Materia(1,7,"Arquitectura de Computadoras", [],[]);
const syp = new Materia(1,8,"Sistemas y Procesos de Negocio", [],[]);
const am2 = new Materia(2,9,"Análisis Matemático II", [1,2],[]);
const fisica2 = new Materia(2,10,"Fisica II", [1,3],[]);
const ingysoc = new Materia(2,11,"Ingeniería y Sociedad", [],[]);
const ingles2 = new Materia(2,12,"Inglés II", [4],[]);
const ssl = new Materia(2,13,"Sintaxis y Semántica de los Lenguajes", [5,6],[]);
const pdep = new Materia(2,14,"Paradigmas de Programación", [5,6],[]);
const so = new Materia(2,15,"Sistemas Operativos", [7],[]);
const ads = new Materia(2,16,"Paradigmas de Programación", [6,8],[]);
const proba = new Materia(3,17,"Probabilidad y Estadística", [1,2],[]);
const economia = new Materia(3,18,"Economía", [],[1,2]);
const bases = new Materia(3,19,"Bases de Datos", [13,16],[5,6]);
const desSoftware = new Materia(3,20,"Desarrollo de Software", [14,16],[5,6]);
const comuDatos = new Materia(3,21,"Comunicación de Datos", [],[3,7]);
const anaNumerico = new Materia(3,22,"Análisis Numérico", [9],[1,2]);
const disenoSistemas = new Materia(3,23,"Diseño de Sistemas de Información", [14,16],[4,6,8]);

const materias = [am1,aga,fisica1,ingles1,discreta,algoritmos,arquitectura,syp,am2,fisica2,ingysoc,ingles2,ssl,pdep,so,ads,proba,economia,bases,desSoftware,comuDatos,anaNumerico,disenoSistemas];

crearTabla(materias);
