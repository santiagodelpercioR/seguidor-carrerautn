const materias = [
    { año: "1er Año", materias: [
        "Analisis Matematico 1",
        "Algebra y Geometria Analitica",
        "Fisica 1",
        "Ingles 1",
        "Logica y Estructuras Discretas",
        "Algoritmos y Estructuras de Datos",
        "Arquitectura de Computadoras",
        "Sistemas y Procesos de Negocio"
    ]},
    { año: "2do Año", materias: [
        "Analisis Matematico 2",
        "Fisica 2",
        "Ingenieria y Sociedad",
        "Ingles 2",
        "Sintaxis y Semantica de los Lenguajes",
        "Paradigmas de Programacion",
        "Sistemas Operativos",
        "Analisis de Sistemas de Informacion"
    ]},
    { año: "3er Año", materias: [
        "Probabilidad y Estadistica",
        "Economia",
        "Bases de Datos",
        "Desarrollo de Software",
        "Comunicacion de Datos",
        "Analisis Numerico",
        "Diseño de Sistemas de Informacion"
    ]},
    { año: "4to Año", materias: [
        "Legislacion",
        "Ingenieria y Calidad de Software",
        "Redes de Datos",
        "Investigacion Operativa",
        "Simulacion",
        "Tecnologias para la automatizacion",
        "Administracion de Sistemas de Informacion"
    ]},
    { año: "5to Año", materias: [
        "Inteligencia Artificial",
        "Ciencia de Datos",
        "Sistemas de Gestion",
        "Gestion Gerencial",
        "Seguridad en los Sistemas de Informacion",
        "Proyecto Final"
    ]}
];

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


function crearTabla(datos) {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    datos.forEach(seccion => {
        const headerRow = document.createElement("tr");
        const headerCell = document.createElement("td");
        headerCell.colSpan = 2;
        headerCell.style.fontWeight = "bold";
        headerCell.style.backgroundColor = "#ddd";
        headerCell.textContent = seccion.año;
        headerRow.appendChild(headerCell);
        tableBody.appendChild(headerRow);

        seccion.materias.forEach(materia => {
            const row = document.createElement("tr");

            const cell = document.createElement("td");
            const cellText = document.createTextNode(materia);
            cell.appendChild(cellText);

            const dropdownCell = document.createElement("td");
            const dropdown = menuDesplegable();
            dropdownCell.appendChild(dropdown);

            row.appendChild(cell);
            row.appendChild(dropdownCell);

            tableBody.appendChild(row);
        });
    });

    table.appendChild(tableBody);
    table.setAttribute("border", "1");
    document.body.appendChild(table);
}

crearTabla(materias);