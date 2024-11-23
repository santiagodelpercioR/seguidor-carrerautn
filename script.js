let materias1ero = [
    "Analisis Matematico 1",
    "Algebra y Geometria Analitica",
    "Fisica 1",
    "Ingles 1",
    "Logica y Estructuras Discretas",
    "Algoritmos y Estructuras de Datos",
    "Arquitectura de Computadoras",
    "Sistemas y Procesos de Negocio"     
]

let materias2do = [
    "Analisis Matematico 2",
    "Fisica 2",
    "Ingenieria y Sociedad",
    "Ingles 2",
    "Sintaxis y Semantica de los Lenguajes",
    "Paradigmas de Programacion",
    "Sistemas Operativos",
    "Analisis de Sistemas de Informacion",
]

let materias3ro = [
    "Probabilidad y Estadistica",
    "Economia",
    "Bases de Datos",
    "Desarrollo de Software",
    "Comunicacion de Datos",
    "Analisis Numerico",
    "Diseño de Sistemas de Informacion"
]

let materias4to = [
    "Legislacion",
    "Ingenieria y Calidad de Software",
    "Redes de Datos",
    "Investigacion Operativa",
    "Simulacion",
    "Tecnologias para la automatizacion",
    "Administracion de Sistemas de Informacion"
]

let materias5to = [
    "Inteligencia Artificial",
    "Ciencia de Datos",
    "Sistemas de Gestion",
    "Gestion Gerencial",
    "Seguridad en los Sistemas de Informacion",
    "Proyecto Final"
]

function menuDesplegable() {
    const select = document.createElement("select");

    // Opciones del menú desplegable
    const opciones = ["", "Cursando", "Regularizada", "Aprobada"];
    opciones.forEach(opcion => {
        const optionElement = document.createElement("option");
        optionElement.value = opcion;
        optionElement.textContent = opcion;
        select.appendChild(optionElement);
    });

    return select;
}


function crearTabla(array){
    const tableBody = document.createElement('tbody')
    const table = document.createElement('table');
    table.style.width = '800px';
    table.style.border = '1px solid black';


    array.forEach(elemento => {
    
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        const cellText = document.createTextNode(elemento);
        cell.appendChild(cellText);

        const dropdownCell = document.createElement("td");
        const dropdown = menuDesplegable();
        dropdownCell.appendChild(dropdown);

        row.appendChild(cell);
        row.appendChild(dropdownCell);

        tableBody.appendChild(row);

    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
    table.setAttribute("border", "1");
}

crearTabla(materias1ero)
crearTabla(materias2do)
crearTabla(materias3ro)
crearTabla(materias4to)
crearTabla(materias5to)