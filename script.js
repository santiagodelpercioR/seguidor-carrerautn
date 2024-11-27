import {Materia,materias} from './materias.js'

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

            if(materiasCursando.includes(materia.id)){
                row.classList.remove("cursando", "aprobada", "regularizada", "sinEstado");
                row.classList.add('cursando');
            }else if (materiasRegularizadas.includes(materia.id)){
                row.classList.remove("cursando", "aprobada", "regularizada", "sinEstado");
                row.classList.add('regularizada');
            }else if (materiasAprobadas.includes(materia.id)){
                row.classList.remove("cursando", "aprobada", "regularizada", "sinEstado");
                row.classList.add('aprobada');
            }

            // Celda con el nombre de la materia
            const nameCell = document.createElement('td');
            nameCell.textContent = materia.nombre;
            row.appendChild(nameCell);

            // Celda con el menú desplegable
            const selectCell = document.createElement('td');
            const select = menuDesplegable();

            if (materiasCursando.includes(materia.id)) {
                select.value = "Cursando";
            } else if (materiasRegularizadas.includes(materia.id)) {
                select.value = "Regularizada";
            } else if (materiasAprobadas.includes(materia.id)) {
                select.value = "Aprobada";
            }
        
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
            const value = select.value.toLowerCase();
            tr.classList.add(value || "sinEstado");
            actualizarEstado(value,tr,select);
        });

    return select;
}

function eliminarEstado(id, lista1, lista2){
    let index = lista1.indexOf(id);
    if(index > -1){
        lista1.splice(index,1);
    }
    index = lista2.indexOf(id);
    if(index > -1){
        lista2.splice(index,1);
    }
}

function actualizarEstado(estado, tr,option){
    let nombreMateria = tr.cells[0].textContent;
    let materiaABuscar = materias.filter(materia => { return materia.nombre === nombreMateria})
    const idMateria = materiaABuscar[0].id;
    let puedeCursar = verificarCorrelatividades(materiaABuscar);
    if(!puedeCursar){
        console.log('no se puede cursar: ' + nombreMateria);
        tr.classList.remove("cursando", "aprobada", "regularizada", "sinEstado");
        tr.classList.add("sinEstado");
        option.value = 'nada';
    }
    else{
        if(estado === "cursando"){
            materiasCursando.push(idMateria);
            eliminarEstado(idMateria, materiasRegularizadas, materiasAprobadas);
        }
        else if(estado === "regularizada"){
            materiasRegularizadas.push(idMateria);
            eliminarEstado(idMateria, materiasCursando, materiasAprobadas);
        }
        else if(estado === "aprobada"){
            materiasAprobadas.push(idMateria);
            eliminarEstado(idMateria, materiasCursando, materiasRegularizadas);
        }
        removerDuplicados();
    }

    guardarEstado();
}

function guardarEstado(){
    const estado = {
        cursando: materiasCursando,
        regularizadas: materiasRegularizadas,
        aprobadas: materiasAprobadas,
    };
    localStorage.setItem("estadoMaterias", JSON.stringify(estado));
}

function cargarEstado(){
    const estadoGuardado = localStorage.getItem("estadoMaterias");
    if(estadoGuardado){
        const estado = JSON.parse(estadoGuardado);
        materiasCursando = estado.cursando || [];
        materiasRegularizadas = estado.regularizadas || [];
        materiasAprobadas = estado.aprobadas || [];
    }
}

function removerDuplicados(){
    materiasCursando = [... new Set(materiasCursando)];
    materiasRegularizadas = [... new Set(materiasRegularizadas)];
    materiasAprobadas = [... new Set(materiasAprobadas)];
}

function verificarCorrelatividades(materia){
    const reqCursadas = materia[0].requisitos.cursadas || [];
    const reqAprobadas = materia[0].requisitos.aprobadas || [];
    console.log('reqCursadas son ' + reqCursadas);
    console.log('reqAprobadas son ' + reqAprobadas);

    const cursadasCumplidas = reqCursadas.every(materia => cursadaOAprobada(materia));
    const aprobadasCumplidas = reqAprobadas.every(materia => materiasAprobadas.includes(materia));
    
    if( cursadasCumplidas && aprobadasCumplidas){
        return true;
    }

    const faltantesCursadas = reqCursadas.filter(x => !materiasRegularizadas.includes(x) && !materiasAprobadas.includes(x));
    const faltantesAprobadas = reqAprobadas.filter(x => !materiasAprobadas.includes(x));

    let materiasFaltantes = [];
    if(faltantesCursadas.length > 0){
        faltantesCursadas.forEach((id) => {
            let materia = materias.find(materia => materia.id === id);
            let nombreMateria = materia.nombre;
            materiasFaltantes.push(nombreMateria);
        })
        alert(`Te falta regularizar: ${materiasFaltantes}`);
    }
    if (faltantesAprobadas.length > 0) {
        materiasFaltantes = [];
        faltantesAprobadas.forEach((id) => {
            let materia = materias.find(materia => materia.id === id);
            let nombreMateria = materia.nombre;
            materiasFaltantes.push(nombreMateria);
        })
        alert(`Te falta aprobar: ${materiasFaltantes}`);
    }

    return false;
}

function cursadaOAprobada(materia){
    return materiasRegularizadas.includes(materia) || materiasAprobadas.includes(materia);
}

let materiasCursando = [];
let materiasRegularizadas = [];
let materiasAprobadas = [];

cargarEstado();
crearTabla(materias);
