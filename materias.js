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
    new Materia(2,16,"Análisis de Sistemas de Información",{cursadas: [6,8]}),
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

const materiasMecanica = [
    new Materia(1,1,"Análisis Matemático I"),
    new Materia(1,2,"Química General"),
    new Materia(1,3,"Álgebra y Geometría Analítica"),
    new Materia(1,4,"Física I"),
    new Materia(1,5,"Ingeniería y Sociedad"),
    new Materia(1,6,"Ingeniería Mecánica I"),
    new Materia(1,7,"Sistemas de Representación"),
    new Materia(1,8,"Fundamentos de Informática"),
    new Materia(2,9,"Materiales No Metálicos",{cursadas: [2,4]}),
    new Materia(2,10,"Estabilidad I", {cursadas: [1,3,4]}),
    new Materia(2,11,"Materiales Metálicos", {cursadas: [2,3]}),
    new Materia(2,12,"Análisis Matemático II", {cursadas: [1,3]}),
    new Materia(2,13,"Física II", {cursadas: [1,4]}),
    new Materia(2,14,"Ingeniería Ambiental y Seguridad Industrial",{cursadas: [2,4]}),
    new Materia(2,15,"Ingeniería Mecánica II", {cursadas: [4,6]}),
    new Materia(2,16,"Inglés I"),
    new Materia(3,17,"Termodinámica", {cursadas: [12,13], aprobadas: [1,3,4]}),
    new Materia(3,18,"Mecánica Racional",{cursadas: [10,12], aprobadas: [1,3,4]}),
    new Materia(3,19,"Estabilidad II", {cursadas: [10,12], aprobadas: [1,3,4]}),
    new Materia(3,20,"Mediciones y Ensayos", {cursadas: [10,11,13], aprobadas: [1,4]}),
    new Materia(3,21,"Diseño Mecánico", {cursadas: [9,10,11], aprobadas: [4,6,7,8]}),
    new Materia(3,22,"Cálculo Avanzado", {cursadas: [12], aprobadas: [1,3,8]}),
    new Materia(3,23,"Ingeniería Mecánica III", {cursadas: [9,11,15], aprobadas: [1,2,4,6]}),
    new Materia(3,24,"Probabilidad y Estadística", {cursadas: [1,3]}),
    new Materia(3,25,"Inglés II", {aprobadas:[16]}),
    new Materia(4,26,"Economía", {cursadas: [15], aprobadas:[5]}),
    new Materia(4,27,"Elementos de Máquinas", {cursadas: [9,11,18,19,23], aprobadas:[2,10,12]}),
    new Materia(4,28,"Tecnología del Calor", {cursadas: [17], aprobadas:[12,13]}),
    new Materia(4,29,"Metrología e Ingeniería de Calidad", {cursadas: [20,24], aprobadas:[3,11,13]}),
    new Materia(4,30,"Mecánica de los Fluidos", {cursadas: [17], aprobadas:[12,13]}),//Actualizar desde aca
    new Materia(4,31,"Electrotecnia y Máquinas Eléctricas", {cursadas: [12,13], aprobadas:[1,3,4]}),
    new Materia(4,32,"Electrónica y Sistemas de Control", {cursadas: [12,13,22], aprobadas:[1,3,4]}),
    new Materia(4,33,"Estabilidad III", {cursadas: [19], aprobadas:[1,3,4,10]}),
    new Materia(5,34,"Tecnología de Fabricación", {cursadas: [27,29], aprobadas:[9,10,11,21]}),
    new Materia(5,35,"Máquinas Alternativas y Turbomáquinas", {cursadas: [28], aprobadas:[13,17]}),
    new Materia(5,36,"Instalaciones Industriales", {cursadas: [20,28,30,31,32], aprobadas:[10,14,17]}),
    new Materia(5,37,"Organización Industrial", {cursadas: [26], aprobadas:[15]}),
    new Materia(5,38,"Legislación", {cursadas: [15], aprobadas:[5]}),
    new Materia(5,39,"Mantenimiento", {cursadas: [20,26,27], aprobadas:[11,13,18,19]}),
    new Materia(5,40,"Proyecto Final (Int)", {cursadas: [27,29,31,32], aprobadas:[18,19,20,21]}),
];

export {Materia, materias};