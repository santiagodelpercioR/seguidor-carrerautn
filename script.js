class Materia {
    constructor(anio, id, nombre, requisitos = {cursadas: [], aprobadas: []}){
        this.anio = anio;
        this.id = id;
        this.nombre = nombre;
        this.requisitos = requisitos;
    }
}

function filtrar(materias,anio){
    return materias.filter(Materia =>
        Materia.anio == anio,
    )
}

function crearTabla(materias) {
    const materiasPorAnio = [
        filtrar(materias, 1),
        filtrar(materias, 2),
        filtrar(materias, 3),
        filtrar(materias, 4),
        filtrar(materias, 5)
    ];
    const anios = materiasPorAnio.length;

    // Recorre el for 1 vez por año
    materiasPorAnio.forEach((materiasDelAnio, index) => {
        const table = document.createElement('table');
        const tableBody = document.createElement('tbody');

        // Crear encabezado de la tabla
        const titleRow = document.createElement('tr');
        const titleCell = document.createElement('td');
        titleCell.textContent = `${index + 1}° Año`;
        titleCell.setAttribute('colspan', '2');
        titleCell.style.textAlign = "center";
        titleCell.style.fontWeight = "bold";
        titleRow.appendChild(titleCell);
        tableBody.appendChild(titleRow);

        // Crear filas de materias
        materiasDelAnio.forEach(materia => {
            const row = document.createElement('tr');
            row.classList.add('materia', 'sinEstado');

            // Celda con el nombre de la materia
            const nameCell = document.createElement('td');
            nameCell.textContent = materia.nombre;
            row.appendChild(nameCell);

            // Celda con el menú desplegable
            const selectCell = document.createElement('td');
            const select = menuDesplegable();
            selectCell.appendChild(select);
            row.appendChild(selectCell);

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        table.setAttribute("border", "1");
        document.body.appendChild(table);
    });
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

    select.addEventListener("change", function () {
                const tr = select.closest("tr");
                tr.classList.remove("cursando", "aprobada", "regularizada", "sinEstado");
                tr.classList.add(select.value.toLowerCase() || "sinEstado");
            });

    return select;
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
    new Materia(4,24,"Legislación", {cursadas: [11]}),
    new Materia(4,25,"Ingeniería y Calidad de Software", {cursadas: [19,20,23], aprobadas:[13,14]}),
    new Materia(4,26,"Redes de Datos", {cursadas: [15,21]}),
    new Materia(4,27,"Investigación Operativa", {cursadas: [17,22]}),
    new Materia(4,28,"Simulación", {cursadas: [17], aprobadas:[9]}),
    new Materia(4,29,"Tecnologías para la automatización", {cursadas: [10,22], aprobadas:[9]}),
    new Materia(4,30,"Administración de Sistemas de Información", {cursadas: [18,23], aprobadas:[16]}),
    new Materia(5,31,"Inteligencia Artificial", {cursadas: [28], aprobadas:[17,22]}),
    new Materia(5,32,"Ciencia de Datos", {cursadas: [28], aprobadas:[17,19]}),
    new Materia(5,33,"Sistemas de Gestión", {cursadas: [18,27], aprobadas:[23]}),
    new Materia(5,34,"Gestión Gerencial", {cursadas: [24,30], aprobadas:[18]}),
    new Materia(5,35,"Seguridad en los Sistemas de Información", {cursadas: [26,30], aprobadas:[20,21]}),
    new Materia(5,36,"Proyecto Final", {cursadas: [25,26,30], aprobadas:[12,20,23]}),
];

const materiasRegularizadas = [];
const materiasAprobadas = [];

crearTabla(materias);
